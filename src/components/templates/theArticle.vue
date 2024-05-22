<template>
  <div>
    <p ref="theText" class="w-full break-words whitespace-pre-line leading-7">
      <slot>{{ text }}</slot>
    </p>
    <div
      ref="readMoreBtn"
      @click="toggleShow($event)"
      class="text-gray-400 cursor-pointer text-bold ms-auto w-fit"
      style="font-size: calc(10px + 0.2vw)"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    maxChar: {
      default: 250,
    },
    text: {
      type: String,
    },
  },
  data() {
    return {
      clipped: false,
      allText: null,
    };
  },
  computed: {
    isLong() {
      return this.text
        ? this.text.length > this.maxChar
        : this.$refs.theText.textContent.length > this.maxChar;
    },
  },
  methods: {
    toggleShow() {
      const txt = this.$refs.theText;
      const fixedText = this.textCustom(this.allText).fix();
      if (this.clipped) {
        this.$refs.readMoreBtn.textContent = "قراءة أقل";
        txt.innerHTML = fixedText;
        this.clipped = false;
      } else {
        this.$refs.readMoreBtn.textContent = "قراءة المزيد";
        txt.innerHTML =
          this.textCustom(fixedText).clip(this.maxChar).firstPart + ". . .";
        this.clipped = true;
      }
    },
    textCustom(txt) {
      return {
        print: () => {
          console.log(txt);
        },
        isLong: () => {
          return txt.length > this.maxChar;
        },
        clip: (index) => {
          return {
            firstPart:
              txt.length > Number(index) ? txt.substr(0, Number(index)) : txt,
            lastPart:
              txt.length > Number(index) ? txt.substr(Number(index)) : txt,
          };
        },

        fix: () => {
          const pattern = /(https?:\/\/[^\s]+)/g;
          const url = pattern.test(txt) ? txt.match(pattern).join() : "";
          txt = txt.replaceAll("<", "&lt;");
          txt = txt.replaceAll(">", "&gt;");
          txt = txt.replace(
            pattern,
            `<a href="${url}" class=" text-blue-400 underline" target="_blank">${url}</a>`
          );
          return txt;
        },
      };
    },
    textProcessing() {
      const txt = this.$refs.theText;
      this.allText = txt.textContent;
      const fixedText = this.textCustom(txt.textContent).fix();
      if (this.textCustom(fixedText).isLong()) {
        txt.innerHTML =
          this.textCustom(fixedText).clip(this.maxChar).firstPart + ". . .";
        this.clipped = true;
        this.$refs.readMoreBtn.textContent = "قراءة المزيد";
        this.$refs.readMoreBtn.classList.remove("hidden");
      } else {
        this.clipped = false;
        txt.innerHTML = fixedText;
        this.$refs.readMoreBtn.classList.add("hidden");
      }
    },
  },
  updated() {
    this.$refs.theText.textContent = this.text;
    this.textProcessing();
  },
  mounted() {
    this.textProcessing();
  },
};
</script>
