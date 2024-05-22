<template>
  <teleport
    to="body"
    v-if="open"
    class="select-none"
    @contextmenu.prevent="() => null"
  >
    <div
      style="z-index: 999999"
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-screen w-screen flex flex-col justify-center items-center backdrop-blur-sm"
    >
      <base-card class="relative" style="max-height: 90%; max-width: 90%">
        <button
          class="absolute top-0 left-0 text-center -translate-x-1/2 -translate-y-1/2"
          id="closeBtn"
          @click="$emit('close', false)"
        >
          <the-icon
            :icon="['fas', 'close']"
            class="bg-red-500 w-7 h-7 text-center shadow"
          />
        </button>
        <div class="h-full w-full viewer">
          <slot></slot>
        </div>
      </base-card>
    </div>
  </teleport>
</template>
<script>
export default {
  emits: ["close"],
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style>
.viewer * {
  width: 100%;
  height: 100%;
  border-radius: inherit !important;
  box-shadow: 0 0 100px 10px #0005;
  max-height: 100%;
}
</style>
