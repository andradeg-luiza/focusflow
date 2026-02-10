<template>
  <ul>
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      :onToggle="() => toggle(task.id)"
      :onDelete="() => remove(task.id)"
    />
  </ul>
</template>

<script setup lang="ts">
import TaskItem from "./TaskItem.vue";
import type { Task } from "../models/TaskModel";

defineProps<{
  tasks: Task[];
  toggle: (id: string) => void;
  remove: (id: string) => void;
}>();
</script>
