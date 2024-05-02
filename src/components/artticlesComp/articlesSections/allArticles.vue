<template>
  <base-card class="flex items-center">
    <router-link to="" class="w-10 h-10 shadow-xl rounded-full">
      <img
        :src="ownerData.img"
        :alt="ownerData.name"
        class="rounded-full w-full min-full h-full min-h-full"
      />
    </router-link>
    <base-button
      @click="postBox = true"
      rounded
      class="text-start text-gray-600 hover:bg-light3Color hover:dark:bg-dark3Color flex-grow border border-light3Color dark:border-dark3Color"
    >
      <the-window
        @close="postBox = false"
        noResize
        :open="postBox"
        title="إنشاء منشور"
        blur
      >
        <textarea
          ref="postBox"
          :placeholder="`بما تفكر يا ${ownerData.name} ؟`"
          class="resize-none h-full md:text-2xl text-lg w-full outline-none border-none bg-transparent"
          cols="30"
          rows="10"
        ></textarea>
        <template #footer>
          <div class="px-5">
            <p>إضافة إلى منشورك</p>
            <base-card class="mt-2 flex items-center space-x-2">
              <button class="shadow-none">
                <the-icon :icon="['fas', 'image']" class="text-green-600" />
              </button>
              <button>
                <the-icon :icon="['fas', 'video']" class="text-blue-600" />
              </button>
              <button>
                <span
                  class="text-white select-none bg-orange-500 rounded-full text-xs p-3 flex flex-col items-center justify-center h-5 w-5"
                >
                  GIF
                </span>
              </button>
            </base-card>
            <base-button
              @click="sendPost()"
              class="w-full mx-auto text-lg py-2 dark:bg-gray-800 bg-gray-300 hover:bg-opacity-75"
            >
              نشر
            </base-button>
          </div>
        </template>
      </the-window>
      بما تفكر يا {{ ownerData.name }} ؟
    </base-button>
  </base-card>
  <the-post v-for="(i, ind) in getPosts" :key="ind" :info="i"></the-post>
</template>
<script>
export default {
  data() {
    return {
      postBox: false,
    };
  },
  computed: {
    getPosts() {
      return this.$store.state.info;
    },
    ownerData() {
      return this.$store.state.personalData;
    },
  },
  methods:{
     sendPost() {
      const postBox = this.$refs.postBox;
      if (postBox.value.trim()) {
        this.$store.commit("createPost", postBox.value.trim());
        this.postBox = false;
      }
    }
  }
};
</script>
