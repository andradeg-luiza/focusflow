<template>
  <BaseLayout>
    <h2>Login</h2>

    <AuthForm :buttonText="'Entrar'" :onSubmit="submitLogin">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Senha" />
    </AuthForm>

    <p v-if="error">{{ error }}</p>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from "@/shared/layouts/BaseLayout.vue";
import AuthForm from "../components/AuthForm.vue";
import { ref } from "vue";
import { useAuth } from "../composables/useAuth";

const email = ref("");
const password = ref("");

const { handleLogin, error } = useAuth();

async function submitLogin() {
  await handleLogin({ email: email.value, password: password.value });
}
</script>
