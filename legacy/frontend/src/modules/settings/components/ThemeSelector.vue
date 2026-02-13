<template>
  <div class="theme-selector">
    <label class="theme-option">
      <input type="radio" value="light" v-model="model" />
      Claro
    </label>

    <label class="theme-option">
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

.theme-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
