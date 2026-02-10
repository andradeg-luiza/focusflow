import { ref, onUnmounted } from "vue";
import { getDefaultPomodoroDuration } from "../services/pomodoroService";

export function usePomodoro() {
  const timeLeft = ref(getDefaultPomodoroDuration());
  const isRunning = ref(false);
  const cycle = ref(1);

  let interval: number | null = null;

  function start() {
    if (isRunning.value) return;
    isRunning.value = true;

    interval = window.setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--;
      } else {
        stop();
        cycle.value++;
        timeLeft.value = getDefaultPomodoroDuration();
      }
    }, 1000);
  }

  function stop() {
    isRunning.value = false;
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  function reset() {
    stop();
    timeLeft.value = getDefaultPomodoroDuration();
  }

  onUnmounted(() => stop());

  return {
    timeLeft,
    isRunning,
    cycle,
    start,
    stop,
    reset
  };
}
