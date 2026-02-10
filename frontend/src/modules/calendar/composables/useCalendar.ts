import { ref, onMounted } from "vue";
import { getCalendarMonth } from "../services/calendarService";
import type { CalendarDayData } from "../models/CalendarModel";

export function useCalendar() {
  const days = ref<CalendarDayData[]>([]);
  const today = new Date();

  onMounted(async () => {
    days.value = await getCalendarMonth(today.getFullYear(), today.getMonth());
  });

  return {
    days,
    today
  };
}
