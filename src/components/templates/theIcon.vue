<template>
  <span
    @click="$emit('click', $event)"
    :toolTip="toolTip"
    class="md:text-lg text-md m-1 flex justify-center items-center rounded-full md:w-9 md:h-9 h-8 w-8 text-white"
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
