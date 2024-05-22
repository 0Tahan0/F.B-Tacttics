<template>
  <div id="articlePage" class="h-screen">
    <the-nav :hasAccount="hasAccount" />
    <!-- <base-card class="sticky top-0 left-0"> </base-card> -->
    <div class="h-full">
      <div
        class="container mx-auto overflow-y-auto h-full flex justify-between"
      >
        <base-card class="hidden lg:block flex-grow">
          <div>
            <ul class="space-y-1">
              <li
                v-for="(i, ind) in sections"
                :key="ind"
                :class="
                  selectedCompo == ind
                    ? 'bg-light3Color dark:bg-dark3Color'
                    : ''
                "
                class="flex text-xs items-center justify-between p-2 rounded-md hover:scale-105 transition hover:bg-light3Color hover:dark:bg-dark3Color cursor-pointer"
                @click="selectedCompo = ind"
              >
                <span>{{ i.name }} </span>
                <span
                  :notice="
                    i.coputedName
                      ? this[i.coputedName].length > 0
                        ? this[i.coputedName].length > 99
                          ? '+99'
                          : this[i.coputedName].length
                        : null
                      : null
                  "
                >
                  <the-icon
                    :icon="i.icon"
                    class="dark:bg-lightColor dark:text-darkColor text-lightColor bg-darkColor p-0.5 w-7 h-7"
                  />
                </span>
              </li>
            </ul>
          </div>
        </base-card>
        <!-- slide for right side -->

        <slide-side
          class="lg:hidden"
          :open="rightSlide"
          right
          @open="rightSlide = !rightSlide"
        >
          <ul>
            <li
              v-for="(i, ind) in sections"
              :key="ind"
              :class="selectedCompo == ind ? 'ring-1 ring-mainColor' : ''"
              class="flex text-sm items-center justify-between cursor-pointer hover:dark:bg-dark3Color hover:bg-light3Color p-1 rounded-md mt-2 hover:scale-105 transition"
              @click="selectedCompo = ind"
            >
              <span :class="selectedCompo == ind ? 'text-mainColor' : ''">{{
                i.name
              }}</span>
              <span
                :notice="
                  i.coputedName
                    ? this[i.coputedName].length > 0
                      ? this[i.coputedName].length > 99
                        ? '+99'
                        : this[i.coputedName].length
                      : null
                    : null
                "
              >
                <the-icon
                  :icon="i.icon"
                  class="bg-dark2Color dark:bg-light2Color dark:text-dark2Color w-7 h-7"
                />
              </span>
            </li>
          </ul>
        </slide-side>
        <!-- end slide for right side -->
        <div class="overflow-y-auto lg:w-1/2 w-full">
          <keep-alive>
            <component :is="sections[selectedCompo].compoName"></component>
          </keep-alive>
        </div>
        <base-card class="hidden lg:block flex-grow">left side</base-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import allArticles from "./components/allArticles.vue";
import myArticles from "./components/myArticles.vue";
import savedArticles from "./components/savedArticles.vue";

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
  components: {
    allArticles,
    myArticles,
    savedArticles,
  },
  props: ["hasAccount"],
  data() {
    return {
      rightSlide: false,
      selectedCompo: 0,
      sections: [
        {
          compoName: "all-articles",
          name: "المقالات الحديثة",
          icon: ["fas", "newspaper"],
          coputedName: undefined,
        },
        {
          compoName: "my-articles",
          name: "مقالاتي",
          icon: ["fas", "folder-closed"],
          coputedName: "getOwnerPosts",
        },
        {
          compoName: "saved-articles",
          name: "المقالات المحفوظة",
          icon: ["fas", "cloud"],
          coputedName: "getSavedPosts",
        },
      ],
    };
  },

  computed: {
    ...mapGetters("posts", {
      postById: "getUserPosts",

      allPosts: "getAllPosts",
    }),
    getSavedPosts() {
      return this.ownerData.savedPosts;
    },
    getOwnerPosts() {
      return this.postById(this.$store.state.personalData.id);
    },

    ownerData() {
      return this.$store.state.personalData;
    },
  },
  mounted() {
    for (let i = 0; i < this.sections.length; i++) {
      if (this.sections[i].compoName == this.$route.params.id) {
        this.selectedCompo = i;
        break;
      }
    }
  },
};
</script>
<style scoped>
::-webkit-scrollbar {
  width: 0;
  scroll-behavior: contain;
}
</style>
