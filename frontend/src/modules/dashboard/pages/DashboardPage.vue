<template>
  <AppLayout>
    <template #header>
      <DashboardHeader />
    </template>

    <template #sidebar>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Tarefas</li>
          <li>Pomodoro</li>
          <li>Calendário</li>
        </ul>
      </nav>
    </template>

    <DashboardStats v-if="stats" :stats="stats" />
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from "@/shared/layouts/AppLayout.vue";
import DashboardHeader from "../components/DashboardHeader.vue";
import DashboardStats from "../components/DashboardStats.vue";
import { useDashboard } from "../composables/useDashboard";

const { stats } = useDashboard();
</script>
