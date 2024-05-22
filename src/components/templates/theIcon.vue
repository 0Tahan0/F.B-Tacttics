<template>
  <span
    @click="$emit('click', $event)"
    :toolTip="toolTip"
    class="md:text-lg text-sm m-0.5 flex justify-center items-center rounded-full text-white"
  >
    <fs-icon :icon="icon"></fs-icon>
  </span>
</template>
<script>
export default {
  emits: ["click"],
  props: {
    icon: {
      require: true,
    },
    toolTip: { type: String },
  },
};
</script>
