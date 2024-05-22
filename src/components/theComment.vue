<template>
  <div class="mb-5 relative" ref="replyBox" :class="isWriter ? 'order-1' : ''">
    <div class="flex relative cmt" ref="comment">
      <!-- header -->
      <div
        class="min-w-8 min-h-8 w-8 h-8 md:w-10 md:h-10 rounded-full"
        :class="isAdmain ? 'relative' : ''"
      >
        <img
          :src="userData.img"
          :alt="`${userData.name} photo`"
          class="rounded-full w-full h-full object-cover"
        />
        <fs-icon
          v-if="isAdmain"
          :icon="['fas', 'crown']"
          class="bg-yellow-500 text-white rounded-full p-0.5 text-xs absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
        ></fs-icon>
      </div>

      <!-- end header -->
      <!-- wrapper -->
      <div class="min-w-52 ms-3 max-w-80">
        <div
          comment-box
          id="rep-content"
          :class="checkFocused"
          class="border dark:border-slate-800 rounded-3xl shadow-lg w-full px-4"
        >
          <!-- name -->
          <div class="flex p-1">
            <!-- <the-link
              router
              link=""
              class="text-xs font-bold text-gray-600 dark:text-gray-300 select-none"
              >{{ userData.name }}</the-link
            > -->
            <router-link
              :to="{
                path: isWriter ? `profile` : `userProfile`,

                query: {
                  username: userData.name,
                  id: userData.id,
                },
              }"
              class="text-xs font-bold text-gray-600 dark:text-gray-300 select-none"
              >{{ userData.name }}</router-link
            >
            <small
              v-if="isWriter"
              class="text-xs dark:text-gray-500 text-gray-400"
            >
              (أنت)
            </small>
            <!-- <p class="text-slate-400 text-xs">{{ rep.date }}</p> -->
            <span
              v-if="rep.updated"
              class="text-xs text-mainColor/60 ms-auto block"
              style="font-size: 10px"
              >تم تعديله</span
            >
          </div>
          <!-- end name -->
          <!-- content -->
          <div class="">
            <div>
              <!-- should move to profile by userId -->
              <the-link router link="" class="text-mainColor text-xs"
                >@{{ owner }}</the-link
              >
              <the-article
                :maxChar="250"
                class="text-xs leading-6 p-1"
                :text="rep.postText"
              >
              </the-article>
            </div>
          </div>
          <!-- end content -->
        </div>
        <!-- footer -->
        <div class="flex justify-between items-center mt-2 w-full">
          <div class="flex">
            <!-- like button -->
            <button
              @click="toggleLike()"
              :class="
                getLikeStatus
                  ? 'text-mainColor'
                  : 'md:hover:text-mainColor active:text-mainColor'
              "
              class="text-xs ms-3 cursor-pointer outline-none"
            >
              أعجبني
            </button>
            <!-- replies button -->

            <button
              v-if="!isWriter"
              @click="setReply()"
              class="text-xs ms-3 cursor-pointer md:hover:text-mainColor active:text-mainColor outline-none"
            >
              رد
            </button>
          </div>
          <div class="flex items-center" v-if="rep.likes.likesCount > 0">
            <span class="text-sm me-1">{{ rep.likes.likesCount }}</span>
            <fs-icon
              class="p-1 text-xs text-white bg-mainColor rounded-full"
              :icon="['fas', 'thumbs-up']"
            ></fs-icon>
          </div>
        </div>
        <!-- end footer -->
      </div>
      <!-- end wrapper -->
      <the-menu v-if="!isMobile" right>
        <template #button>
          <button
            class="editBtn text-lg text-center p-1 h-fit mt-2 ms-2 relative"
            @click="optionalList = !optionalList"
          >
            <fs-icon
              :icon="['fas', 'ellipsis']"
              :class="optionalList ? 'dark:text-gray-300 text-gray-700' : ''"
            />
          </button>
        </template>

        <div class="w-32">
          <div v-if="isWriter">
            <button
              @click="setUpdate"
              class="hover:dark:bg-dark3Color hover:bg-light2Color flex text-xs items-center w-full p-2 rounded-md"
            >
              <fs-icon :icon="['fas', 'pen']"></fs-icon>
              <span class="ms-3">تعديل</span>
            </button>
            <button
              @click="removingWindow = true"
              class="hover:dark:bg-dark3Color hover:bg-light2Color flex text-xs items-center w-full p-2 rounded-md"
            >
              <fs-icon :icon="['fas', 'trash']"></fs-icon>
              <span class="ms-3">حذف</span>
            </button>
          </div>
          <div>
            <button
              class="hover:dark:bg-dark3Color hover:bg-light2Color flex text-xs items-center w-full p-2 rounded-md"
            >
              <fs-icon :icon="['fas', 'flag']"></fs-icon>
              <span class="ms-3">تقرير</span>
            </button>
          </div>
        </div>
      </the-menu>
      <button
        v-if="isMobile"
        class="editBtn text-lg text-center p-1 h-fit mt-2 ms-2 relative"
        @click="optionalList = !optionalList"
      >
        <fs-icon
          :icon="['fas', 'ellipsis']"
          :class="optionalList ? 'dark:text-gray-300 text-gray-700' : ''"
        />
        <!-- @click="optionalList = false" -->

        <the-window
          v-if="isMobile"
          @close="optionalList = false"
          :open="optionalList"
          slide
          noResize
        >
          <div v-if="isWriter" @click="optionalList = false">
            <button
              @click="setUpdate"
              class="hover:dark:bg-dark3Color hover:bg-light2Color flex text-xs items-center w-full p-2 rounded-md"
            >
              <fs-icon :icon="['fas', 'pen']"></fs-icon>
              <span class="ms-3">تعديل</span>
            </button>
            <button
              @click="removingWindow = true"
              class="hover:dark:bg-dark3Color hover:bg-light2Color flex text-xs items-center w-full p-2 rounded-md"
            >
              <fs-icon :icon="['fas', 'trash']"></fs-icon>
              <span class="ms-3">حذف</span>
            </button>
          </div>
          <div @click="optionalList = false">
            <button
              class="hover:dark:bg-dark3Color hover:bg-light2Color flex text-xs items-center w-full p-2 rounded-md"
            >
              <fs-icon :icon="['fas', 'flag']"></fs-icon>
              <span class="ms-3">تقرير</span>
            </button>
          </div>
        </the-window>
      </button>
    </div>

    <div
      v-if="rep.type == 'comment'"
      class="w-2 dark:bg-dark3Color bg-light3Color absolute top-1/2 right-4 md:right-5 translate-x-1/2 -translate-y-1/2 rounded-full"
      style="height: calc(100% - 8rem)"
    ></div>
    <div
      v-if="rep.replies.length > 0"
      class="mt-5"
      :class="rep.type != 'reply' ? 'ms-10 md:ms-14' : ''"
    >
      <button
        class="text-xs text-gray-400"
        @click="showReplies = true"
        v-if="!showReplies"
      >
        عرض {{ rep.replies.length }} رد
      </button>
      <div v-if="showReplies || index > 1">
        <the-comment
          @reply="setReply"
          @like="toggleLike"
          @delete="setDel"
          @update="setUpdate"
          v-for="(i, ind) in rep.replies"
          :key="ind"
          :rep="i"
          :owner="userData.name"
          :ownerId="rep.userId"
          :focused="focused"
          :index="ind"
        >
        </the-comment>
      </div>
    </div>
  </div>
  <the-window
    slide
    :open="removingWindow"
    @close="removingWindow = $event"
    noResize
    title="حذف تعليق"
  >
    <div>
      <p class="text-md font-medium">هل تريد بالتأكيد حذف التعليق؟</p>
      <div class="flex justify-end">
        <base-button
          @click="removingWindow = false"
          class="w-20 bg-transparent hover:dark:bg-dark2Color hover:bg-lightColor"
          >لا</base-button
        >
        <base-button
          class="bg-red-500 text-white hover:bg-red-700 w-20"
          @click="setDel()"
          >نعم</base-button
        >
      </div>
    </div>
  </the-window>
