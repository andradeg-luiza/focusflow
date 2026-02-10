import { ref, onMounted } from "vue";
import { getDashboardStats } from "../services/dashboardService";
import type { DashboardStats } from "../models/DashboardModel";

export function useDashboard() {
  const stats = ref<DashboardStats | null>(null);

  onMounted(async () => {
    stats.value = await getDashboardStats();
  });

  return {
    stats
  };
}
