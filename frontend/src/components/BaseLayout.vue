<template>
  <div class="layout">
    <header class="header">
      <h1>FocusFlow</h1>
    </header>

    <main class="content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  padding: 1rem;
  background: #1e1e1e;
  color: white;
}

.content {
  flex: 1;
  padding: 1rem;
}
</style>
