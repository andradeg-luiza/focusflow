<template>
  <AppLayout>
    <template #header>
      <h2>Configurações</h2>
    </template>

    <template #sidebar>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Tarefas</li>
          <li>Pomodoro</li>
          <li>Calendário</li>
          <li><strong>Configurações</strong></li>
        </ul>
      </nav>
    </template>

    <SettingsSection title="Tema">
      <ThemeSelector v-model="settings.theme" @change="updateTheme(settings.theme)" />
    </SettingsSection>

    <SettingsSection title="Pomodoro">
      <PomodoroSettings
        v-model="settings.pomodoroDuration"
        @change="updatePomodoroDuration(settings.pomodoroDuration)"
      />
    </SettingsSection>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from "@/shared/layouts/AppLayout.vue";
import SettingsSection from "../components/SettingsSection.vue";
import ThemeSelector from "../components/ThemeSelector.vue";
import { useSettings } from "../composables/useSettings";

const { settings, updateTheme, updatePomodoroDuration } = useSettings();
</script>
