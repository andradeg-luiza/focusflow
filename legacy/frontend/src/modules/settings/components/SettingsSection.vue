<template>
  <section class="section">
    <h3 class="section-title">{{ title }}</h3>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<style scoped>
.section {
  margin-bottom: 2rem;
}

.section-title {
  margin-bottom: 1rem;
  font-weight: 600;
}
</style>