</template>
<script>
// import list from "@/setOptionList";

export default {
  emits: ["like", "reply", "delete", "update"],
  props: ["rep", "owner", "ownerId", "focused", "index"],
  data() {
    return {
      showReplies: this.showRepliesIfLessThenTow(),
      optionalList: false,
      removingWindow: false,
      commentPressed: false,
    };
  },
  computed: {
    userData() {
      return this.$store.getters["users/getUserById"](this.rep.userId);
    },
    isAdmain() {
      return this.userData.type == "admin";
    },
    isMobile() {
      return document.body.getBoundingClientRect().width < 768;
    },
    isWriter() {
      return this.rep.userId == this.$store.state.personalData.id;
    },
    checkFocused() {
      if (this.focused == this.rep.commentId) {
        return " bg-light2Color dark:bg-dark3Color";
      }
      return "bg-lightColor dark:bg-dark2Color";
    },

    getLikeStatus() {
      return this.rep.likes.likedUsers.find(
        (el) => el == this.$store.state.personalData.id
      );
    },
    getPersonalData() {
      return this.$store.state.personalData;
    },
  },
  methods: {
    showRepliesIfLessThenTow() {
      return this.rep.type == "comment" && this.rep.replies.length < 2
        ? true
        : false;
    },
    toggleLike(id = undefined) {
      this.$emit(
        "like",
        id != undefined ? [this.rep.commentId].concat(id) : this.rep.commentId
      );
    },
    setReply(payload = undefined) {
      // this.$emit("reply", {id:this.rep.commentId,type:'set'});
      this.$emit("reply", {
        id:
          payload != undefined
            ? [this.rep.commentId].concat(payload.id)
            : this.rep.commentId,
        type: "set",
      });
    },
    setUpdate(payload) {
      this.$emit("update", {
        id:
          payload.id != undefined
            ? [this.rep.commentId].concat(payload.id)
            : this.rep.commentId,
        type: "update",
      });
    },

    setDel(e = undefined) {
      this.removingWindow = false;

      this.$emit(
        "delete",
        e != undefined ? [this.rep.commentId].concat(e) : this.rep.commentId
      );
    },
  },
  watch: {
    onFocus(val) {
      if (val) {
        this.$refs.replyBox
          .querySelector("#rep-content")
          .classList.add("focusAnim");
      } else {
        this.$refs.replyBox
          .querySelector("#rep-content")
          .classList.remove("focusAnim");
      }
    },
  },
};
</script>
<style scoped>
/* html[data-mode="dark"] .focusAnim {
  transition: 0.3s;
  background: #343743;
} */
.cmt:hover .editBtn {
  display: block;
}
</style>
