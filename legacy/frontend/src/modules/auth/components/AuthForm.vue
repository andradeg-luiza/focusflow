<template>
  <form @submit.prevent="onSubmit">
    <slot />
    <button type="submit">{{ buttonText }}</button>
  </form>
</template>

<script setup lang="ts">
defineProps<{
  buttonText: string;
  onSubmit: () => void;
}>();
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
button {
  padding: 0.5rem 1rem;
}
</style>
