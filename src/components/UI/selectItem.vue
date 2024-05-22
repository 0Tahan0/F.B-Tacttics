<template>
  <a
    id="selectItem"
    v-if="href"
    :href="href"
    :target="target"
    :value="value"
    @click="$emit('click', value)"
    
  >
    <slot></slot>
  </a>
  <div
    v-else
    id="selectItem"
    :value="value"
    @click="$emit('click', value)"
    class="py-1 px-2 block cursor-pointer font-medium hover:bg-mainColor/30 hover:text-mainColor"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  emits:['click'],

  props: {
    value: {
      type: String,
      default: "",
    },
    href: {
      type: String,
    },
    target: {
      type: String,
      default: "_self",
    },
  },
};
</script>
