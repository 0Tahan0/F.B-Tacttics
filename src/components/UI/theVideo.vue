<template>
  <div class="relative">
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-gray-500/30 w-full h-full"
    >
      <span
        id="playIcon"
        class="text-white text-center bg-black/20 ring-2 ring-white rounded-full text-md md:text-lg flex justify-center items-center"
      >
        <fs-icon :icon="['fas', 'play']" />
      </span>
    </div>
    <video :autoplay="autoplay" :src="src"></video>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
#playIcon {
  --size: 2.7rem;
  min-height: var(--size);
  min-width: var(--size);
}
</style>
