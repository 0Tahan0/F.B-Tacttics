<template>
  <div class="h-screen">
    <the-nav :hasAccount="true" />
    <div class="container mx-auto h-full">
      <div class="flex w-full h-full">
        <!-- control section -->
        <div class="lg:flex-grow h-full lg:mx-1">
          <base-card class="w-full h-full hidden lg:block">
            <ul class="space-y-1">
              <li
                @click="currentSection = i.compoName"
                v-for="i in normalSections"
                :key="i"
                :class="
                  currentSection == i.compoName
                    ? 'bg-light3Color dark:bg-dark3Color'
                    : ''
                "
                class="flex text-xs items-center justify-between p-2 rounded-md hover:scale-105 transition hover:bg-light3Color hover:dark:bg-dark3Color cursor-pointer"
              >
                <span>{{ i.name }}</span>
                <the-icon
                  :icon="i.icon"
                  class="dark:bg-lightColor dark:text-darkColor text-lightColor bg-darkColor p-0.5 w-7 h-7"
                />
              </li>
            </ul>
            <base-card
              v-if="isAdmin"
              class="ring-2 ring-yellow-500 relative mt-4"
            >
              <span
                class="text-yellow-500 bg-inherit text-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 capitalize"
                >admin</span
              >
              <the-icon
                :icon="['fas', 'crown']"
                class="p-0.5 md:text-sm text-xs bg-yellow-500 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
              />
              <!-- special taps -->
              <div>
                <ul class="space-y-1">
                  <li
                    @click="currentSection = i.compoName"
                    v-for="i in specialSections"
                    :key="i"
                    class="flex text-xs items-center justify-between p-2 rounded-md hover:scale-105 transition hover:bg-light3Color hover:dark:bg-dark3Color cursor-pointer"
                  >
                    <span>{{ i.name }}</span>
                    <the-icon
                      :icon="i.icon"
                      class="dark:bg-lightColor dark:text-darkColor text-lightColor bg-darkColor p-1"
                    />
                  </li>
                </ul>
              </div>
            </base-card>
          </base-card>
          <slide-side
            class="lg:hidden"
            :open="opend"
            right
            @open="opend = !opend"
          >
            <ul class="space-y-1">
              <li
                @click="currentSection = i.compoName"
                v-for="i in normalSections"
                :key="i"
                :class="
                  currentSection == i.compoName
                    ? 'bg-light3Color dark:bg-dark3Color'
                    : ''
                "
                class="flex text-xs items-center justify-between p-2 rounded-md hover:scale-105 transition hover:bg-light3Color hover:dark:bg-dark3Color cursor-pointer"
              >
                <span>{{ i.name }}</span>
                <the-icon
                  :icon="i.icon"
                  class="dark:bg-lightColor dark:text-darkColor text-lightColor bg-darkColor p-0.5 w-7 h-7"
                />
              </li>
            </ul>
            <base-card
              class="ring-2 ring-yellow-500 relative mt-4"
              v-if="isAdmin"
            >
              <span
                class="text-yellow-500 bg-inherit text-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 capitalize"
                >admin</span
              >
              <the-icon
                :icon="['fas', 'crown']"
                class="p-0.5 md:text-sm text-xs bg-yellow-500 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
              />
              <!-- special taps -->
              <div>
                <ul class="space-y-1">
                  <li
                    @click="currentSection = i.compoName"
                    v-for="i in specialSections"
                    :key="i"
                    class="flex text-xs items-center justify-between p-2 rounded-md hover:scale-105 transition hover:bg-light3Color hover:dark:bg-dark3Color cursor-pointer"
                  >
                    <span>{{ i.name }}</span>
                    <the-icon
                      :icon="i.icon"
                      class="dark:bg-lightColor dark:text-darkColor text-lightColor bg-darkColor p-1"
                    />
                  </li>
                </ul>
              </div>
            </base-card>
          </slide-side>
        </div>
        <!-- end control section -->

        <div class="w-3/4 flex-grow lg:mx-1">
          <keep-alive>
            <component
              :is="currentSection"
              :isAdmin="isAdmin"
              :currentUser="currentUser"
              :user="currentUser"
            ></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import controlSection from "./components/controlSection.vue";
import NotificationsSection from "./components/NotificationsSection.vue";
import baseSection from "./components/baseSection.vue";

export default {
  components: {
    baseSection,
    NotificationsSection,
    controlSection,
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
    currentUser() {
      return this.$store.state.personalData;
    },
    isAdmin() {
      return this.currentUser.type == "admin";
    },
  },
  watch: {},
  methods: {},
  mounted() {},
  // provide() {
  //   return {
  //     user: this.currentUser,
  //     isAdmin: this.isAdmin,
  //     currentUser: this.currentUser,
  //     // isCurrentUserAdmin: this.isAdmin,
  //   };
  // },
};
</script>
<style>
::-webkit-scrollbar {
  width: 0;
}
</style>
