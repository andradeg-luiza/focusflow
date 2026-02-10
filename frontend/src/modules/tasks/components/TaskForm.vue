<template>
  <form @submit.prevent="submit">
    <input v-model="title" placeholder="Nova tarefa..." />
    <button type="submit">Adicionar</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const title = ref("");

const props = defineProps<{
  onSubmit: (title: string) => void;
}>();

function submit() {
  if (!title.value.trim()) return;
  props.onSubmit(title.value);
  title.value = "";
}
</script>
