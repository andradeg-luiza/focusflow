<template>
  <AppLayout>
    <template #header>
      <h2>Tarefas</h2>
    </template>

    <template #sidebar>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li><strong>Tarefas</strong></li>
          <li>Pomodoro</li>
          <li>Calendário</li>
        </ul>
      </nav>
    </template>

    <TaskForm :onSubmit="createTask" />
    <TaskList :tasks="tasks" :toggle="toggle" :remove="remove" />
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from "@/shared/layouts/AppLayout.vue";
import TaskForm from "../components/TaskForm.vue";
import TaskList from "../components/TaskList.vue";
import { useTasks } from "../composables/useTasks";

const { tasks, createTask, toggle, remove } = useTasks();
</script>
