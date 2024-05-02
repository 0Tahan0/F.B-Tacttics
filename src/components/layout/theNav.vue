<template>
  <!-- backdrop-blur-3xl sticky top-0 left-0 z-50 -->
  <nav class="text-sm bg-lightColor dark:bg-dark2Color shadow-md">
    <div class="container mx-auto">
      <div class="flex items-center min-h-20">
        <router-link
          v-if="!hasAccount"
          toolTip="تسحيل الدخول"
          toolTipLeft
          class="p-2 m-0"
          :to="{ name: 'تسجيل الدخول' }"
          ><the-icon
            class="bg-blue-500 rounded-md"
            :icon="['fas', 'right-to-bracket']"
        /></router-link>
        <div
          class="flex items-center md:justify-start justify-evenly md:flex-grow-0 flex-grow taps"
        >
          <base-select
            toolTip="اختيار الوضع"
            toolTipLeft
            :title="mode"
            @change="changeMode"
            :arrow="false"
            class="px-4 block shadow-none border-none"
            style="background: var(--mainColor)"
          >
            <template #title>
              <fs-icon
                :icon="mode == 'dark' ? ['fas', 'moon'] : ['fas', 'sun']"
              />
            </template>

            <select-item value="light" class="hover:text-current">
              <fs-icon :icon="['fas', 'sun']" class="block p-1"
            /></select-item>
            <select-item value="dark" class="hover:text-current"
              ><fs-icon :icon="['fas', 'moon']" class="block p-1"
            /></select-item>
          </base-select>
          <router-link
            v-for="(router, ind) in getRouters"
            :toolTip="router.name"
            :key="ind"
            class="p-2 mx-2 tap"
            :to="{ name: router.name }"
            ><span class="hidden md:block">{{ router.name }}</span>
            <span class="block md:hidden">
              <fs-icon :icon="router.props.default.icon" />
            </span>
          </router-link>
        </div>
        <the-logo class="hidden md:flex ms-auto" />
      </div>
    </div>
  </nav>
</template>
<script>
import router from "@/router";

export default {
  props: ["hasAccount"],
  data() {
    return {
      mode: "light",
      open: false,
    };
  },
  computed: {
    getRouters() {
      return router
        .getRoutes()
        .filter(
          (rt) =>
            rt.name != "تسجيل الدخول" &&
            rt.name != "jobDetails" &&
            rt.name != "errorPage"
        );
    },
  },
  created() {
    if (localStorage.FBT_mode) this.mode = localStorage.FBT_mode;
    else localStorage.FBT_mode = this.mode;
    document.documentElement.setAttribute("data-mode", this.mode);
  },

  methods: {
    changeMode(selectedMode) {
      // this.mode = this.mode == "dark" ? "light" : "dark";
      this.mode = selectedMode;
      document.documentElement.setAttribute("data-mode", this.mode);
      localStorage.FBT_mode = this.mode;
    },
  },
};
</script>
<style>
nav a.tap {
  position: relative;
  /* overflow: hidden; */
  --timing: 0.5s;
}

nav a.tap::before {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  border-radius: 50%;
  background: var(--mainColor);
  transition: var(--timing);
  /* transform: translateX(-101%); */
  visibility: hidden;
}
nav a.tap.router-link-exact-active {
  color: var(--mainColor);
}
nav a.tap.router-link-exact-active::before {
  /* transform: translateX(0); */
  visibility: visible;
}
</style>
