<template>
  <button
    class="w-16 h-7 block cursor-pointer rounded-full backdrop-blur-md before:bg-slate-400 relative before:absolute before:top-1/2 before:left-1 before:-translate-y-1/2 before:w-5 before:h-5 before:rounded-full before:transition-all before:duration-300 before:border before:shadow-black/50 before:shadow-md shadow shadow-gray-800/50"
    :switched="switched"
    :class="val ? 'switched bg-mainColor before:bg-slate-100 ' : ''"
    @click="changeValue()"
  ></button>
</template>

<script>
export default {
  emits: ["switch", "input"],

  props: {
    switched: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      val: this.switched,
    };
  },
  methods: {
    changeValue() {
      this.val = !this.val;
      this.$emit("switch", this.val);
      this.$emit("input", this.val);
    },
  },
};
</script>
<style scoped>
.switched::before {
  left: calc(100% - 1.5rem);
}
</style>
