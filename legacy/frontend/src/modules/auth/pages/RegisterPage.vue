<template>
  <BaseLayout>
    <h2>Registrar</h2>

    <AuthForm :buttonText="'Criar conta'" :onSubmit="submitRegister">
      <input v-model="name" type="text" placeholder="Nome" />
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

const name = ref("");
const email = ref("");
const password = ref("");

const { handleRegister, error } = useAuth();

async function submitRegister() {
  await handleRegister({
    name: name.value,
    email: email.value,
    password: password.value
  });
}
</script>
