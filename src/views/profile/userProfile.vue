<template>
  <div class="h-screen">
    <!-- <the-nav :hasAccount="true" class="hidden" /> -->

    <base-card class="p-0 px-0 py-0">
      <button @click="back()">
        <the-icon
          :icon="['fas', 'arrow-right']"
          class="text-black dark:text-white p-1 text-xl md:text-3xl"
        ></the-icon>
      </button>
    </base-card>
    <div class="container mx-auto h-full">
      <div class="w-full slide-up">
        <baseSection
          :isAdmin="isAdmin"
          :currentUser="currentUser"
          :user="user"
        />
      </div>
    </div>
  </div>
</template>

<script>
import baseSection from "./components/baseSection.vue";

export default {
  components: {
    baseSection,
  },
  data() {
    return {
      opend: false,
      currentSection: "baseSection",
      sections: [
        {
          name: "القسم الرئيسي",
          icon: ["fas", "table-columns"],
          forAdmin: false,
          compoName: "baseSection",
        },
        {
          name: "الإشعارات",
          icon: ["fas", "bell"],
          forAdmin: false,
          compoName: "NotificationsSection",
        },
        // {
        //   name: "الإعدادات",
        //   icon: ["fas", "gear"],
        //   forAdmin: false,
        //   compoName: "settingsSection",
        // },
        {
          name: "لوحة المستخدمين و التحكم",
          icon: ["fas", "shield-halved"],
          forAdmin: true,
          compoName: "controlSection",
        },
        {
          name: "بريد البلاغات",
          icon: ["fas", "file-shield"],
          forAdmin: true,
          compoName: "reportsSection",
        },
      ],
    };
  },
  name: "profileView",
  computed: {
    normalSections() {
      return this.sections.filter((el) => el.forAdmin != true);
    },
    specialSections() {
      return this.sections.filter((el) => el.forAdmin == true);
    },

    user() {
      return this.$store.getters["users/getUserById"](this.$route.query.id);
    },
    isAdmin() {
      return this.user.type == "admin";
    },

    currentUser() {
      return this.$store.state.personalData;
    },
  },
  watch: {},
  methods: {
    back() {
      this.$router.back();
    },
  },
  mounted() {},
  // created() {
  //   this.id = this.$route.query.id;
  // },
  // updated() {
  //   this.id = this.$route.query.id;
  //   console.log("old id :" + this.id);
  //   console.log("new id :" + this.$route.query.id);
  //   // this.provide.user = this.user;
  //   // this.provide.isAdmin = this.isAdmin;
  //   // this.provide.currentUser = this.currentUser;
  //   // console.log(this);
  // },

  // provide() {

  //   return {
  //     user: this.user,
  //     isAdmin: this.isAdmin,
  //     currentUser: this.currentUser,
  //     counter: this.counter,
  //   };
  // },
};
</script>
<style>
::-webkit-scrollbar {
  width: 0;
}
</style>
