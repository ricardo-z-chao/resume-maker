<template>
  <div>
    <LayoutIndex />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutIndex from "./layout/LayoutIndex.vue";

export default defineComponent({
  name: "App",
  components: {
    LayoutIndex,
  },
});
</script>
