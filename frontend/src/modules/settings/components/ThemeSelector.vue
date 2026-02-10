<template>
  <div class="theme-selector">
    <label>
      <input type="radio" value="light" v-model="model" />
      Claro
    </label>

    <label>
      <input type="radio" value="dark" v-model="model" />
      Escuro
    </label>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<"light" | "dark">();
</script>

<style scoped>
.theme-selector {
  display: flex;
  gap: 1rem;
}
</style>
