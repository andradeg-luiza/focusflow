import { ref } from "vue";
import { loadSettings, saveSettings } from "../services/settingsService";
import type { UserSettings } from "../models/SettingsModel";

export function useSettings() {
  const settings = ref<UserSettings>(loadSettings());

  function updateTheme(theme: "light" | "dark") {
    settings.value.theme = theme;
    saveSettings(settings.value);
  }

  function updatePomodoroDuration(minutes: number) {
    settings.value.pomodoroDuration = minutes;
    saveSettings(settings.value);
  }

  return {
    settings,
    updateTheme,
    updatePomodoroDuration
  };
}
