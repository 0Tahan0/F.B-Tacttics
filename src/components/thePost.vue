<template>
  <base-card
    class="my-2 h-fit bg-light2Color dark:bg-dark2Color md:px-4 px-2 select-none"
  >
    <!-- header -->
    <div class="flex items-center py-2">
      <div
        class="w-12 h-12 rounded-full shadow-md shadow-black"
        :toolTip="userData.name"
        :class="isAdmain ? ' relative' : ''"
      >
        <img
          :src="userData.img"
          :alt="`${userData.name} photo`"
          class="rounded-full w-full h-full object-cover cursor-pointer"
          @click="showImg($event)"
        />
        <fs-icon
          v-if="isAdmain"
          :icon="['fas', 'crown']"
          class="bg-yellow-500 text-white rounded-full p-0.5 text-xs absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
        ></fs-icon>
      </div>
      <div class="mx-3">
        <router-link
          :to="{
            path: isOwner ? `profile` : `userProfile`,

            query: {
              // username: info.userName,
              // id: info.userId,
              username: userData.name,
              id: userData.id,
            },
          }"
          class="text-sm mb-2 hover:text-mainColor"
          >{{ userData.name }}</router-link
        >
        <p class="text-slate-400 text-xs">
          {{ info.date }}
        </p>
      </div>
      <div class="ms-auto flex items-center">
        <span
          :tooltip="isSaved ? 'إلغاء الحفظ' : 'حفظ'"
          toolTipRight
          class="cursor-pointer transition-colors hover:text-mainColor"
          :class="isSaved ? 'text-mainColor' : ''"
          @click="savePopPost()"
        >
          <span v-if="isSaved" class="text-xs mx-1">تم الحفظ</span>
          <fs-icon :icon="[isSaved ? 'fas' : 'far', 'bookmark']"
        /></span>

        <the-menu right>
          <template #button>
            <button
              class="editBtn text-lg text-center p-1 h-fit mt-2 ms-2 relative"
            >
              <fs-icon :icon="['fas', 'ellipsis']" />
            </button>
          </template>
          <button
            v-if="isOwner"
            @click="removingWindow = true"
            class="hover:dark:bg-dark3Color hover:bg-light2Color flex text-xs items-center w-full p-2 rounded-md"
          >
            <fs-icon :icon="['fas', 'trash']"></fs-icon>
            <span class="ms-3">حذف</span>

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
                    @click="delPost()"
                    >نعم</base-button
                  >
                </div>
              </div>
            </the-window>
          </button>

          <button
            class="hover:dark:bg-dark3Color hover:bg-light2Color flex text-xs items-center w-full p-2 rounded-md"
          >
            <fs-icon :icon="['fas', 'flag']"></fs-icon>
            <span class="ms-3">تقرير</span>
          </button>
        </the-menu>
      </div>
    </div>
    <!-- end header -->
    <!-- content -->
    <div class="flex flex-col">
      <the-article
        @contextmenu.prevent="copyText()"
        maxChar="500"
        class="py-3 text-xs"
        :text="info.postText"
      >
      </the-article>
      <!-- media -->
      <div class="">
        <!-- images -->
        <div class="flex flex-wrap">
          <img
            loading="lazy"
            class="object-cover max-h-52 w-72 fade m-0.5 flex-grow cursor-pointer"
            v-for="(im, ind) in info.postMedia.images"
            :key="ind"
            :src="im"
            @click="showImg($event)"
          />
        </div>
        <!-- videos -->
        <div class="flex flex-wrap">
          <!-- @click="showImg($event)" -->
          <the-video
            class="flex-grow max-h-96 w-72 fade m-0.5 cursor-pointer"
            loading="lazy"
            v-for="(vd, ind) in info.postMedia.videos"
            :key="ind"
            :src="vd"
          ></the-video>
        </div>
      </div>
      <!-- end media -->
    </div>
    <!-- end content -->
    <!-- footer -->
    <div class="">
      <div class="flex justify-between text-center py-2">
        <!-- likes count -->
        <span class="w-full" toolTip="عدد الإعجابات">{{
          info.likes.likesCount
        }}</span>
        <!-- comments count -->
        <span class="w-full" toolTip="عدد التعليقات">{{
          info.replies.length
        }}</span>
        <!-- share count -->
        <!-- <span class="w-full" toolTip="عدد المشاركات">0</span> -->
      </div>

      <div
        class="flex justify-between border-t dark:border-gray-700 border-slate-300 text-xs"
      >
        <!-- like button -->

        <base-button
          @click="likeInc()"
          :class="getLikeStatus ? 'text-mainColor ' : ''"
          class="py-2 shadow-none hover:dark:bg-dark3Color hover:bg-light3Color w-full flex items-center justify-center"
        >
          <fs-icon class="text-xl" :icon="['far', 'thumbs-up']" />
          <span class="text-xs ms-3">أعجبني</span>
        </base-button>
        <!-- comment button -->
        <base-button
          @click="opendComment = true"
          class="py-2 shadow-none hover:dark:bg-dark3Color hover:text-black hover:bg-light3Color w-full flex items-center justify-center"
        >
          <fs-icon class="text-xl" :icon="['far', 'comment']" />
          <span class="text-xs ms-3">تعليق</span>
        </base-button>
        <!-- share button -->
        <!-- <base-button
          class="py-2 shadow-none hover:dark:bg-dark3Color hover:text-black hover:bg-light3Color w-full flex items-center justify-center"
        >
          <fs-icon class="text-2xl" :icon="['fas', 'share']" />
          <span class="text-xs md:text-sm ms-3">مشاركة</span>
        </base-button> -->
      </div>
    </div>
    <!-- end footer -->
    <!-- windows -->

    <div></div>

    <!-- comment side -->
    <the-window
      slide
      title="التعليقات"
      :open="opendComment"
      @close="opendComment = $event"
      def="لا يوجد تعليقات !"
    >
      <div
        class="container mx-auto flex flex-col-reverse"
        v-if="info.replies.length > 0"
      >
        <the-comment
          @reply="selectComment"
          @like="commentLike"
          @delete="commentDelete"
          @update="selectComment"
          v-for="(i, ind) in info.replies"
          :key="ind"
          :rep="i"
          :owner="userData.name"
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
    <the-alert @close="alert.state = $event" :open="alert.state">{{
      alert.message
    }}</the-alert>
    <the-viewer :open="viewer" @close="viewer = false">
      <div v-html="viewerContent"></div>
    </the-viewer>
  </base-card>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  props: ["info"],
  data() {
    return {
      removingWindow: false,
      opendComment: false,
      viewer: false,
      viewerContent: "",
      repIds: [this.info.postId],
      focusRep: null,
      operationType: "set",
      optionsMenu: {
        state: false,
        point: null,
      },
      alert: {
        state: false,
        message: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      getCommentPostById: "posts/getCommentPostById",
      getUserById: "users/getUserById",
    }),
    // ...mapGetters("users", ["getUserById"]),
    ownerData() {
      return this.$store.state.personalData;
    },

    userData() {
      return this.getUserById(this.info.userId);
    },

    getLikeStatus() {
      return (
        this.info.likes.likedUsers.find((el) => el == this.ownerData.id) !=
        undefined
      );
    },
    isAdmain() {
      return this.userData.type == "admin";
    },
    isSaved() {
      return (
        this.ownerData.savedPosts.find((el) => el == this.info.postId) !=
        undefined
      );
    },
    isOwner() {
      return this.info.userId == this.ownerData.id;
    },
  },
  methods: {
    ...mapMutations("posts", [
      "toggleLike",
      "savePost",
      "popSavedPost",
      "deleteComment",
      "deletePost",
    ]),
    ...mapActions("posts", ["setUpdateComment"]),
    savePopPost() {
      if (!this.isSaved) this.savePost(this.info.postId);
      else this.popSavedPost(this.info.postId);
      // this.$store.commit("savePost", [this.info.postId]);
      // else this.$store.commit("popSavedPost", this.info.postId);
    },

    likeInc() {
      this.toggleLike([this.info.postId]);
      // this.$store.commit("toggleLike", [this.info.postId]);
    },
    commentLike(e) {
      const ids = [this.info.postId].concat(e);

      this.toggleLike(ids);
      // this.$store.commit("toggleLike", ids);
    },
    selectComment(payload) {
      this.repIds = [this.info.postId].concat(payload.id);
      // this.focusRep = this.$store.getters.getCommentPostById(this.repIds);
      this.focusRep = this.getCommentPostById(this.repIds);
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
      this.deleteComment(ids);
      // this.$store.commit("deleteComment", ids);

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
        this.setUpdateComment({
          text: commentText,
          ids: this.repIds ? this.repIds : [this.info.postId],
          type: this.operationType,
        });
        // this.$store.dispatch("setUpdateComment", {
        //   text: commentText,
        //   ids: this.repIds ? this.repIds : [this.info.postId],
        //   type: this.operationType,
        // });
        this.reset();
      }
    },
    delPost() {
      this.removingWindow = false;
      this.deletePost(this.info.postId);
      // this.$store.commit("deletePost", this.info.postId);
    },
    showAlert(msg) {
      this.alert.state = true;
      this.alert.message = msg;
    },
    copyText() {
      // console.log(navigator.clipboard);
      //this.showAlert('تم النسخ إلى الحافظة');
    },
    showImg(e) {
      this.viewerContent = e.target.outerHTML;
      this.viewer = true;
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
