<template>
  <router-link
    v-if="router"
    :to="link"
    :target="target"
    class="hover:text-mainColor hover:underline transition-colors"
  >
    <slot>{{ text }}</slot>
  </router-link>
  <a
    v-else
    :href="link"
    :target="target"
    class="hover:text-mainColor hover:underline transition-colors"
    ><slot>{{ text }}</slot></a
  >
</template>
<script>
export default {
  props: {
    router: {
      type: Boolean,
      default: false,
    },

    link: {
      type: String,
      default: "",
    },
    target: {
      type: String,
      default: "_self",
    },
    text: {
      type: String,
    },
  },
};
</script>
