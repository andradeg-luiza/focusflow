import { ref, watch, onUnmounted } from "vue";
import type { Task } from "../models/TaskModel";

export function useTaskAlerts() {
  const activeTask = ref<Task | null>(null);
  const lastAlertAt = ref<number | null>(null);
  const intervalId = ref<number | null>(null);

  // Inicia monitoramento de alertas
  function startAlerts(task: Task) {
    activeTask.value = task;
    lastAlertAt.value = Date.now();

    if (intervalId.value) clearInterval(intervalId.value);

    intervalId.value = window.setInterval(() => {
      if (!activeTask.value) return;
      if (!activeTask.value.alertInterval) return;

      const now = Date.now();
      const minutesPassed = (now - (lastAlertAt.value || now)) / 1000 / 60;

      if (minutesPassed >= activeTask.value.alertInterval) {
        triggerAlert(activeTask.value);
        lastAlertAt.value = now;
      }
    }, 1000);
  }

  // Pausa alertas
  function stopAlerts() {
    activeTask.value = null;
    lastAlertAt.value = null;

    if (intervalId.value) {
      clearInterval(intervalId.value);
      intervalId.value = null;
    }
  }

  // Dispara alerta (você decide como exibir depois)
  function triggerAlert(task: Task) {
    console.log(`🔔 Alerta da tarefa: ${task.title}`);
    // Aqui você pode futuramente:
    // - abrir modal
    // - tocar som
    // - enviar notificação
  }

  // Se a tarefa ativa mudar, reinicia alertas
  watch(activeTask, (newTask) => {
    if (!newTask) {
      stopAlerts();
      return;
    }
    startAlerts(newTask);
  });

  onUnmounted(() => {
    if (intervalId.value) clearInterval(intervalId.value);
  });

  return {
    activeTask,
    startAlerts,
    stopAlerts
  };
}
