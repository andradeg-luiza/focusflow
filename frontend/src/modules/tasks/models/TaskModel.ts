export interface Task {
  id: string;
  title: string;
  status: "todo" | "doing" | "paused" | "done";
  createdAt: string;

  // Timer
  timeSpent: number; // em segundos
  timerStartedAt: string | null;

  // Alertas
  alertInterval: number | null; // em minutos

  // Recompensas
  reward: number; // pontos
}
