<template>
  <!-- <div :toolTip="toolTip ? toolTip : null"> -->
  <base-button
    v-if="type == 'submit'"
    :value="value"
    type="submit"
    class="w-full"
  ></base-button>
  <input
    v-else-if="type == 'checkbox'"
    :toolTip="toolTip ? toolTip : null"
    @change="update($event)"
    :checked="isCheckedBox"
    :value="modelValue != null ? modelValue : value"
    :type="type"
    class="accent-mainColor cursor-pointer relative focus:before:absolute focus:before:top-0 focus:before:left-0 focus:before:w-full focus:before:h-full focus:before:rounded focus:before:-z-10 focus:before:ring-1 focus:before:ring-mainColor"
    style="color: #fff !important"
  />
  <div v-else class="w-full">
    <div
      @click="focusInp()"
      ref="inpBox"
      class="w-full rounded flex items-center"
      :class="isField"
      :toolTip="toolTip"
    >
      <span @click="$emit('iconClick', $event)">
        <fs-icon :icon="icon" v-if="icon" class="_Icon"> </fs-icon>
      </span>
      <input
        @focus="focusBox()"
        @input="inputModel($event.target)"
        :toolTip="toolTip"
        :value="modelValue != null ? modelValue : value"
        :type="type"
        :class="
          type == 'radio'
            ? 'accent-mainColor cursor-pointer relative focus:before:absolute focus:before:top-0 focus:before:left-0 focus:before:w-full focus:before:h-full focus:before:rounded-full focus:before:-z-10 focus:before:ring-1 focus:before:ring-mainColor '
            : 'w-full p-2   bg-transparent backdrop-blur-md  focus:outline-none      '
        "
      />
    </div>
    <p class="p-1 text-xs text-red-500">
      <span v-show="validErorr">
        {{ getValidMsg }}
      </span>
    </p>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  emits: ["update:modelValue", "iconClick"],

  modelValue: {
    prop: "modelValue",
    event: "input",
  },

  props: {
    modelValue: { type: String },
    type: {
      type: String,
      default: "text",
    },

    value: {
      type: String,
      default: undefined,
    },
    validaion: {
      type: Object,
      default: function () {
        return { status: null };
      },
    },
    toolTip: {
      type: String,
    },
    icon: {},
  },
  computed: {
    isField() {
      let cls = "relative  ring-1 ";
      if (this.icon) cls += " px-2 ";
      if (this.validErorr) cls += "  bg-red-500 bg-opacity-10 ring-red-500/50";
      else if (this.validErorr == false)
        cls += " bg-green-500 ring-green-500/50 bg-opacity-10";
      else cls += "  ring-gray-300 dark:ring-gray-700";
      return cls;
    },
    validErorr() {
      return this.validaion.status == true || this.validaion == true
        ? false
        : this.validaion.status == false || this.validaion == false
        ? true
        : null;
    },
    getValidMsg() {
      if (this.validErorr) return this.validaion.msg;
      return "";
    },
    isChecked() {
      return this.modelValue == this.value;
    },
    isCheckedBox() {
      if (this.modelValue instanceof Array)
        return this.modelValue.includes(this.value);
      return this.modelValue === true;
    },
  },
  methods: {
    inputModel(e) {
      this.$emit("update:modelValue", e.value);
    },

    update(e) {
      let isChecked = e.target.checked;
      let val = [...this.modelValue];
      if (isChecked) val.push(this.value);
      else val = val.filter((v) => v != this.value);
      this.$emit("update:modelValue", val);
    },
    focusBox() {
      try {
        const box = this.$refs.inpBox;

        box.classList.remove("ring-red-500/50");
        box.classList.remove("ring-green-500/50");
        box.classList.add("dark:ring-gray-700");
        box.classList.add("ring-gray-300");
        box.classList.remove("bg-green-500");
        box.classList.remove("bg-red-500");
      } catch (e) {
        return;
      }
    },
    focusInp() {
      this.$refs.inpBox.querySelector("input").focus();
    },
  },
  mounted() {},
};
</script>
<style scoped>
input[type="number"]::-webkit-inner-spin-button {
  display: none;
}

/* .fo ._Icon {
  color: var(--mainColor);
} */
</style>
