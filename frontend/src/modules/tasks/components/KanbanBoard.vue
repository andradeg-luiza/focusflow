<template>
  <div class="kanban-board">
    <KanbanColumn
      title="A Fazer"
      status="todo"
      :tasks="tasksByStatus.todo"
      @drop="onDrop"
    />

    <KanbanColumn
      title="Fazendo"
      status="doing"
      :tasks="tasksByStatus.doing"
      @drop="onDrop"
    />

    <KanbanColumn
      title="Pausadas"
      status="paused"
      :tasks="tasksByStatus.paused"
      @drop="onDrop"
    />

    <KanbanColumn
      title="Concluídas"
      status="done"
      :tasks="tasksByStatus.done"
      @drop="onDrop"
    />
  </div>
</template>

<script setup lang="ts">
import KanbanColumn from "./KanbanColumn.vue";
import type { Task } from "../models/TaskModel";
import { useTasks } from "../composables/useTasks";

// Pegamos tasks e moveTask do composable
const { tasks, moveTask } = useTasks();

// Organiza tarefas por status
const tasksByStatus = {
  get todo() {
    return tasks.value.filter(t => t.status === "todo");
  },
  get doing() {
    return tasks.value.filter(t => t.status === "doing");
  },
  get paused() {
    return tasks.value.filter(t => t.status === "paused");
  },
  get done() {
    return tasks.value.filter(t => t.status === "done");
  }
};

// -----------------------------
// DRAG & DROP — PASSO 3
// -----------------------------
function onDrop(taskId: string, newStatus: string) {
  moveTask(taskId, newStatus as Task["status"]);
}
</script>

<style scoped>
.kanban-board {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 1rem 0;
}
</style>
