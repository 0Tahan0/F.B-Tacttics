<template>
  <div>
    <div class="flex">
      <base-card class="flex-grow">
        <base-title>عدد المقالات</base-title>
        <!-- <base-title>{{ posts }}</base-title> -->
        <div class="flex items-center">
          <circular-progress :rate="postsCountInPerst" />
          <div class="ms-4 flex-grow text-center text-xs md:text-sm lg:text-md">
            <div
              class="flex justify-between py-2 px-5 rounded-full1 border-b border-mainColor"
              v-for="i in artInfo"
              :key="i"
            >
              <span v-html="i.title"></span><span>{{ user[i.result] }}</span>
            </div>
            <!-- <span class="border p-5">{{ posts }}</span> -->
          </div>
        </div>
      </base-card>
    </div>
    <base-card v-if="user.postsCount">
      <base-title>مقالاتي</base-title>
      <the-swiper>
        <the-post
          class="max-h-96 overflow-y-auto"
          v-for="i in posts"
          :key="i.postId"
          :info="i"
          swiper-item
        ></the-post>
      </the-swiper>
    </base-card>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["user", "currentUser", "isAdmin"],

  data() {
    return {
      artInfo: [
        {
          title: "مجموع المقالات",
          result: "postsCount",
        },
        {
          title: "مجموع التعليقات",
          result: "commentsCount",
        },
        {
          title: "مجموع التفاعلات",
          result: "likesCount",
        },
      ],
    };
  },
  computed: {
    ...mapGetters("posts", {
      userPosts: "getUserPosts",
      allPosts: "getAllPosts",
    }),

    postsCountInPerst() {
      return Math.round((100 * this.user.postsCount) / this.allPosts.length);
    },

    posts() {
      return this.userPosts(this.user.id);
    },
  },
};
</script>
