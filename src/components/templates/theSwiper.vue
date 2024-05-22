<template>
  <div class="relative">
    <div
      ref="swiper"
      class="h-full max-h-full min-h-full flex overflow-x-hidden md:px-10"
    >
      <slot></slot>
    </div>
    <button
      @click="current--"
      class="absolute top-1/2 md:w-10 md:h-10 w-7 h-7 text-xs md:text-sm bg-gray-500 bg-opacity-30 text-gray-50 rounded-full -translate-y-1/2 hover:bg-opacity-50 right-0"
    >
      <fs-icon :icon="['fas', 'angle-right']" />
    </button>
    <button
      @click="current++"
      class="absolute top-1/2 md:w-10 md:h-10 w-7 h-7 text-xs md:text-sm bg-gray-500 bg-opacity-30 text-gray-50 rounded-full -translate-y-1/2 hover:bg-opacity-50 left-0"
    >
      <fs-icon :icon="['fas', 'angle-left']" />
    </button>
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 flex">
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
  data() {
    return {
      current: 0,
      length: 0,
      isDown: false,
    };
  },
  methods: {
    move() {
      if (this.current > this.length - 1) this.current = 0;
      else if (this.current < 0) this.current = this.length - 1;
      const swiper = this.$refs.swiper;
      const swiperItems = swiper.querySelectorAll("[swiper-item]");
      swiperItems.forEach((el) => {
        const dir = document.querySelector(":root").attributes["dir"].value;

        el.style.transform = `translateX(${
          this.current * 100 * (dir == "rtl" ? 1 : -1)
        }%)`;
      });
    },
  },
  watch: {
    current() {
      this.move();
    },
  },
  mounted() {
    const swiper = this.$refs.swiper;
    const swiperItems = swiper.querySelectorAll("[swiper-item]");
    if (swiperItems) {
      this.length = swiperItems.length;
      swiperItems.forEach((el) => {
        el.style = `min-width:100%; max-width:100%; width:100% ;transition:transform .5s;`;
      });
      let start = 0;
      let end = 0;
      swiper.addEventListener(
        "touchstart",
        (e) => (start = e.changedTouches[0].clientX)
      );
      swiper.addEventListener("touchend", (e) => {
        end = e.changedTouches[0].clientX;
        if (Math.abs(start - end) > 50) {
          if (start > end) {
            this.current--;
          } else if (end >= start) this.current++;
        }
      });
    }
  },
  updated() {
    const swiper = this.$refs.swiper;
    const swiperItems = swiper.querySelectorAll("[swiper-item]");
    this.length = swiperItems.length;
  },
};
</script>
<style scoped>
::-webkit-scrollbar {
  width: 1px;
  height: 1px;
}
</style>
