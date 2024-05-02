<template>
  <div
    class="my-2 m-1 md:m-2 h-fit bg-light2Color dark:bg-dark2Color border dark:border-slate-900 md:px-4 px-2 rounded shadow-md shadow-black"
  >
    <!-- header -->
    <div class="flex items-center py-2">
      <div
        class="w-12 h-12 rounded-full cursor-pointer shadow-md shadow-black"
        :toolTip="info.userName"
      >
        <img
          :src="info.userImg"
          alt="user photo"
          class="rounded-full w-full h-full object-cover"
          @click="showImg($event)"
        />
      </div>
      <div class="mx-3">
        <the-link router link="" class="text-sm mb-2">{{
          info.userName
        }}</the-link>
        <p class="text-slate-400 text-xs">
          {{ info.date }}
        </p>
      </div>
      <span
        :tooltip="isSaved ? 'إلغاء الحفظ' : 'حفظ'"
        toolTipRight
        class="ms-auto cursor-pointer transition-colors hover:text-mainColor"
        :class="isSaved ? 'text-mainColor' : ''"
        @click="savePopPost()"
      >
        <span v-if="isSaved" class="text-xs mx-1">تم الحفظ</span>
        <fs-icon :icon="[isSaved ? 'fas' : 'far', 'bookmark']"
      /></span>
    </div>
    <!-- end header -->
    <!-- content -->
    <div class="flex flex-col">
      <the-article
        maxChar="500"
        class="py-3 text-sm md:text-md leading-7"
        :text="info.postText"
      >
      </the-article>

      <div class="flex flex-wrap">
        <!-- img -->
        <img
          loading="lazy"
          class="flex-grow object-cover max-h-52 min-w-36 cursor-pointer fade m-0.5"
          v-for="(im, ind) in info.postImg"
          :key="ind"
          :src="im"
          :alt="`image ${ind + 1}`"
          @click="showImg($event)"
        />
      </div>
    </div>
    <!-- end content -->
    <!-- footer -->
    <div class="mt-2">
      <div class="flex justify-between text-center py-2">
        <!-- likes count -->
        <span class="w-full" toolTip="عدد الإعجابات">{{
          info.likes.likesCount
        }}</span>
        <!-- comments count -->
        <span class="w-full" toolTip="عدد التعليقات">{{
          getCommentCount
        }}</span>
        <!-- share count -->
        <span class="w-full" toolTip="عدد المشاركات">519</span>
      </div>

      <div
        class="flex justify-between py-2 border-t dark:border-gray-700 border-slate-300"
      >
        <!-- like button -->

        <button
          @click="likeInc()"
          :class="
            getLikeStatus
              ? 'text-mainColor '
              : 'hover:dark:text-white hover:text-black'
          "
          class="py-2 shadow-none hover:dark:bg-gray-700 hover:bg-light2Color w-full flex items-center justify-center"
        >
          <fs-icon class="text-2xl" :icon="['far', 'thumbs-up']" />
          <span class="text-xs md:text-sm ms-3">أعجبني</span>
        </button>
        <!-- comment button -->
        <button
          @click="opendComment = true"
          class="py-2 shadow-none hover:dark:text-white hover:dark:bg-gray-700 hover:text-black hover:bg-light2Color w-full flex items-center justify-center"
        >
          <fs-icon class="text-2xl" :icon="['far', 'comment']" />
          <span class="text-xs md:text-sm ms-3">تعليق</span>
        </button>
        <!-- share button -->
        <button
          class="py-2 shadow-none hover:dark:text-white hover:dark:bg-gray-700 hover:text-black hover:bg-light2Color w-full flex items-center justify-center"
        >
          <fs-icon class="text-2xl" :icon="['fas', 'share']" />
          <span class="text-xs md:text-sm ms-3">مشاركة</span>
        </button>
      </div>
    </div>
    <!-- end footer -->
    <!-- windows -->

    <div></div>

    <the-window :open="open" @close="open = false" blur ref="window">
      <div v-html="windowVal"></div>
    </the-window>

    <!-- comment side -->
    <the-window
      slide
      title="التعليقات"
      :open="opendComment"
      @close="opendComment = $event"
      def="No comments !"
    >
      <div class="container mx-auto">
        <the-comment
          @reply="selectComment"
          @like="commentLike"
          @delete="commentDelete"
          @update="selectComment"
          v-for="(i, ind) in info.replies"
          :key="ind"
          :rep="i"
          :owner="info.userName"
          :ownerId="info.userId"
          :focused="focusRep != null ? focusRep.commentId : -1"
        ></the-comment>
      </div>

      <template #footer>
        <div class="py-2 px-3 container mx-auto">
          <div class="flex items-center mb-1">
            <div class="flex" v-if="focusRep">
              <span class="text-xs text-gray-600"
                ><span v-if="operationType == 'set'">
                  <span>
                    جاري الرد على
                    <span class="font-bold"
                      >{{ focusRep.userName }}@</span
                    ></span
                  >
                </span>
                <span v-else> جاري التعديل على تعليقك</span>
              </span>
              <button
                class="outline-none text-sm ms-3 hover:text-mainColor"
                @click="reset()"
              >
                إلغاء ؟
              </button>
            </div>
            <button
              toolTip="إرسال"
              @click="sendComment()"
              class="outline-none w-7 h-7 text-mainColor ms-auto relative"
            >
              <fs-icon :icon="['fas', 'paper-plane']"></fs-icon>
            </button>
          </div>

          <textarea
            ref="textBox"
            style="resize: none"
            class="w-full text-xs md:text-sm rounded-full px-3 py-2 md:px-4 md:py-3 h-10 outline-none dark:bg-dark2Color bg-transparent border dark:border-slate-900 border-slate-400"
            placeholder="أكتب تعليق"
          ></textarea>
        </div>
      </template>
    </the-window>
    <!-- end comment side -->
    <!-- end windows -->
  </div>
