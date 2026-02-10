<template>
  <div class="pomodoro-settings">
    <label>Duração do Pomodoro (minutos):</label>
    <input type="number" v-model.number="model" min="1" max="60" />
  </div>
</template>

<script setup lang="ts">
const model = defineModel<number>();
</script>

<style scoped>
.pomodoro-settings {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
