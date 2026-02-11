import { ref, onUnmounted } from "vue";
import type { Task } from "../models/TaskModel";

export function useTaskTimer() {
  const activeTask = ref<Task | null>(null);
  const intervalId = ref<number | null>(null);

  // Iniciar timer
  function start(task: Task) {
    // Se já existe um timer rodando, pausa antes
    if (activeTask.value && intervalId.value) {
      pause(activeTask.value);
    }

    activeTask.value = task;
    task.timerStartedAt = new Date().toISOString();

    intervalId.value = window.setInterval(() => {
      if (!task.timerStartedAt) return;

      const startTime = new Date(task.timerStartedAt).getTime();
      const now = Date.now();
      const diff = Math.floor((now - startTime) / 1000);

      task.timeSpent = diff;
    }, 1000);
  }

  // Pausar timer
  function pause(task: Task) {
    if (intervalId.value) {
      clearInterval(intervalId.value);
      intervalId.value = null;
    }

    if (task.timerStartedAt) {
      const startTime = new Date(task.timerStartedAt).getTime();
      const now = Date.now();
      const diff = Math.floor((now - startTime) / 1000);

      task.timeSpent += diff;
    }

    task.timerStartedAt = null;
    activeTask.value = null;
  }

  // Parar timer (pausa + reset opcional)
  function stop(task: Task) {
    pause(task);
    task.timerStartedAt = null;
  }

  // Limpa interval ao desmontar
  onUnmounted(() => {
    if (intervalId.value) {
      clearInterval(intervalId.value);
    }
  });

  return {
    activeTask,
    start,
    pause,
    stop
  };
}
