<template>
  <div class="home-page">
    <HomeHeader title="FocusFlow" />
    <HomeContent message="Organize suas tarefas, mantenha o foco e evolua todos os dias." />

    <div class="home-actions">
      <router-link to="/tasks" class="btn">
        Ir para minhas tarefas
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeHeader from "../components/HomeHeader.vue";
import HomeContent from "../components/HomeContent.vue";
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.home-actions {
  margin-top: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  background: var(--primary);
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
}
</style>
