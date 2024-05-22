<template>
  <div ref="menu" class="relative w-fit h-fit text-darkColor dark:text-white">
    <div @click="show = !show">
      <slot name="button"></slot>
    </div>
    <base-card
      v-show="show"
      class="absolute top-full min-w-24 z-10 text-inherit arrow max-h-96 fade"
      :class="isRight"
    >
      <slot></slot>
    </base-card>
  </div>
</template>
<script>
export default {
  props: {
    right: {
      type: Boolean,
      defualt: false,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    isRight() {
      if (this.right) {
        return `left-0 translate-x-0 _RI`;
      }
      return `left-1/2 -translate-x-full _LE`;
    },
  },
};
</script>
<style scoped>
.arrow::before {
  content: "";
  position: absolute;
  top: 0;

  border-width: 10px;
  border-style: solid;

  border-color: transparent transparent var(--lightColor) transparent;
}
._RI.arrow::before {
  left: 0%;
  transform: translate(50%, -100%);
}
._LE.arrow::before {
  left: 100%;
  transform: translate(-150%, -100%);
}

html[data-mode="dark"] .arrow::before {
  border-color: transparent transparent var(--dark2Color) transparent;
}
</style>
