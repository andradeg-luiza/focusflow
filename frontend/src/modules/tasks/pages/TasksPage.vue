<template>
  <AppLayout>
    <template #header>
      <h2>Tarefas</h2>
    </template>

    <template #actions>
      <button class="new-task-btn" @click="showCreateModal = true">
        + Nova tarefa
      </button>
    </template>

    <KanbanBoard
      :tasks="tasks"
      @select="selectTask"
    />

    <TaskCreateModal
      v-if="showCreateModal"
      @create="createTask"
      @close="showCreateModal = false"
    />
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from "@/shared/layouts/AppLayout.vue";
import KanbanBoard from "../components/KanbanBoard.vue";
import TaskCreateModal from "../components/TaskCreateModal.vue";

import { useTasks } from "../composables/useTasks";

const {
  tasks,
  showCreateModal,
  createTask,
  selectTask
} = useTasks();
</script>

<style scoped>
.new-task-btn {
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
}

.new-task-btn:hover {
  background: var(--primary-hover);
}
</style>
