<template>
  <!-- backdrop-blur-3xl sticky top-0 left-0 z-50 -->
  <nav class="text-sm bg-lightColor dark:bg-dark2Color shadow-md">
    <div class="container mx-auto">
      <div class="flex items-center md:min-h-16">
        <!-- for delete -->

        <base-select :title="account" v-model="account">
          <template #default>
            <option v-for="i in accounts" :key="i.id" :value="i.id">
              {{ i.name }}
            </option>
          </template>
        </base-select>
        <!-- end delete -->
        <router-link
          v-if="!hasAccount"
          toolTip="تسحيل الدخول"
          toolTipLeft
          class="p-2 m-0"
          :to="{ name: 'تسجيل الدخول' }"
          ><the-icon
            class="bg-blue-500 rounded-md md:w-9 md:h-9 h-8 w-8"
            :icon="['fas', 'right-to-bracket']"
        /></router-link>
        <div
          class="flex items-center md:justify-start justify-evenly md:flex-grow-0 flex-grow taps"
        >
          <!-- <base-select
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
              <fs-icon
                :icon="['fas', 'sun']"
                class="block w-full p-1 bg-red-500 m-0"
            /></select-item>
            <select-item value="dark" class="hover:text-current"
              ><fs-icon :icon="['fas', 'moon']" class="block w-full p-1"
            /></select-item>
          </base-select> -->
          <button
            @click="changeMode()"
            :toolTip="mode == 'dark' ? 'الوضع الداكن' : 'الوضع الفاتح'"
          >
            <the-icon
              class="bg-dark2Color text-white dark:bg-light2Color dark:text-dark2Color md:w-9 md:h-9 h-8 w-8"
              :icon="['fas', mode == 'dark' ? 'moon' : 'sun']"
            />
          </button>
          <router-link
            v-for="(router, ind) in getRouters"
            :toolTip="router.name"
            :key="ind"
            class="p-2 mx-2 tap"
            :to="routersVerifying(router)"
            ><span class="hidden md:block">{{ router.name }}</span>
            <span class="block md:hidden">
              <the-icon
                class="bg-dark2Color md:w-9 md:h-9 h-8 w-8 text-white dark:bg-light2Color dark:text-dark2Color sm:text-lg text-md"
                :icon="router.icon"
              />
            </span>
          </router-link>
        </div>
        <the-logo class="hidden md:flex ms-auto w-20" />
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
      account: "Tahan",
      mode: "light",
      open: false,
    };
  },
  computed: {
    getRouters() {
      return router.options.routes.filter(
        (rt) =>
          rt.name != "تسجيل الدخول" &&
          rt.name != "صفحة مستخدم" &&
          rt.name != "errorPage"
      );
    },
    accounts() {
      let us = [];
      this.$store.state.users.users.forEach((el) => {
        us.push({ name: el.name, id: el.id });
      });
      return us;
    },
  },
  created() {
    if (localStorage.FBT_mode) this.mode = localStorage.FBT_mode;
    else localStorage.FBT_mode = this.mode;
    document.documentElement.setAttribute("data-mode", this.mode);
  },

  methods: {
    routersVerifying(router) {
      if (router.name == "الصفحة الشخصية")
        return {
          name: router.name,
          query: {
            username: this.$store.state.personalData.name,
            id: this.$store.state.personalData.id,
          },
        };
      return { name: router.name };
    },
    changeMode() {
      this.mode = this.mode == "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-mode", this.mode);
      localStorage.FBT_mode = this.mode;
    },
  },
  watch: {
    account(val) {
      this.$store.state.personalData = this.$store.state.users.users.find(
        (el) => el.id == val
      );
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
