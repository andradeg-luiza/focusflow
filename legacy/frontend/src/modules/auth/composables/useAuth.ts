import { ref } from "vue";
import { login, register } from "../services/authService";
import type { LoginPayload, RegisterPayload } from "../models/AuthModel";

export function useAuth() {
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function handleLogin(payload: LoginPayload) {
    loading.value = true;
    error.value = null;

    try {
      const response = await login(payload);
      return response;
    } catch (err) {
      error.value = "Erro ao fazer login";
    } finally {
      loading.value = false;
    }
  }

  async function handleRegister(payload: RegisterPayload) {
    loading.value = true;
    error.value = null;

    try {
      const response = await register(payload);
      return response;
    } catch (err) {
      error.value = "Erro ao registrar";
    } finally {
      loading.value = false;
    }
  }

  return {
    loading,
    error,
    handleLogin,
    handleRegister
  };
}
