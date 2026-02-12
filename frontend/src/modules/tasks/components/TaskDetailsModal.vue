<template>
  <div class="modal-backdrop" @click.self="onClose">
    <div class="modal">
      <header class="modal__header">
        <input
          v-model="editableTitle"
          class="modal__title-input"
        />
      </header>

      <section class="modal__body">
        <p><strong>Status:</strong> {{ statusLabel }}</p>
        <p><strong>Tempo:</strong> {{ formatTime(task.timeSpent) }}</p>
        <p><strong>Recompensa:</strong> {{ task.reward ?? 0 }} pts</p>

        <div v-if="task.alertInterval" class="alert-info">
          ⏰ Alerta a cada {{ task.alertInterval }} min
        </div>
      </section>

      <footer class="modal__footer">
        <button class="btn" @click="toggleTimer">
          {{ task.isRunning ? "Pausar" : "Iniciar" }}
        </button>

        <button class="btn success" @click="completeTaskAction">
          Concluir
        </button>

        <button class="btn cancel" @click="onClose">
          Fechar
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { Task } from "../models/TaskModel";

import { useTaskAlerts } from "../composables/useTaskAlerts";
import { useTaskRewards } from "../composables/useTaskRewards";
import { useTasks } from "../composables/useTasks";

const props = defineProps<{
  task: Task;
  onClose: () => void;
}>();

const {
  moveTask,
  completeTask,
  startTimer,
  pauseTimer,
  formatTime
} = useTasks();

const { startAlerts, stopAlerts } = useTaskAlerts();
const { rewardForFocus, rewardForCompletion } = useTaskRewards();

const editableTitle = ref(props.task.title);

watch(editableTitle, (newTitle) => {
  props.task.title = newTitle;
});

const statusLabel = computed(() => {
  const map = {
    todo: "A Fazer",
    doing: "Fazendo",
    paused: "Pausada",
    done: "Concluída"
  };
  return map[props.task.status];
});

function toggleTimer() {
  if (props.task.isRunning) {
    pauseTimer(props.task.id);
    stopAlerts();
    moveTask(props.task.id, "paused");
  } else {
    startTimer(props.task.id);
    if (props.task.alertInterval) startAlerts(props.task);
    moveTask(props.task.id, "doing");
  }
}

function completeTaskAction() {
  pauseTimer(props.task.id);
  stopAlerts();

  rewardForFocus(props.task);
  rewardForCompletion(props.task);

  completeTask(props.task.id);
  props.onClose();
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.modal {
  background: var(--surface);
  padding: 1.5rem;
  border-radius: 8px;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.modal__title-input {
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  background: transparent;
  outline: none;
}

.modal__footer {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: var(--primary);
  color: white;
}

.btn.success {
  background: var(--success);
}

.btn.cancel {
  background: var(--surface-hover);
}
</style>
