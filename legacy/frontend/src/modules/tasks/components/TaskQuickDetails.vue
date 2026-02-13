<template>
  <div class="quick-details" v-if="task">
    <h3>Detalhes da tarefa</h3>

    <label>
      Descrição:
      <textarea v-model="local.description" />
    </label>

    <label>
      Estimativa (minutos):
      <input type="number" v-model.number="local.estimatedTime" min="1" />
    </label>

    <div class="subtasks">
      <h4>Subtarefas</h4>

      <div
        v-for="(sub, i) in local.subtasks"
        :key="i"
        class="subtask"
      >
        <input type="checkbox" v-model="sub.done" />
        <input type="text" v-model="sub.title" />
      </div>

      <button @click="addSubtask">+ Adicionar subtarefa</button>
    </div>

    <button class="save-btn" @click="save">Salvar</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";
import type { Task } from "../models/TaskModel";

const props = defineProps<{
  task: Task | null;
}>();

const emit = defineEmits<{
  save: [updated: any];
}>();

const local = reactive({
  description: "",
  estimatedTime: null as number | null,
  subtasks: [] as { title: string; done: boolean }[]
});

watch(
  () => props.task,
  (t) => {
    if (!t) return;

    local.description = t.description ?? "";
    local.estimatedTime = t.estimatedTime ?? null;
    local.subtasks = (t as any).subtasks ?? [];
  },
  { immediate: true }
);

function addSubtask() {
  local.subtasks.push({ title: "", done: false });
}

function save() {
  emit("save", { ...local });
}
</script>

<style scoped>
.quick-details {
  background: var(--surface);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

textarea {
  width: 100%;
  min-height: 60px;
}

.subtask {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.3rem;
}

.save-btn {
  background: var(--primary);
  color: white;
  padding: 0.6rem;
  border-radius: 6px;
}
</style>
