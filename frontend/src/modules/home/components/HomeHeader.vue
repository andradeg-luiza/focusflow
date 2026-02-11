<template>
  <header class="home-header">
    <h2 class="home-title">{{ title }}</h2>
  </header>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<style scoped>
.home-header {
  margin-bottom: 1rem;
}

.home-title {
  font-weight: 600;
}
</style>
