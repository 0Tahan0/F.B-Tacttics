<template>
  <div>
    <base-card>
      <base-title>يتابع</base-title>
      <div class="flex overflow-auto">
        <firendsCard
          v-for="i in user.follows"
          :key="i"
          :id="i"
          @unfollow="unfollow($event)"
          @follow="follow($event)"
          :currentUser="currentUser"
          :user="user"
        />
      </div>
      <!-- @follow="follow()" -->
    </base-card>
  </div>
</template>
<script>
import firendsCard from "./friendsCard.vue";
import { mapGetters, mapMutations,mapActions } from "vuex";
export default {
  props: ["user", "currentUser", "isAdmin"],

  components: {
    firendsCard,
  },
  computed: {
    ...mapGetters("users", {
      getUser: "getUserById",
    }),
  },
  methods: {
    ...mapMutations("users", {
      followUser: "follow",
      unfollowUser: "unFollow",
    }),
      ...mapActions("users", {
      followAc: "follow",
    }),
    follow(ID) {
      const notice = {
        title: "متابعة",
        type: "request",
        sender: this.currentUser.name,
        // targetUser: this.$store.state.personalData.id,
        targetUser: ID,
        content: `تمت متابعتك من قبل ${this.currentUser.name}`,
      };
      this.followAc({ id: ID, notice: notice });
    },
    unfollow(ID) {
      this.unfollowUser(ID);
    },
  },
};
</script>
