<template>
  <button
    :disabled="disabled"
    @click="$emit('click', $event)"
    :type="type"
    class="py-1 m-1 px-3 font-medium transition duration-300 backdrop-blur-md shadow-md text-xs md:text-sm"
    :class="
      disabled
        ? 'dark:bg-gray-950/70 dark:text-gray-700 bg-gray-200 text-gray-50'
        : isShape
    "
  >
    <slot>{{ value }}</slot>
  </button>
</template>
<script>
export default {
  emits: ["click"],
  props: {
    type: {
      type: String,
    },
    value: {
      type: String,
    },
    shape: {
      type: String,
    },
    slideSide: {
      type: String,
      default: "bottom",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isShape() {
      if (this.shape == "slide") {
        let side = `before:left-0 before:-bottom-full
          hover:before:bottom-0 `;
        let slider = ` before:absolute overflow-hidden
          before:duration-300
          hover:text-white
          ${this.disabled ? "before:bg-none" : ""}
          before:w-full before:h-full
          before:-z-10
          relative `;
        if (this.slideSide == "top")
          side = `before:left-0 before:-top-full
          hover:before:top-0 `;
        else if (this.slideSide == "left")
          side = `before:top-0 before:-left-full
          hover:before:left-0 `;
        else if (this.slideSide == "right")
          side = `before:top-0 before:-right-full
          hover:before:right-0 `;

        return `${side} ${slider} ${
          this.rounded ? "rounded-full" : "rounded-sm"
        }`;
      }
      return ` hover:text-white ${
        this.rounded ? "rounded-full" : "rounded-sm"
      }`;
    },
  },
};
</script>
