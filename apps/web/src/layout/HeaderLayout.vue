<template>
  <div class="flex justify-between w-full h-16 px-4 bg-transparent shadow-md">
    <NavGroup :nav-items="navs.left" :enable-hover="false"></NavGroup>
    <NavGroup :nav-items="navs.right"> </NavGroup>
  </div>
</template>

<script lang="ts">
import NavGroup from "@/components/nav/NavGroup.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TopLayout",
  components: {
    NavGroup,
  },
  data() {
    return {
      navs: {
        left: [
          { title: "Resume Maker", link: "/", icon: "/favicon.svg", width: 40 },
        ],
        right: [
          { title: "我的简历", link: "/resume" },
          { title: "简历模版", link: "/market" },
          {
            title: "登录",
            link: "/login",
            menu: [
              { title: "用户中心", link: "/user" },
              { title: "退出登陆", link: "/logout" },
            ],
          },
        ],
      },
    };
  },
});
</script>
