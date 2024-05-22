<template>
  <!-- <base-card class="sticky top-0 left-0 z-10"
    ><base-title>عدد مقالاتك {{ getOwnerPosts.length }} </base-title></base-card
  > -->

  <div v-if="ownerPosts.length > 0" class="slide-up">
    <the-post v-for="i in ownerPosts" :key="i.postId" :info="i"></the-post>
  </div>
  <base-card
    v-else
    class="h-full flex flex-col justify-center items-center slide-up"
  >
    <span>لا يوجد مقالات !</span>
    <fs-icon :icon="['fas', 'box-open']" class="w-1/2 h-1/2"></fs-icon>
  </base-card>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      postBox: false,
    };
  },
  computed: {
    ...mapState({
      ownerData: "personalData",
    }),
    ...mapGetters("posts", {
      posts: "getUserPosts",
    }),
    ownerPosts() {
      return this.posts(this.ownerData.id);
    },
  },
  methods: {
    ...mapMutations("posts", ["createPost"]),
    sendPost() {
      const postBox = this.$refs.postBox;
      if (postBox.value.trim()) {
        this.createPost(postBox.value.trim());
        this.postBox = false;
      }
    },
  },
};
</script>
