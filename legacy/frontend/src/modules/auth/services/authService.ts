import { api } from "@/app/http/api";
import type { LoginPayload, RegisterPayload, AuthResponse } from "../models/AuthModel";

export async function login(payload: LoginPayload): Promise<AuthResponse> {
  const { data } = await api.post("/auth/login", payload);
  localStorage.setItem("focusflow-token", data.token);
  return data;
}

export async function register(payload: RegisterPayload): Promise<AuthResponse> {
  const { data } = await api.post("/auth/register", payload);
  localStorage.setItem("focusflow-token", data.token);
  return data;
}
