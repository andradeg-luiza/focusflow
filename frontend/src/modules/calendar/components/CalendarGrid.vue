<template>
  <div class="grid">
    <CalendarDay
      v-for="day in days"
      :key="day.date"
      :date="day.date"
      :tasksCount="day.tasksCount"
      :today="today"
    />
  </div>
</template>

<script setup lang="ts">
import CalendarDay from "./CalendarDay.vue";
import type { CalendarDayData } from "../models/CalendarModel";

defineProps<{
  days: CalendarDayData[];
  today: Date;
}>();
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
}
</style>
