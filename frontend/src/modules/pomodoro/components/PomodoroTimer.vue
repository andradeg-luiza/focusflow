<template>
  <div class="timer">
    {{ minutes }}:{{ seconds }}
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  timeLeft: number;
}>();

const minutes = computed(() => String(Math.floor(props.timeLeft / 60)).padStart(2, "0"));
const seconds = computed(() => String(props.timeLeft % 60).padStart(2, "0"));
</script>

<style scoped>
.timer {
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
}
</style>
