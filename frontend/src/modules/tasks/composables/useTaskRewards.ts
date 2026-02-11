import type { Task } from "../models/TaskModel";

export function useTaskRewards() {
  // Pontos por minuto focado
  const POINTS_PER_MINUTE = 2;

  // Pontos por concluir tarefa
  const POINTS_ON_COMPLETE = 10;

  // Recompensa por tempo focado
  function rewardForFocus(task: Task) {
    const minutes = Math.floor(task.timeSpent / 60);
    const points = minutes * POINTS_PER_MINUTE;

    task.reward += points;
    return points;
  }

  // Recompensa por concluir tarefa
  function rewardForCompletion(task: Task) {
    task.reward += POINTS_ON_COMPLETE;
    return POINTS_ON_COMPLETE;
  }

  // Resetar pontos (caso queira usar futuramente)
  function resetRewards(task: Task) {
    task.reward = 0;
  }

  return {
    rewardForFocus,
    rewardForCompletion,
    resetRewards
  };
}
