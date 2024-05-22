<template>
  <base-card class="flex items-center slide-up">
    <router-link
      :to="{ path: 'profile/' }"
      class="w-10 h-10 shadow-md rounded-full"
    >
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
        title="إنشاء مقال"
        blur
      >
        <textarea
          ref="postBox"
          v-model="postText"
          class="resize-none h-fit md:text-lg text-xs w-full outline-none border-none bg-transparent"
          cols="30"
        >
        </textarea>
        <div class="flex flex-wrap pt-4 border-t border-gray-600">
          <div
            v-for="(im, ind) in this.postMedia.images"
            :key="im"
            class="max-h-96 w-72 flex-grow py-4 px-1"
          >
            <button class="hover:text-red-500" @click="cancelImg(ind)">
              <fs-icon :icon="['fas', 'trash']" class="text-md" />
            </button>

            <img
              class="min-w-full min-h-full object-cover max-w-full max-h-full w-full h-full"
              :src="im"
              :alt="`image ${ind + 1}`"
            />
          </div>
          <div
            v-for="(vd, ind) in this.postMedia.videos"
            :key="vd"
            class="max-h-96 w-72 flex-grow py-4 px-1"
          >
            <button class="hover:text-red-500" @click="cancelVideo(ind)">
              <fs-icon :icon="['fas', 'trash']" class="text-md" />
            </button>
            <video
              class="min-w-full min-h-full max-w-full max-h-full w-full h-full"
              controls="controls"
              :src="vd"
            ></video>
          </div>
        </div>

        <template #footer>
          <div class="px-5">
            <p>إضافة إلى مقالك</p>
            <base-card class="mt-2 flex items-center space-x-2">
              <button
                toolTip="صورة"
                class="shadow-none text-blue-500"
                @click="setImg()"
              >
                <input
                  multiple="multiple"
                  type="file"
                  ref="imageUploader"
                  hidden
                  @change="uploadImg"
                  accept="image/*"
                />
                <the-icon :icon="['fas', 'image']" style="color: #09f" />
              </button>
              <button toolTip="فديو" @click="setVideo()">
                <input
                  multiple="multiple"
                  type="file"
                  ref="videoUploader"
                  hidden
                  @change="uploadVideo"
                  accept="video/*"
                />
                <the-icon :icon="['fas', 'video']" style="color: #f03" />
              </button>
              <!-- <button>
                <span
                  class="text-white select-none bg-orange-500 rounded-full text-xs p-3 flex flex-col items-center justify-center h-5 w-5"
                >
                  GIF
                </span>
              </button> -->
            </base-card>
            <div class="flex justify-between">
              <base-button
                :disabled="hasContent"
                @click="this.cancelPost = true"
                class="bg-red-500 w-20"
                >إلغاء</base-button
              >

              <base-button
                :disabled="hasContent"
                @click="sendPost()"
                class="dark:bg-dark3Color w-20 bg-gray-300 hover:bg-mainColor"
              >
                نشر
              </base-button>
            </div>
          </div>
        </template>
      </the-window>
      بما تفكر يا {{ ownerData.name }} ؟
    </base-button>
  </base-card>
  <the-post v-for="i in posts" :key="i.postId" :info="i"></the-post>
  <the-window
    slide
    :open="cancelPost"
    noResize
    title="إلغاء المقال"
    @close="cancelPost = false"
  >
    <div>
      <p class="text-md">هل تريد إلغاء المقال ؟</p>
      <base-button @click="reset()" class="bg-red-500">نعم</base-button>
      <base-button @click="cancelPost = false" class="dark:bg-dark3Color"
        >لا</base-button
      >
    </div>
  </the-window>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      cancelPost: false,

      postBox: false,
      postText: "",
      postMedia: {
        images: [],
        videos: [],
      },
    };
  },
  computed: {
    ...mapGetters("posts", {
      posts: "getAllPosts",
    }),

    ownerData() {
      return this.$store.state.personalData;
    },
    hasContent() {
      if (
        this.postMedia.videos.length > 0 ||
        this.postMedia.images.length > 0 ||
        this.postText != ""
      )
        return false;
      return true;
    },
  },
  methods: {
    ...mapMutations("posts", ["createPost"]),
    sendPost() {
      if (this.postText != "") {
        this.createPost({ txt: this.postText.trim(), media: this.postMedia });
        this.postBox = false;
        this.reset();
      }
    },
    setImg() {
      this.$refs.imageUploader.click();
    },
    setVideo() {
      this.$refs.videoUploader.click();
    },
    uploadVideo() {
      const file = this.$refs.videoUploader.files;

      if (file) {
        for (let i = 0; i < file.length; i++) {
          const reader = new FileReader();
          reader.readAsDataURL(file[i]);
          reader.addEventListener("load", () =>
            this.postMedia.videos.push(reader.result)
          );
        }
      }
    },
    uploadImg() {
      const file = this.$refs.imageUploader.files;

      if (file) {
        for (let i = 0; i < file.length; i++) {
          const reader = new FileReader();
          reader.readAsDataURL(file[i]);
          reader.addEventListener("load", () =>
            this.postMedia.images.push(reader.result)
          );
        }
      }
    },

    reset() {
      this.cancelPost = false;

      // postBox= false,
      this.postText = "";
      this.postMedia = {
        images: [],
        videos: [],
      };
    },
    cancelImg(ind) {
      this.postMedia.images = this.postMedia.images.filter(
        (el) => el != this.postMedia.images[ind]
      );
    },
    cancelVideo(ind) {
      this.postMedia.videos = this.postMedia.videos.filter(
        (el) => el != this.postMedia.videos[ind]
      );
    },
  },
};
</script>
<style scoped>
.mediaSelected::before {
  content: attr(before-content);
}
</style>
