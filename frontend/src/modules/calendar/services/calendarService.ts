import type { CalendarDayData } from "../models/CalendarModel";

export async function getCalendarMonth(year: number, month: number): Promise<CalendarDayData[]> {
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const data: CalendarDayData[] = [];

  for (let day = 1; day <= daysInMonth; day++) {
    data.push({
      date: new Date(year, month, day).toISOString(),
      tasksCount: Math.floor(Math.random() * 4) // simulação
    });
  }

  return data;
}
