<template>
  <nav>
    <ul class="flex h-full">
      <li v-for="navItem in navItems" :key="navItem.title" class="w-fit">
        <NavItem :navItem="navItem" :enableHover="enableHover">
          <NavItem
            v-for="subItem in navItem.menu"
            :key="subItem.title"
            :navItem="subItem"
            :enableHover="enableHover"
          ></NavItem>
        </NavItem>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavItem from "./NavItem.vue";
import { type NavItemData } from "./nav";

export default defineComponent({
  name: "NavGroup",
  components: {
    NavItem,
  },
  props: {
    navItems: {
      type: Array as () => NavItemData[],
      required: true,
    },
    enableHover: {
      type: Boolean,
      default: true,
    },
  },
});
</script>
