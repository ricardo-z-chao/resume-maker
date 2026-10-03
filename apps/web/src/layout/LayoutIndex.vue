<template>
  <div class="flex flex-col h-screen">
    <header class="absolute top-0 left-0 w-full z-50">
      <HeaderLayout />
    </header>
    <main class="flex-1">
      <RouterView />
    </main>
    <footer
      class="absolute bottom-0 left-0 w-full z-50"
      v-if="$route.path === '/'"
    >
      <FooterLayout />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderLayout from "./HeaderLayout.vue";
import FooterLayout from "./FooterLayout.vue";

export default defineComponent({
  name: "LayoutIndex",
  components: {
    HeaderLayout,
    FooterLayout,
  },
});
</script>
