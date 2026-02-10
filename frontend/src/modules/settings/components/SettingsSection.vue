<template>
  <section class="section">
    <h3>{{ title }}</h3>
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
</style>
