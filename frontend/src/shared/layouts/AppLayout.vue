<template>
  <div class="app-layout">
    <aside class="sidebar">
      <slot name="sidebar">
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Tarefas</li>
            <li>Calendário</li>
          </ul>
        </nav>
      </slot>
    </aside>

    <div class="main-area">
      <header class="header">
        <slot name="header">
          <h1>FocusFlow</h1>
        </slot>
      </header>

      <main class="content">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 220px;
  background: #1e1e1e;
  color: white;
  padding: 1rem;
}

.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 1rem;
  background: #2a2a2a;
  color: white;
}

.content {
  flex: 1;
  padding: 1rem;
}
</style>
