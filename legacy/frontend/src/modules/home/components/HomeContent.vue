<template>
  <section class="home-content">
    <p class="home-message">{{ message }}</p>
  </section>
</template>

<script setup lang="ts">
defineProps<{ message: string }>();
</script>

<style scoped>
.home-content {
  font-size: 1.1rem;
}

.home-message {
  opacity: 0.9;
}
</style>
