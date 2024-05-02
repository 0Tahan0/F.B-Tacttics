<template>
  <!-- <base-card class="sticky top-0 left-0 z-10"
    ><base-title>عدد مقالاتك {{ getOwnerPosts.length }} </base-title></base-card
  > -->
  <div v-if="getOwnerPosts.length > 0">
    <the-post v-for="(i, ind) in getOwnerPosts" :key="ind" :info="i"></the-post>
  </div>
  <base-title v-else> لا يوجد مقالات </base-title>
</template>
<script>
export default {
  data() {
    return {
      postBox: false,
    };
  },
  computed: {
    getOwnerPosts() {
      return this.$store.getters.getOwnerPosts;
    },
    ownerData() {
      return this.$store.state.personalData;
    },
  },
  methods: {
    sendPost() {
      const postBox = this.$refs.postBox;
      if (postBox.value.trim()) {
        this.$store.commit("createPost", postBox.value.trim());
        this.postBox = false;
      }
    },
  },
};
</script>
