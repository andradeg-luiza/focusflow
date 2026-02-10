<template>
  <header class="home-header">
    <h2>{{ title }}</h2>
  </header>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<style scoped>
.home-header {
  margin-bottom: 1rem;
}
</style>
