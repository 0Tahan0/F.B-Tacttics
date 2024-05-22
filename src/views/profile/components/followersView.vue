<template>
  <div class="overflow-x-auto">
    <base-card>
      <base-title>يتابعه</base-title>
      <div class="flex">
        <firendsCard
          class="w-full"
          v-for="i in user.followers"
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
import { mapActions, mapMutations } from "vuex";
export default {
  props: ["user", "currentUser", "isAdmin"],

  components: {
    firendsCard,
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
      // this.followUser(ID);
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
