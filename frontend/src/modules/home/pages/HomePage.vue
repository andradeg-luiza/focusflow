<template>
  <BaseLayout>
    <template #header>
      <HomeHeader :title="title" />
    </template>

    <HomeContent :message="message" />
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from "@/shared/layouts/BaseLayout.vue";
import HomeHeader from "../components/HomeHeader.vue";
import HomeContent from "../components/HomeContent.vue";

import { useHome } from "../composables/useHome";
import { getWelcomeMessage } from "../services/homeService";

const { title } = useHome();
const message = getWelcomeMessage();
</script>
