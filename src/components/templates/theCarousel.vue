<template>
  <div ref="carousel" class="relative">
    <div class="md:px-10 py-10 md:py-0 h-full max-h-full min-h-full w-full">
      <slot></slot>
    </div>
    <button
      @click="current++"
      class="absolute top-1/2 md:w-10 md:h-10 w-7 h-7 text-xs md:text-sm bg-gray-500 bg-opacity-30 text-gray-50 rounded-full -translate-y-1/2 hover:bg-opacity-50 right-0"
    >
      <fs-icon :icon="['fas', 'angle-right']" />
    </button>
    <button
      @click="current--"
      class="absolute top-1/2 md:w-10 md:h-10 w-7 h-7 text-xs md:text-sm bg-gray-500 bg-opacity-30 text-gray-50 rounded-full -translate-y-1/2 hover:bg-opacity-50 left-0"
    >
      <fs-icon :icon="['fas', 'angle-left']" />
    </button>
    <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex">
      <button
        v-for="(i, ind) in length"
        :key="ind"
        @click="current = ind"
        class="md:w-4 mx-1 md:h-4 h-3 w-3 rounded-full bg-gray-500"
        :class="current == ind ? 'bg-opacity-60' : 'bg-opacity-30'"
      ></button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    autoPlay: {
      type: Boolean,
    },
    time: {
      type: Number,
      default: 3500,
    },
  },
  data() {
    return {
      current: 0,
      length: 0,
    };
  },
  watch: {
    current() {
      this.checkCurrent();
    },
  },
  methods: {
    checkCurrent() {
      if (this.current > this.length - 1) this.current = 0;
      else if (this.current < 0) this.current = this.length - 1;
      this.show(this.current);
    },
    show(index) {
      if (this.length) {
        const carouselTtems =
          this.$refs.carousel.querySelectorAll("[carousel-item]");
        carouselTtems.forEach((el) => el.classList.add("hidden"));
        carouselTtems[index].classList.remove("hidden");
      }
    },
  },

  mounted() {
    const carousel = this.$refs.carousel;
    const carouselTtems = carousel.querySelectorAll("[carousel-item]");
    if (carouselTtems) {
      this.length = carouselTtems.length;
      carouselTtems.forEach((el, ind) => {
        el.style = `min-width:100%; min-height:100%;hieght:100%; width:100% `;
        el.classList.add("fade");
        if (ind > 0) el.classList.add("hidden");
      });
      if (this.autoPlay) {
        setInterval(() => this.current++, Number(this.time));
      }
    }
  },
};
</script>
