<template>
  <div
    class="flex flex-col items-center justify-center w-full h-12 text-sm text-gray-500"
  >
    <p>Released under the MIT License.</p>
    <p>
      Copyright © 2026-present
      <a :href="url" class="underline">Ricardo.Z.Chao</a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GITHUB_URL } from "@/const";

export default defineComponent({
  name: "FooterLayout",
  setup() {
    return {
      url: GITHUB_URL,
    };
  },
});
</script>
