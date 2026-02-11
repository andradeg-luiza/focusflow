<template>
  <div class="modal-backdrop" @click.self="emitClose">
    <div class="modal">
      <header class="modal__header">
        <h3>Nova Tarefa</h3>
      </header>

      <div class="modal__body">
        <label class="field">
          <span>Título</span>
          <input
            v-model="title"
            type="text"
            placeholder="Digite o título da tarefa..."
          />
        </label>

        <label class="field">
          <span>Alerta (minutos) — opcional</span>
          <input
            v-model.number="alertInterval"
            type="number"
            min="1"
            placeholder="Ex: 25"
          />
        </label>
      </div>

      <footer class="modal__footer">
        <button class="btn cancel" @click="emitClose">Cancelar</button>
        <button class="btn create" @click="submit">Criar</button>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  create: [payload: { title: string; alertInterval: number | null }];
  close: [];
}>();

const title = ref("");
const alertInterval = ref<number | null>(null);

function submit() {
  if (!title.value.trim()) return;

  emit("create", {
    title: title.value.trim(),
    alertInterval: alertInterval.value || null
  });

  title.value = "";
  alertInterval.value = null;
}

function emitClose() {
  emit("close");
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.modal {
  background: var(--surface);
  padding: 1.5rem;
  border-radius: 8px;
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.modal__header h3 {
  margin: 0;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.field input {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid var(--border);
}

.modal__footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.btn {
  padding: 0.4rem 0.75rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.btn.cancel {
  background: var(--surface-hover);
}

.btn.create {
  background: var(--primary);
  color: white;
}
</style>
