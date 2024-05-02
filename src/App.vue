<template>
  <div
    id="app"
    class="dark:bg-darkColor dark:text-lightColor text-darkColor transition-colors duration-500 h-full bg-lightColor"
    dir="rtl"
  >
    <RouterView
      :hasAccount="hasAccount"
      class="dark:bg-darkColor overflow-x-hidden"
    />
  </div>
</template>
<script>
// import { getCookie } from "@/cookies.js";
export default {
  name: "App",
  data() {
    return {
      hasAccount: false,
      routers: [
        { name: "الصفحة الرئيسية", path: "/", icon: "house" },
        { name: "حول", path: "/about", icon: "phone" },
        { name: "المقالات", path: "/articles", icon: "newspaper" },
      ],
    };
  },
  computed: {
    activeClass() {
      return "text-mainColor";
    },
  },
  mounted() {
    // this.hasAccount = getCookie("userid") != null;
  },
};
</script>
