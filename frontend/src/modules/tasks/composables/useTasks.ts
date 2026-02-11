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

  onMounted(async () => {
    loading.value = true;
    tasks.value = await getTasks();
    loading.value = false;
  });

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
    removeTask
  };
}
