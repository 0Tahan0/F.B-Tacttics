<template>
  <div v-if="open" class="fade fixed min-w-24 z-50" ref="menu">
    <base-card class="h-full w-full min-w-full min-h-full">
      <slot></slot>
    </base-card>
  </div>
</template>
<script>
export default {
  emits: ["close"],
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    point: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) this.$emit("close", false);
    },
  },

  mounted() {
    document.addEventListener("click", this.close);
    document.addEventListener("mouseover", this.close);
    document.addEventListener("touch", this.close);
    document.addEventListener("touchstart", this.close);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.close);
    document.removeEventListener("mouseover", this.close);
    document.removeEventListener("touch", this.close);
    document.removeEventListener("touchstart", this.close);
  },

  updated() {
    if (this.$refs.menu) {
      const boxSize = this.point.target.getBoundingClientRect();
      const left = boxSize.left + boxSize.width / 2 - this.point.clientX;
      const top = boxSize.top + boxSize.height / 2 - this.point.clientY;
      let x = 0;
      let y = 0;
      if (left <= 0 && top > 0) {
        x = -100;
        y = 0;
      } else if (top <= 0 && left > 0) {
        x = 0;
        y = -100;
      } else if (left <= 0 && top <= 0) {
        x = -100;
        y = -100;
      }
      this.$refs.menu.style = `
      left:${this.point.clientX}px;
  top:${this.point.clientY}px;
  transform:translate(${x}%,${y}%);
    `;
    }
  },
};
</script>
