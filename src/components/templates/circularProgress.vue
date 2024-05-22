<template>
  <div
    class="rounded-full outer-CirPro flex items-center justify-center relative"
    :style="outerSize"
  >
    <div class="inner-CirPro rounded-full" :style="innerSize">
      <svg
        version="1.1"
        :width="size + 'px'"
        :height="size + 'px'"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <defs ref="defs">
          <linearGradient id="gc">
            <stop offset="0%" :stop-color="colors[0]" />
            <stop offset="100%" :stop-color="colors[1]" />
          </linearGradient>
        </defs>
        <circle
          :cx="size / 2"
          :cy="size / 2"
          :r="size / 2 - 10"
          stroke-linecap="round"
          :style="calcRate"
        />
      </svg>
      <span
        class="font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >{{ getRate }}%</span
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: Number,
      default: 140,
    },
    rate: {
      type: Number,
      default: 0,
    },
    colors: {
      default: ["#23f148", "#673ab7"],
      //   01a0a4 green
      // e91e63 pink
    },
  },
  data() {
    return {
      radius: Math.round(Math.PI * (this.$props.size / 2 - 10) * 2),
    };
  },
  computed: {
    outerSize() {
      const size = this.size;
      return `width :${size}px;height:${size}px`;
    },
    innerSize() {
      const size = this.size - 40;
      return `width :${size}px;height:${size}px`;
    },
    calcRate() {
      return `stroke-dashoffset: ${
        this.radius - (this.getRate * this.radius) / 100
      };
       stroke-dasharray: ${this.radius};
      `;
    },
    getRate() {
      return this.rate > 100 ? 100 : this.rate < 0 ? 0 : this.rate;
    },
  },
  mounted() {
    // const gradientBox = document.createElement('linearGradient');
    // let colors = this.colors;
    // if (typeof colors != "object") colors = colors.split(",");
    // colors.forEach((col, ind) => {
    //   const stop = document.createElement("stop");
    //   stop.setAttribute(
    //     "offset",
    //     `${Math.round((100 / colors.length) * ind)}%`
    //   );
    //   stop.setAttribute("stop-color", `${col}`);
    //   gradientBox.appendChild(stop);
    // });
    // console.log(gradientBox);
  },
};
</script>
<style scoped>
circle {
  fill: none;
  stroke: url(#gc);
  stroke-width: 20px;
  animation: animCP-1 0.3s linear forwards;
  /* transition: 2s; */
}
.outer-CirPro {
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
}
html[data-mode="dark"] .outer-CirPro {
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(17, 17, 17, 0.7);
}
.inner-CirPro {
  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
    -0.5px -0.5px 0px rgba(255, 255, 255, 1),
    -0.5px -0.5px 0px rgba(255, 255, 255, 1);
}
html[data-mode="dark"] .inner-CirPro {
  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px rgba(17, 17, 17, 0.7),
    -0.5px -0.5px 0px rgba(17, 17, 17, 1), -0.5px -0.5px 0px rgba(17, 17, 17, 1);
}
</style>
