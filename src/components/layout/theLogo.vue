<template>
  <div
    class="max-w-32 flex flex-col items-center justify-center max-h-full p-1 "
    :class="bgNone ? '':'relative before:absolute before:w-screen before:h-full before:top-0 before:left-1/2 before:-translate-x-1/2 before:-z-10 before:bg-gradient-to-r before:from-mainColor before:from-45% before:to-transparent before:to-50% z-10'"
  >
    <img
      src="@/assets/images/F.B.png"
      alt="logo"
      class="object-cover block max-w-full max-h-full"
    />
  </div>
</template>
<script>
export default {
  props: {
    bgNone: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
