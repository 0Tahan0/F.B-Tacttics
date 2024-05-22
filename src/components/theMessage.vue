<template>
  <div
    @click="openMessage()"
    class="hover:scale-105 transition-transform cursor-pointer"
  >
    <!-- <base-title>الاشعارات</base-title> -->
    <base-card
      class="text-xs md:text-md"
      :class="!info.read ? 'bg-light3Color dark:bg-dark3Color' : ''"
    >
      <div class="font-bold flex items-center" :class="messageType">
        <fs-icon :icon="messageIcon" class="text-md md:text-xl" />
        <p class="ms-2">{{ info.title }}</p>
      </div>
      <!-- <p class="p-5">{{ info.content }}</p> -->
      <p>
        من <span class="text-mainColor font-bold">{{ info.sender }}</span>
      </p>
      <!-- {{ info.read }} -->
    </base-card>
  </div>
  <the-window
    :open="notificationsWindow"
    noResize
    @close="notificationsWindow = false"
  >
    {{ info.content }}
  </the-window>
</template>
<script>
// warning, request, normal
export default {
  props: ["info"],
  emits: ["read"],
  data() {
    return { notificationsWindow: false };
  },
  computed: {
    messageType() {
      if (this.info.type == "warning") return "text-red-500";
      else if (this.info.type == "request") return "text-blue-400";
      return "";
    },
    messageIcon() {
      if (this.info.type == "warning") return ["fas", "warning"];
      else if (this.info.type == "request") return ["fas", "users"];
      return ["fas", "message"];
    },
  },
  methods: {
    openMessage() {
      this.notificationsWindow = true;
      this.$emit("read", true);
    },
  },
};
</script>
