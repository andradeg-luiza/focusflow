<template>
  <section class="home-content">
    <p>{{ message }}</p>
  </section>
</template>

<script setup lang="ts">
defineProps<{ message: string }>();
</script>

<style scoped>
.home-content {
  font-size: 1.1rem;
}
</style>
