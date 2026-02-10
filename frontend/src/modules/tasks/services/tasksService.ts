import type { Task } from "../models/TaskModel";

let tasks: Task[] = [
  { id: "1", title: "Estudar Vue 3", done: false, createdAt: new Date().toISOString() },
  { id: "2", title: "Criar módulo de tarefas", done: true, createdAt: new Date().toISOString() }
];

export async function getTasks(): Promise<Task[]> {
  return tasks;
}

export async function addTask(title: string): Promise<Task> {
  const newTask: Task = {
    id: crypto.randomUUID(),
    title,
    done: false,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  return newTask;
}

export async function toggleTask(id: string): Promise<void> {
  const task = tasks.find(t => t.id === id);
  if (task) task.done = !task.done;
}

export async function deleteTask(id: string): Promise<void> {
  tasks = tasks.filter(t => t.id !== id);
}
