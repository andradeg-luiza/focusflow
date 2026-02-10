<template>
  <AppLayout>
    <template #header>
      <h2>Pomodoro</h2>
    </template>

    <template #sidebar>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Tarefas</li>
          <li><strong>Pomodoro</strong></li>
          <li>Calendário</li>
        </ul>
      </nav>
    </template>

    <PomodoroTimer :timeLeft="timeLeft" />
    <PomodoroControls :start="start" :stop="stop" :reset="reset" />

    <p>Ciclo atual: {{ cycle }}</p>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from "@/shared/layouts/AppLayout.vue";
import PomodoroTimer from "../components/PomodoroTimer.vue";
import PomodoroControls from "../components/PomodoroControls.vue";
import { usePomodoro } from "../composables/usePomodoro";

const { timeLeft, cycle, start, stop, reset } = usePomodoro();
</script>
