import type { UserSettings } from "../models/SettingsModel";

const STORAGE_KEY = "focusflow-settings";

export function loadSettings(): UserSettings {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved) {
    return JSON.parse(saved);
  }

  return {
    theme: "light",
    pomodoroDuration: 25
  };
}

export function saveSettings(settings: UserSettings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}
