import type { Task } from "../models/TaskModel";

export function useTaskRewards() {
  const POINTS_PER_MINUTE = 2;
  const POINTS_ON_COMPLETE = 10;

  function ensureReward(task: Task) {
    if (task.reward == null) {
      task.reward = 0;
    }
  }

  function rewardForFocus(task: Task) {
    ensureReward(task);

    const minutes = Math.floor(task.timeSpent / 60);
    const points = minutes * POINTS_PER_MINUTE;

    task.reward += points;
    return points;
  }

  function rewardForCompletion(task: Task) {
    ensureReward(task);

    task.reward += POINTS_ON_COMPLETE;
    return POINTS_ON_COMPLETE;
  }

  function resetRewards(task: Task) {
    task.reward = 0;
  }

  return {
    rewardForFocus,
    rewardForCompletion,
    resetRewards
  };
}
