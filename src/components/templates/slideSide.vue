<template>
  <!--   backdrop-blur-3xl-->
  <base-card
    :class="customize"
    class="z-50 m-0 flex p-0 shadow-lg shadow-gray-900 transition-transform duration-500 flex-col fixed top-0 h-full w-3/4 sm:w-1/2 bg-light2Color dark:bg-dark2Color"
  >
    <div class="relative p-5 h-full w-full">
      <div>
        <slot name="header"></slot>
      </div>
      <div>
        <slot></slot>
      </div>

      <button
        @click="$emit('open')"
        :class="
          right
            ? 'left-0 -translate-x-1/2  border-l'
            : 'right-0 translate-x-1/2 border-r'
        "
        class="-z-10 text-mainColor outline-none rounded-full border-mainColor absolute top-1/2 w-16 h-10 md:h-10 -translate-y-1/2 dark:bg-dark2Color bg-light2Color"
      >
        <fs-icon
          :icon="[
            'fas',
            right
              ? open
                ? 'angle-right'
                : 'angle-left'
              : open
              ? 'angle-left'
              : 'angle-right',
          ]"
          class="block"
          :class="right ? 'ms-auto me-3 ' : 'me-auto ms-3 '"
        />
      </button>
    </div>
  </base-card>
</template>
<script>
export default {
  emits: ["open"],

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
    customize() {
      if (this.open) {
        if (this.right) return "right-0 translate-0";
        return "left-0 translate-0";
      } else if (this.right) return "translate-x-full right-0 h-0";
      return "-translate-x-full left-0 h-0";
    },
  },
};
</script>
<!-- <style scoped>
a.router-link-exact-active {
  position: relative;
  color: #fff !important;
}
a.router-link-exact-active .tap,
a.router-link-exact-active .icon {
  background: var(--mainColor);
}
</style> -->
