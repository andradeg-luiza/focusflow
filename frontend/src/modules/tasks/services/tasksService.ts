import type { Task } from "../models/TaskModel";

let tasks: Task[] = [
  {
    id: "1",
    title: "Estudar Vue 3",
    status: "todo",
    createdAt: new Date().toISOString(),

    timeSpent: 0,
    isRunning: false,
    estimatedTime: null,
    alertInterval: null,
    reward: 0
  },
  {
    id: "2",
    title: "Criar módulo de tarefas",
    status: "doing",
    createdAt: new Date().toISOString(),

    timeSpent: 0,
    isRunning: false,
    estimatedTime: null,
    alertInterval: 25,
    reward: 0
  }
];

export async function getTasks(): Promise<Task[]> {
  return tasks;
}

export async function addTask(payload: {
  title: string;
  alertInterval: number | null;
  estimatedTime?: number | null;
}): Promise<Task> {
  const newTask: Task = {
    id: crypto.randomUUID(),
    title: payload.title,
    status: "todo",
    createdAt: new Date().toISOString(),

    timeSpent: 0,
    isRunning: false,
    estimatedTime: payload.estimatedTime ?? null,
    alertInterval: payload.alertInterval ?? null,
    reward: 0
  };

  tasks.push(newTask);
  return newTask;
}

export async function updateTaskStatus(
  id: string,
  status: Task["status"]
): Promise<void> {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.status = status;
  }
}

export async function deleteTask(id: string): Promise<void> {
  tasks = tasks.filter(t => t.id !== id);
}
