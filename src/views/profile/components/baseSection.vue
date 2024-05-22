<template>
  <div class="slide-up">
    <base-card>
      <header class="bg-mainColor h-1/4 rounded-md bg-base-white">
        <base-title class="text-white text-center pt-2"
          >{{ user.name }}
        </base-title>

        <div
          class="w-32 h-32 rounded-full mx-auto translate-y-1/2 ring-8 dark:ring-dark2Color ring-light2Color relative"
        >
          <img
            :src="user.img"
            alt=""
            class="w-ful h-full max-h-full rounded-full object-cover"
          />
          <the-icon
            toolTip="مشرف"
            v-if="isAdmin"
            :icon="['fas', 'crown']"
            class="bg-yellow-500 absolute bottom-0 left-1/2 p-0.5 -translate-x-1/2 translate-y-1/2"
          />
        </div>
      </header>
      <section class="mt-20">
        <div class="text-center">
          <p>{{ user.name }}</p>
          <!-- <p>{{ user.email }}</p> -->
          <div class="my-2 text-sm" v-if="user.id != currentUser.id">
            <button v-if="!isFollowed" class="text-blue-500" @click="follow()">
              متابعة؟
            </button>
            <button v-if="isFollowed" class="text-red-500" @click="unFollow()">
              إلغاء المتابعة؟
            </button>
          </div>
        </div>
        <div
          class="flex text-center items-center py-2 font-bold text-sm md:text-md justify-evenly"
        >
          <p>
            يتابع : <span>{{ user.follows.length }}</span>
          </p>
          <p>
            يتابعه : <span>{{ user.followers.length }}</span>
          </p>
        </div>
      </section>
    </base-card>
    <div class="flex lg:flex-nowrap flex-wrap">
      <div class="lg:w-1/2 w-full">
        <followersView
          :isAdmin="isAdmin"
          :currentUser="currentUser"
          :user="user"
        />
        <friendsView
          :isAdmin="isAdmin"
          :currentUser="currentUser"
          :user="user"
        />
      </div>
      <div class="flex-grow h-screen overflow-y-auto">
        <baseView :isAdmin="isAdmin"
          :currentUser="currentUser"
          :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import friendsView from "./friendsView.vue";
import followersView from "./followersView.vue";
import baseView from "./baseView.vue";
import { mapMutations } from "vuex";
export default {
  props: ["user", "currentUser", "isAdmin"],
  components: {
    baseView,
    followersView,
    friendsView,
    // controlView,
  },
  computed: {
    isFollowed() {
      return (
        this.currentUser.follows.find((f) => f == this.user.id) != undefined
      );
    },
  },
  methods: {
    ...mapMutations("users", {
      followUser: "follow",
      unFollowUser: "unFollow",
    }),
    follow() {
      this.followUser(this.user.id);
    },
    unFollow() {
      this.unFollowUser(this.user.id);
    },
  },
};
</script>
