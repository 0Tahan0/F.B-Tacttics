<template>
  <div
    v-if="open"
    ref="alert"
    class="fixed fade left-1/2 -translate-x-1/2 max-w-96 transition-transform duration-150"
    :class="isTop"
  >
    <base-card>
      <slot></slot>
    </base-card>
  </div>
</template>
<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    top: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    isTop() {
      if (this.top) {
        return `top-0 `;
      }
      return "bottom-0 ";
    },
  },
  watch: {
    open() {

          setTimeout(() => this.$emit("close", false), 1200);
    },
  },

};
</script>
