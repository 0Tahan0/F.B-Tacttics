<template>
  <div class="about h-screen">
    <the-nav :hasAccount="hasAccount" />
  </div>
  <!-- <button @click="getData()">get data</button> -->
  <!-- <button @click="GET()">get data</button>
  {{ myData }} -->
</template>

<script>
// import router from "@/router";

export default {
  name: "AboutView",
  props: ["hasAccount"],
  data() {
    return {
     
    };
  },

  computed: {},
  methods: {
    GET() {
      fetch(
        "https://vue-http-demo-ee740-default-rtdb.firebaseio.com/posts.json"
      )
        .then((response) => {
          if (response.ok) {
            console.log("gg");
            return response.json();
          }
        })
        .then((data) => (this.myData = data));
    },
    getData() {
      fetch(
        "https://vue-http-demo-ee740-default-rtdb.firebaseio.com/myData.json",
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: this.name,
            userage: this.age,
            job: "programmer",
          }),
        }
      );
    },
  },
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
  mounted() {},
};
</script>
