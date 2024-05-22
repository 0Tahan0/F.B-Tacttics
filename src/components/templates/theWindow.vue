<template>
  <teleport to="body" v-if="open">
    <div
      id="The_Window_Vue"
      dir="rtl"
      class="fixed top-0 left-0 h-screen w-screen z-50 select-none"
      :class="hasBlur"
      @contextmenu.prevent="() => null"
    >
      <base-card
        class="flex m-0 my-0 flex-col justify-center mx-auto fixed rounded bg-lightColor dark:bg-darkColor"
        :class="checkSizeShape"
        :style="
          fullWindow ? 'max-height:100%;' : 'max-height: calc(100% - 15vh)'
        "
      >
        <!-- header -->
        <header class="p-2 flex items-center">
          <base-button @click="closed()" class="shadow-none">
            <fs-icon :icon="['fas', 'close']"></fs-icon
          ></base-button>
          <base-button
            class="shadow-none"
            v-if="noResize == false"
            @click="fullWindow = !fullWindow"
          >
            <fs-icon
              :icon="['fas', fullWindow ? 'compress' : 'expand']"
            ></fs-icon
          ></base-button>
          <span class="ms-auto capitalize text-gray-500 text-sm md:text-md">{{
            title
          }}</span>
        </header>
        <!-- end header -->
        <!-- content -->
        <div
          class="overflow-y-auto p-3 w-full"
          :class="fullWindow ? 'h-full ' : ''"
        >
        
          <slot
            ><div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-600"
            >
              {{ def }}
            </div></slot
          >
        </div>
        <!-- end content -->
        <!-- footer -->
        <footer class="">
          <slot name="footer"></slot>
        </footer>
        <!-- end footer -->
      </base-card>
    </div>
  </teleport>
</template>
<script>
export default {
  emits: ["close"],

  props: {
    def: {},
    title: {
      type: String,
      default: "",
    },

    open: {
      type: Boolean,
      default: false,
    },
    slide: { type: Boolean, default: false },
    full: {
      type: Boolean,
      default: false,
    },
    blur: {
      type: Boolean,
      default: false,
    },
    noResize: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      fullWindow: this.$props.full,
    };
  },
  computed: {
    checkSizeShape() {
      let cls = `w-11/12 md:w-8/12  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ${this.hasSlide}`;
      if (this.fullWindow) cls = " h-full w-full  fade";

      return cls;
    },
    hasSlide() {
      return this.slide ? " anim " : " fade";
    },
    hasBlur() {
      return this.blur ? "backdrop-blur-lg" : "bg-black bg-opacity-50";
    },
  },
  methods: {
    closed() {
      this.$emit("close");
    },
    resize() {
      this.fullWindow = !this.fullWindow;
    },
  },
  watch: {
    open(val) {
      const body = document.querySelector("body");
      // console.log(document.querySelector("#The_Window_Vue"));
      if (val) {
        body.style.overflowY = "hidden";
      } else {
        if (body.querySelectorAll("#The_Window_Vue").length > 1) {
          body.style.overflowY = "hidden";
        } else body.style.overflowY = "auto";
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 5px !important;
}
.anim {
  animation: slide;
  animation-duration: 0.5s;
}
@keyframes slide {
  from {
    transform: translate(-50%, 200%);
    /* transform: translateX(-50%);  */
  }
  to {
    transform: translate(-50%, -50%);
    /* transform: translateX(-50%); */
  }
}
</style>
