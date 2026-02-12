<template>
  <section
    class="kanban-column"
    @dragover.prevent
    @drop="onDrop"
  >
    <header class="kanban-column__header">
      <h3>{{ title }}</h3>
    </header>

    <div class="kanban-column__content">
      <TaskCard
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @select="handleCardClick(task)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Task } from "../models/TaskModel";
import TaskCard from "./TaskCard.vue";

const props = defineProps<{
  title: string;
  tasks: Task[];
  status: "todo" | "doing" | "paused" | "done";
}>();

const emit = defineEmits<{
  drop: [taskId: string, newStatus: string];
  select: [task: Task];
}>();

function handleCardClick(task: Task) {
  emit("select", task);
}

function onDrop(event: DragEvent) {
  const taskId = event.dataTransfer?.getData("taskId");
  if (!taskId) return;

  emit("drop", taskId, props.status);
}
</script>

<style scoped>
.kanban-column {
  background: var(--surface);
  border-radius: 8px;
  padding: 1rem;
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
}

.kanban-column__header {
  margin-bottom: 1rem;
}

.kanban-column__content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
