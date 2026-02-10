import { ref } from "vue";

export function useHome() {
  const title = ref("Home Page");

  return {
    title
  };
}
