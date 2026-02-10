import { ref, onMounted } from "vue";
import { getTasks, addTask, toggleTask, deleteTask } from "../services/tasksService";
import type { Task } from "../models/TaskModel";

export function useTasks() {
  const tasks = ref<Task[]>([]);
  const loading = ref(false);

  onMounted(async () => {
    tasks.value = await getTasks();
  });

  async function createTask(title: string) {
    const newTask = await addTask(title);
    tasks.value.push(newTask);
  }

  async function toggle(id: string) {
    await toggleTask(id);
    const task = tasks.value.find(t => t.id === id);
    if (task) task.done = !task.done;
  }

  async function remove(id: string) {
    await deleteTask(id);
    tasks.value = tasks.value.filter(t => t.id !== id);
  }

  return {
    tasks,
    loading,
    createTask,
    toggle,
    remove
  };
}
