<template>
  <div
    class="task-card"
    draggable="true"
    @dragstart="onDragStart"
    @click="emit('select', task)"
  >
    <h4 class="task-title">{{ task.title }}</h4>

    <!-- FAZENDO -->
    <p v-if="task.status === 'doing'" class="task-time doing">
      {{ formatTime(task.timeSpent) }}
    </p>

    <!-- PAUSADAS -->
    <p v-if="task.status === 'paused'" class="task-time paused">
      {{ formatTime(task.timeSpent) }}
    </p>

    <!-- CONCLUÍDAS -->
    <div v-if="task.status === 'done'" class="task-done-info">
      <p class="task-time done">
        {{ formatTime(task.timeSpent) }}
      </p>

      <p v-if="task.estimatedTime" class="task-estimate">
        Estimado: {{ formatTime(task.estimatedTime * 60) }}
      </p>

      <p v-if="task.estimatedTime" class="task-diff">
        Diferença:
        {{ timeDifference }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Task } from "../models/TaskModel";
import { computed } from "vue";
import { useTasks } from "../composables/useTasks";

const props = defineProps<{ task: Task }>();

const emit = defineEmits<{
  select: [task: Task];
}>();

const { formatTime } = useTasks();

function onDragStart(event: DragEvent) {
  event.dataTransfer?.setData("taskId", props.task.id);
}

const timeDifference = computed(() => {
  if (!props.task.estimatedTime) return null;

  const estimatedSeconds = props.task.estimatedTime * 60;
  const diff = props.task.timeSpent - estimatedSeconds;

  const sign = diff >= 0 ? "+" : "-";
  return `${sign}${formatTime(Math.abs(diff))}`;
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
  opacity: 0.8;
  font-size: 0.9rem;
  font-weight: 500;
}

.doing {
  color: var(--primary);
}

.paused {
  color: var(--warning);
}

.done {
  color: var(--success);
}

.task-estimate,
.task-diff {
  font-size: 0.8rem;
  opacity: 0.7;
}
</style>
