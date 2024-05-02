<template>
  <div id="articlePage" class="fade h-screen">
    <the-nav :hasAccount="hasAccount" />
    <div class="h-full">
      <div class="container mx-auto flex overflow-y-auto h-full">
        <div class="mx-auto md:w-2/3 lg:w-1/2 overflow-y-auto">
          <the-post
            v-for="(i, ind) in getPosts"
            :key="ind"
            :info="i"
          ></the-post>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import router from "@/router";
export default {
  // created() {
  //   if (this.hasAccount == false) {
  //     // location.href = "/login";

  //     const routers = router.getRoutes();
  //     const login = routers.find((r) => r.name == "تسجيل الدخول");

  //     router.replace({
  //       path: login.path,
  //       query: { newLocation: `${this.$route.path}` },
  //     });
  //     // location.href = login.path;
  //   }
  // },
  props: ["hasAccount"],
  data() {
    return {
      showSlide: false,
    };
  },
  computed: {
    getPosts() {
      return this.$store.state.info;
    },
  },
};
</script>
<style scoped>
::-webkit-scrollbar {
  width: 0;
  scroll-behavior: contain;
}
</style>
