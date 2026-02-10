import type { DashboardStats } from "../models/DashboardModel";

export async function getDashboardStats(): Promise<DashboardStats> {
  return {
    tasksToday: 3,
    pomodorosCompleted: 2,
    focusTimeMinutes: 45
  };
}
