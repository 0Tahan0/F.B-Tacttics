<template>
  <!--   backdrop-blur-3xl-->
  <div
    :class="custoiz"
    class="z-50 md:hidden flex p-5 shadow-lg shadow-gray-900 transition-all flex-col fixed top-0 h-full w-3/4 sm:w-1/2 bg-white dark:bg-dark2Color"
  >
    <div>
      <slot name="header"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  emits: ["click"],

  props: {
    open: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    custoiz() {
      if (this.open) {
        if (this.right) return "right-0 translate-0";
        return "left-0 translate-0";
      } else if (this.right) return "translate-x-full right-0 h-0";
      return "-translate-x-full left-0 h-0";
    },
  },
};
</script>
<style scoped>
a.router-link-exact-active {
  position: relative;
  color: #fff !important;
}
a.router-link-exact-active .tap,
a.router-link-exact-active .icon {
  background: var(--mainColor);
}
</style>
