<template>
  <div
    class="task-card"
    draggable="true"
    @dragstart="onDragStart"
    @click="emit('click', task)"
  >
    <h4 class="task-title">{{ task.title }}</h4>

    <p class="task-time">
      {{ formattedTime }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Task } from "../models/TaskModel";
import { computed } from "vue";

const props = defineProps<{
  task: Task;
}>();

const emit = defineEmits<{
  click: [task: Task];
}>();

function onDragStart(event: DragEvent) {
  event.dataTransfer?.setData("taskId", props.task.id);
}

const formattedTime = computed(() => {
  const total = props.task.timeSpent;
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}m ${s}s`;
});
</script>

<style scoped>
.task-card {
  background: var(--surface);
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: 0.2s;
}

.task-card:hover {
  transform: translateY(-2px);
}

.task-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.task-time {
  opacity: 0.7;
  font-size: 0.9rem;
}
</style>
