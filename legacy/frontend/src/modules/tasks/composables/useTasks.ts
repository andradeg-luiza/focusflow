import { ref, onMounted } from "vue";
import type { Task } from "../models/TaskModel";
import {
  getTasks,
  addTask,
  updateTaskStatus,
  deleteTask
} from "../services/tasksService";

export function useTasks() {
  const tasks = ref<Task[]>([]);
  const loading = ref(false);
  const selectedTask = ref<Task | null>(null);
  const showCreateModal = ref(false);

  // -----------------------------
  // TIMER SYSTEM (incremental)
  // -----------------------------
  const intervals = new Map<string, number>();

  function startTimer(taskId: string) {
    const task = tasks.value.find(t => t.id === taskId);
    if (!task || task.isRunning) return;

    task.isRunning = true;

    const interval = window.setInterval(() => {
      task.timeSpent++;
    }, 1000);

    intervals.set(taskId, interval);
  }

  function pauseTimer(taskId: string) {
    const task = tasks.value.find(t => t.id === taskId);
    if (!task) return;

    task.isRunning = false;

    const interval = intervals.get(taskId);
    if (interval) {
      clearInterval(interval);
      intervals.delete(taskId);
    }
  }

  function finishTimer(taskId: string) {
    pauseTimer(taskId);
  }

  function formatTime(seconds: number) {
    const h = Math.floor(seconds / 3600).toString().padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
    const s = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  }

  // -----------------------------
  // LOAD TASKS
  // -----------------------------
  onMounted(async () => {
    loading.value = true;
    tasks.value = await getTasks();
    loading.value = false;
  });

  // -----------------------------
  // CRUD
  // -----------------------------
  async function createTask(payload: { title: string; alertInterval: number | null }) {
    const newTask = await addTask({
      title: payload.title,
      alertInterval: payload.alertInterval
    });

    tasks.value.push(newTask);
    showCreateModal.value = false;
  }

  function selectTask(task: Task) {
    selectedTask.value = task;
  }

  async function moveTask(id: string, newStatus: Task["status"]) {
    const task = tasks.value.find(t => t.id === id);
    if (!task) return;

    task.status = newStatus;

    if (newStatus === "doing") {
      startTimer(id);
    } else if (newStatus === "paused") {
      pauseTimer(id);
    } else if (newStatus === "done") {
      finishTimer(id);
    } else if (newStatus === "todo") {
      pauseTimer(id);
    }

    await updateTaskStatus(id, newStatus);
  }

  async function completeTask(id: string) {
    await moveTask(id, "done");
  }

  async function removeTask(id: string) {
    await deleteTask(id);
    tasks.value = tasks.value.filter(t => t.id !== id);
  }

  return {
    tasks,
    loading,
    selectedTask,
    showCreateModal,

    createTask,
    selectTask,
    moveTask,
    completeTask,
    removeTask,

    startTimer,
    pauseTimer,
    finishTimer,
    formatTime
  };
}
