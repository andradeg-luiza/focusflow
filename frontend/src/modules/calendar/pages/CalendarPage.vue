<template>
  <AppLayout>
    <template #header>
      <h2>Calendário</h2>
    </template>

    <template #sidebar>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Tarefas</li>
          <li>Pomodoro</li>
          <li><strong>Calendário</strong></li>
        </ul>
      </nav>
    </template>

    <CalendarGrid :days="days" :today="today" />
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from "@/shared/layouts/AppLayout.vue";
import CalendarGrid from "../components/CalendarGrid.vue";
import { useCalendar } from "../composables/useCalendar";

const { days, today } = useCalendar();
</script>
