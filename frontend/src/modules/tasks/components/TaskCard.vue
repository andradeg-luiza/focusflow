<template>
  <div
    class="task-card"
    draggable="true"
    @dragstart="onDragStart"
  >
    <header class="task-card__header">
      <h4 class="task-card__title">{{ task.title }}</h4>
    </header>

    <div class="task-card__body">
      <p class="task-card__time">
        ⏱ {{ formattedTime }}
      </p>

      <p class="task-card__status">
        {{ statusLabel }}
      </p>
    </div>

    <footer class="task-card__footer">
      <button class="task-card__btn" @click.stop="toggleTimer">
        {{ task.timerStartedAt ? "Pausar" : "Iniciar" }}
      </button>

      <button class="task-card__btn done" @click.stop="complete">
        Concluir
      </button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Task } from "../models/TaskModel";

const props = defineProps<{
  task: Task;
  onToggleTimer: (task: Task) => void;
  onComplete: (task: Task) => void;
}>();

// -----------------------------
// DRAG & DROP — PASSO 1
// -----------------------------
function onDragStart(event: DragEvent) {
  event.dataTransfer?.setData("taskId", props.task.id);
}

// -----------------------------
// Lógica existente
// -----------------------------
const statusLabel = computed(() => {
  const map = {
    todo: "A Fazer",
    doing: "Fazendo",
    paused: "Pausada",
    done: "Concluída"
  };
  return map[props.task.status];
});

const formattedTime = computed(() => {
  const total = props.task.timeSpent;
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}m ${s}s`;
});

function toggleTimer() {
  props.onToggleTimer(props.task);
}

function complete() {
  props.onComplete(props.task);
}
</script>

<style scoped>
.task-card {
  background: var(--surface);
  border-radius: 8px;
  padding: 1rem;
  cursor: grab;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border: 1px solid var(--border);
  transition: 0.2s ease;
}

.task-card:active {
  cursor: grabbing;
}

.task-card__header {
  font-weight: 600;
}

.task-card__title {
  margin: 0;
}

.task-card__body {
  font-size: 0.9rem;
  opacity: 0.8;
}

.task-card__footer {
  display: flex;
  gap: 0.5rem;
}

.task-card__btn {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background: var(--primary);
  color: white;
  font-size: 0.8rem;
}

.task-card__btn.done {
  background: var(--success);
}
</style>