</template>
<script>
export default {
  props: ["info"],
  data() {
    return {
      open: false,
      opendComment: false,
      windowVal: "",
      repIds: [this.info.postId],
      focusRep: null,
      operationType: "set",
    };
  },
  computed: {
    getCommentCount() {
      return this.$store.getters.getCommentCount(this.info.postId);
    },
    getPostComments() {
      return this.$store.getters.getPostComments(this.info.postId);
    },
    getLikeStatus() {
      return (
        this.info.likes.likedUsers.find(
          (el) => el == this.$store.state.personalData.id
        ) != undefined
      );
    },
    isSaved() {
      return (
        this.$store.state.savedPosts.find(
          (el) => el.postId == this.info.postId
        ) != undefined
      );
    },
  },
  methods: {
    savePopPost() {
      if (!this.isSaved) this.$store.commit("savePost", [this.info.postId]);
      else this.$store.commit("popSavedPost", this.info.postId);
    },
    showImg(e) {
      this.windowVal = `<img src="${e.target.src}" alt="${e.target.alt}" class="object-cover" />`;

      this.open = true;
    },
    likeInc() {
      // if (!this.getLikeStatus) {
      this.$store.commit("toggleLike", [this.info.postId]);
      // } else this.$store.commit("decreaseLike", [this.info.postId]);
    },
    commentLike(e) {
      const ids = [this.info.postId].concat(e);
      // if (!this.getLikeStatus) {
      this.$store.commit("toggleLike", ids);
    },
    selectComment(payload) {
      this.repIds = [this.info.postId].concat(payload.id);
      this.focusRep = this.$store.getters.getCommentPostById(this.repIds);
      this.operationType = payload.type;

      this.$refs.textBox.focus();

      if (payload.type == "update")
        this.$refs.textBox.value = this.focusRep.postText;

      // this.$refs.textBox.addEventListener("keydown", (k) =>
      //   k.key == "Enter" ? this.sendComment() : ""
      // );
    },
    commentDelete(e) {
      const ids = [this.info.postId].concat(e);

      this.$store.commit("deleteComment", ids);

      if (
        this.focusRep &&
        this.focusRep.commentId == Number(ids.slice(-1).join())
      )
        this.reset();
    },

    reset() {
      this.repIds = [this.info.postId];
      this.focusRep = null;
      this.focused = null;
      this.operationType = "set";
      this.$refs.textBox.value = null;
    },
    sendComment() {
      const commentText = `${this.$refs.textBox.value.trim()}`;
      if (commentText != "") {
        this.$store.dispatch("setUpdateComment", {
          text: commentText,
          ids: this.repIds ? this.repIds : [this.info.postId],
          type: this.operationType,
        });
        this.reset();
      }
    },
  },
  watch: {
    // focusRep(val) {
    //   if (val) {
    //   }
    // },
  },
};
</script>
<style>
textarea::-webkit-scrollbar {
  width: 0;
}
</style>
