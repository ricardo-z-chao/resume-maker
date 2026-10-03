<template>
  <div
    @mouseenter="showSubMenu = true"
    @mouseleave="showSubMenu = false"
    :class="['flex', 'h-full', 'relative']"
    :style="{ width: (navItem.width ?? 24) * 4 + 'px' }"
  >
    <RouterLink
      :to="navItem.link"
      :class="[
        'w-full',
        'h-16',
        'flex',
        'items-center',
        { 'hover:bg-gray-100': enableHover },
      ]"
    >
      <img v-if="navItem.icon" class="h-13 w-13" :src="navItem.icon" />
      <span class="flex w-full h-full items-center justify-center">{{
        navItem.title
      }}</span>
    </RouterLink>
    <transition>
      <div
        v-show="showSubMenu"
        class="flex-col absolute top-16 left-0 w-full shadow-md"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { type NavItemData } from "./nav";

export default defineComponent({
  name: "NavItem",
  props: {
    navItem: {
      type: Object as () => NavItemData,
      required: true,
    },
    enableHover: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      showSubMenu: false,
    };
  },
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
