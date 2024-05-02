<template>
  <div
    ref="selectMenu"
    @click="toggleMenu()"
    @dragleave="toggleMenu()"
    class="shadow-md cursor-pointer z-10 my-1 rounded p-2 border border-mainColor/30 focus:ring focus:ring-mainColor bg-transparent backdrop-blur-md"
  >
    <div ref="selectedValueName" class="flex items-center">
      <!-- <span v-if="!selected">{{ title }}</span
        ><span v-else>{{ selected }}</span> -->
      <div class="w-full">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <span v-if="arrow" class="dropIcon p-1 h-1 ms-auto"></span>
    </div>

    <div
      v-show="opened"
      class="absolute top-full left-0 w-full border border-inherit rounded-b bg-gray-100 dark:bg-darkColor max-h-40 overflow-y-auto"
    >
      <div ref="content" id="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  emits: ["change", "input"],
  props: {
    arrow: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "select menu",
    },
  },
  data() {
    return {
      opened: false,
      selected: null,
    };
  },
  computed: {},
  watch: {
    opened(opened) {
      if (opened) {
        const element = this.$refs.selectMenu;
        document.addEventListener("click", (event) => {
          if (!element.contains(event.target)) this.opened = false;
        });
      }
    },
  },
  methods: {
    toggleMenu() {
      this.opened = !this.opened;
    },
    selectItem(val) {
      // console.log(val);
      this.selected = val.textContent;
      const selectedValue = val.attributes["value"].value;

      this.$emit("input", selectedValue);
      this.$emit("change", selectedValue);
      // ----------------------------------
      // this.selected = val.target.attributes["value"].value
    },
    test(v) {
      console.log(v);
    },
  },
  mounted() {
    document.querySelectorAll("#content #selectItem").forEach((item) => {
      item.addEventListener("click", () => this.selectItem(item));
    });
  },
};
</script>
<style scoped>
.dropIcon {
  position: relative;
}
.dropIcon::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-width: 5px;
  border-style: solid;
  border-color: var(--mainColor) #0000 #0000 #0000;
}
</style>
