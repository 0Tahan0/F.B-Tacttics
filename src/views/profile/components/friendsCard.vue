<template>
  <base-card
    class="min-w-24 max-w-24 md:min-w-28 md:max-w-28 min-h-44 flex flex-col justify-between"
  >
    <header class="h-1/2 flex justify-center items-center">
      <div
        class="w-fit h-fit rounded-full"
        :class="isFanAdmin ? ' relative' : ''"
      >
        <img
          :src="fan.img"
          :alt="`${fan.name} photo`"
          class="object-cover min-w-16 min-h-16 max-w-16 max-h-16 rounded-full"
        />
        <the-icon
          v-if="isFanAdmin"
          :icon="['fas', 'crown']"
          class="bg-yellow-500 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-0.5 block"
        />
      </div>
    </header>
    <section class="text-center mt-3 flex-grow flex flex-col justify-between">
      <button
        @click="changeLocation()"
        class="text-xs break-words lg:text-sm hover:text-mainColor hover:underline"
      >
        {{ fan.name }}
      </button>
      <div class="text-xs">
        <button
          v-if="isCurrentUserFrind && !isCurrentUser"
          class="hover:text-mainColor text-red-500"
          @click="$emit('unfollow', id)"
        >
          إلغاء المتابعة؟
        </button>
        <p v-if="isCurrentUser" class="font-bold">أنت</p>
        <button
          v-else-if="!isCurrentUserFrind"
          class="hover:text-mainColor text-blue-500"
          @click="$emit('follow', id)"
        >
          متابعة؟
        </button>
      </div>
    </section>
  </base-card>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["user", "currentUser","id"],

  
  emits: ["unfollow", "follow"],
  computed: {
    ...mapGetters("users", {
      getUser: "getUserById",
    }),
    fan() {
      return this.getUser(this.id);
    },

    isCurrentUser() {
      return this.currentUser.id == this.id;
    },
    isCurrentUserFrind() {
      return this.currentUser.follows.find((f) => f == this.id) != undefined;
    },
    isFanAdmin() {
      return this.fan.type == "admin";
    },
  },
  methods: {
    // unfollowU() {
    //   this.$emit("unfollow", this.id);
    // },
    // followU() {
    //   console.log(this.id);
    //   this.$emit("follow", this.id);
    // },
    changeLocation() {
      // isCurrentUser
      //       ? { path: '/profile' }
      //       : { path: '/userProfile', query: { id: id } }
      if (this.isCurrentUser) this.$router.push({ path: "/profile" });
      else {
        // location.replace(`/userProfile/?id=${this.id}`);
        this.$router.push({ path: "/userProfile", query: { id: this.id } });
      }
    },
  },
};
</script>
