<template>
  <div
    ref="selectMenu"
    @click="toggleMenu()"
    @dragleave="toggleMenu()"
    class="shadow-md cursor-pointer z-10 my-1 rounded p-2 border border-mainColor/30 focus:ring focus:ring-mainColor bg-transparent backdrop-blur-md"
  >
    <div ref="selectedValueName" class="flex items-center justify-between">
      <!-- <span v-if="!selected">{{ title }}</span
        ><span v-else>{{ selected }}</span> -->
      <div class="flex-grow">
        <slot name="title" v-if="!selected">
          <!-- {{ title }} -->
          <span v-if="!selected">{{ title }}</span
          ><span v-else>{{ selected }}</span>
        </slot>
        <span v-else>{{ selected }}</span>
      </div>
      <span v-if="arrow" class="dropIcon w-4 mt-2"></span>
    </div>

    <div
      v-show="opened"
      class="absolute top-full left-1/2 -translate-x-1/2 w-fit border border-inherit rounded-b bg-gray-100 dark:bg-darkColor max-h-40 overflow-y-auto"
    >
      <div ref="content" id="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  emits: ["change", "update:modelValue"],
  props: {
    modelValue: {},

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

      this.$emit("update:modelValue", selectedValue);
      this.$emit("change", selectedValue);
      // ----------------------------------
      // this.selected = val.target.attributes["value"].value
    },
  },
  mounted() {
    // document.querySelectorAll("#content #selectItem").forEach((item) => {
    //   item.addEventListener("click", () => this.selectItem(item));
    // });
    const options = this.$refs.content.querySelectorAll("option");
    if (options) {
      options.forEach((op) => {
        op.className =
          "py-1 px-2 block cursor-pointer font-medium hover:bg-mainColor/30 hover:text-mainColor";
        op.addEventListener("click", () => this.selectItem(op));
      });
    }
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
