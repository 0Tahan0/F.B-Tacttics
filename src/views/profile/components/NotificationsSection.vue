<template>
  <div class="overflow-y-auto h-full px-4 slide-up">
    <div v-if="getNotices.length > 0">
      <the-message
        @read="m.read = $event"
        v-for="m in getNotices"
        :key="m"
        :info="m"
      ></the-message>
    </div>
    <base-card
      v-else
      class="h-full flex flex-col justify-center items-center slide-up"
    >
      <span>لا يوجد إشعارات !</span>
      <fs-icon :icon="['far', 'envelope-open']" class="w-1/2 h-1/2"></fs-icon>
    </base-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  computed: {
    getNotices() {
      return this.$store.state.personalData.notifications;
    },
  },
  methods: {},
};
</script>
