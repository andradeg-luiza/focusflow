<template>
  <section class="stats">
    <p>Tarefas hoje: {{ stats.tasksToday }}</p>
    <p>Pomodoros concluídos: {{ stats.pomodorosCompleted }}</p>
    <p>Tempo focado: {{ stats.focusTimeMinutes }} min</p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  stats: {
    tasksToday: number;
    pomodorosCompleted: number;
    focusTimeMinutes: number;
  };
}>();
</script>

<style scoped>
.stats {
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
