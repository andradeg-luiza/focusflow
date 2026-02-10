<template>
  <div class="controls">
    <button @click="start">Iniciar</button>
    <button @click="stop">Pausar</button>
    <button @click="reset">Resetar</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  start: () => void;
  stop: () => void;
  reset: () => void;
}>();
</script>

<style scoped>
.controls {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
button {
  padding: 0.5rem 1rem;
}
</style>
