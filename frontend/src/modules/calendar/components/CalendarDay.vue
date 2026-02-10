<template>
  <div class="day" :class="{ today: isToday }">
    <strong>{{ dayNumber }}</strong>
    <small>{{ tasksCount }} tarefas</small>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  date: string;
  tasksCount: number;
  today: Date;
}>();

const day = new Date(props.date);

const dayNumber = computed(() => day.getDate());

const isToday = computed(() => {
  return (
    day.getDate() === props.today.getDate() &&
    day.getMonth() === props.today.getMonth() &&
    day.getFullYear() === props.today.getFullYear()
  );
});
</script>

<style scoped>
.day {
  border: 1px solid #ddd;
  padding: 0.5rem;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.today {
  background: #f0f8ff;
  border-color: #007bff;
}
</style>
