<template>
  <li class="task-item">
    <input type="checkbox" :checked="task.done" @change="onToggle" />
    <span :class="{ done: task.done }">{{ task.title }}</span>
    <button @click="onDelete">x</button>
  </li>
</template>

<script setup lang="ts">
import type { Task } from "../models/TaskModel";

const props = defineProps<{
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}>();
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.done {
  text-decoration: line-through;
}
</style>
