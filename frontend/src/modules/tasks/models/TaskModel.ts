export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "todo" | "doing" | "paused" | "done";
  createdAt: string;

  timeSpent: number;          // segundos acumulados
  isRunning: boolean;         // timer ativo?
  estimatedTime: number | null; // estimativa em minutos
  alertInterval: number | null; // opcional, usado pelo sistema de alertas
  reward: number;            // opcional
}
