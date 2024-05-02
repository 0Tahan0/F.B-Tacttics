// import { createApp } from "vue";
import { createStore } from "vuex";
import img1 from "@/assets/images/1.jpg";
import img2 from "@/assets/images/2.jpg";
import img3 from "@/assets/images/3.jpg";
import img4 from "@/assets/images/4.jpg";
import img5 from "@/assets/images/5.jpg";
import img6 from "@/assets/images/balls.jpg";
// Create a new store instance.
const store = createStore({
  state: {
    personalData: {
      id: 1234512343,
      name: "Tahan",
      email: "wwwTahan@gmail.com",
      img: img6,
    },
    info: [
      {
        userId: 1234512340,
        postId: 1234567894,
        userName: "عبدالله",
        userImg: img1,
        date: "2024/3/23",
        postText:
          "وكوكب السعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل",
        postImg: [img2, img3, img1],
        likes: {
          likesCount: 53,
          likedUsers: [1234512340, 1234512341, 1234512343],
        },
        deleteComment: function (id) {
          this.replies = this.replies.filter((el) => el.commentId != id);
        },
        replies: [
          {
            userId: 1234512343,
            commentId: 123456789411,
            userName: "Tahan",
            userImg: img1,
            date: "2024/3/23",
            postText: `
            <button class="bg-red-500">click</button>
            https://www.google.com  رابط`,

            postImg: [img2, img3, img1],
            likes: {
              likesCount: 53,
              likedUsers: [1234512340, 1234512341, 1234512343],
            },
            deleteComment: function (id) {
              this.replies = this.replies.filter((el) => el.commentId != id);
            },
            replies: [],
          },
          {
            userId: 1234512341,
            commentId: 1234567895,
            userName: "amar",
            userImg: img2,
            date: "2024/3/27",
            postText: "هذا رائع",
            likes: {
              likesCount: 7,
              likedUsers: [1234512340, 1234512341],
            },
            type: "comment",
            deleteComment: function (id) {
              this.replies = this.replies.filter((el) => el.commentId != id);
            },
            replies: [
              {
                userId: 1234512340,
                commentId: 1234567898,
                userName: "عبدالله",
                userImg: img1,
                date: "2024/3/28",
                postText: "شكرا",
                likes: {
                  likesCount: 2,
                  likedUsers: [1234512340, 1234512341],
                },
                type: "reply",
                deleteComment: function (id) {
                  this.replies = this.replies.filter(
                    (el) => el.commentId != id
                  );
                },
                replies: [
                  {
                    userId: 1234512341,
                    commentId: 1234567899,
                    userName: "amar",
                    userImg: img2,
                    date: "2024/3/27",
                    postText: "العفو",
                    likes: {
                      likesCount: 1,
                      likedUsers: [1234512340, 1234512341],
                    },
                    type: "reply",
                    deleteComment: function (id) {
                      this.replies = this.replies.filter(
                        (el) => el.commentId != id
                      );
                    },
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            userId: 1234512344,
            commentId: 12345678999,
            userName: "علي",
            userImg: img6,
            date: "2024/3/28",
            postText: "نعم هذا رائع",
            likes: {
              likesCount: 3,
              likedUsers: [1234512340, 1234512341, 1234512343],
            },
            type: "comment",
            deleteComment: function (id) {
              this.replies = this.replies.filter((el) => el.commentId != id);
            },
            replies: [
              {
                userId: 1234512342,
                commentId: 1234567897,
                userName: "Khalid_1992",
                userImg: img3,
                date: "2024/3/27",
                postText: "جيد",
                likes: {
                  likesCount: 6,
                  likedUsers: [1234512340, 1234512341],
                },
                type: "reply",
                deleteComment: function (id) {
                  this.replies = this.replies.filter(
                    (el) => el.commentId != id
                  );
                },
                replies: [],
              },
            ],
          },
        ],
      },
      {
        userId: 1234512343,
        postId: 1234567893,
        userName: "Tahan",
        userImg: img6,
        date: "2024/3/23",
        postText:
          "  وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ ",
        postImg: [img5, img4],
        likes: {
          likesCount: 22,
          likedUsers: [1234512340, 1234512341],
        },
        deleteComment: function (id) {
          this.replies = this.replies.filter((el) => el.commentId != id);
        },
        replies: [
          {
            userId: 1234512344,
            commentId: 1234567891,
            userName: "علي",
            userImg: img6,
            date: "2024/3/27",
            postText: "هذا رائع",
            likes: {
              likesCount: 3,
              likedUsers: [1234512340, 1234512341],
            },
            type: "comment",
            deleteComment: function (id) {
              this.replies = this.replies.filter((el) => el.commentId != id);
            },
            replies: [
              {
                userId: 1234512340,
                commentId: 1234567890,
                userName: "عبدالله",
                userImg: img1,
                date: "2024/3/28",
                postText: "شكرا",
                likes: {
                  likesCount: 2,
                  likedUsers: [1234512340, 1234512341, 1234512343],
                },
                type: "reply",
                deleteComment: function (id) {
                  this.replies = this.replies.filter(
                    (el) => el.commentId != id
                  );
                },
                replies: [],
              },
              {
                userId: 1234512342,
                commentId: 1234567892,
                userName: "Khalid_1992",
                userImg: img3,
                date: "2024/3/27",
                postText: "نعم مذهل",
                likes: {
                  likesCount: 1,
                  likedUsers: [1234512340, 1234512341],
                },
                type: "reply",
                deleteComment: function (id) {
                  this.replies = this.replies.filter(
                    (el) => el.commentId != id
                  );
                },
                replies: [],
              },
            ],
          },
        ],
      },
    ],
    savedPosts: [],
  },
  getters: {
    getPostData: (state) => (id) => {
      const post = state.info.find((p) => p.postId == id);
      return {
        postId: post.postId,
        userId: post.userId,
        userName: post.userName,
        userImg: post.userImg,
        postText: post.postText,
        postImg: post.postImg,
        date: post.date,
        likes: post.likes,
      };
    },
    getPostComments: (state) => (id) => {
      return state.info.find((p) => p.postId == id).replies;
      // return {
      //   commentsId: comments.commentsId,
      //   userId: comments.userId,
      //   userName: comments.userName,
      //   userImg: comments.userImg,
      //   postText: comments.postText,
      //   postImg: comments.postImg,
      //   date: comments.date,
      //   likes: comments.likes,
      // };
    },
    getCommentCount: (state) => (id) => {
      return state.info.find((p) => p.postId == id).replies.length;
    },

    getCommentPostById: (state) => (ids) => {
      if (ids.length <= 1) return state.info.find((el) => el.postId == ids[0]);
      else {
        const parent = state.info.find((el) => el.postId == ids[0]);
        const children = ids.slice(1, ids.length);
        try {
          return loop(parent, children);
        } catch {
          return -1;
        }
      }

      function loop(parent, children) {
        const result = parent.replies.find((el) => el.commentId == children[0]);
        if (children.length > 1)
          return loop(result, children.slice(1, children.length));
        return result;
      }
    },
    getSavedPosts(state) {
      let _savedPosts = [];
      state.savedPosts.forEach((el) => {
        const ps = state.info.find((p) => p.postId == el);
        if (ps) _savedPosts.push(ps);
      });
      return _savedPosts;
    },
    getSavedPostsLength(state){
      return state.savedPosts.length
    },
    getOwnerPosts(state) {
      return state.info.filter((el) => el.userId == state.personalData.id);
    },
  },
  mutations: {
    toggleLike(state, ids) {
      const likes = this.getters.getCommentPostById(ids).likes;
      const userID = state.personalData.id;
      if (likes.likedUsers.find((el) => el == userID) != undefined) {
        likes.likesCount--;
        likes.likedUsers = likes.likedUsers.filter((el) => el != userID);
      } else {
        likes.likesCount++;
        likes.likedUsers.push(userID);
      }
    },
    deleteComment(state, ids) {
      this.getters
        .getCommentPostById(ids.slice(0, -1))
        .deleteComment(this.getters.getCommentPostById(ids).commentId);
    },
    setComment(state, payload) {
      const parent = this.getters.getCommentPostById(payload.ids);
      const owner = state.personalData;

      parent.replies.push({
        userId: owner.id,
        commentId: Date.now(),
        userName: owner.name,
        userImg: owner.img,
        date: "now",
        postText: payload.text,
        likes: {
          likesCount: 0,
          likedUsers: [],
        },
        deleteComment: function (id) {
          // console.log(id);
          this.replies = this.replies.filter((el) => el.commentId != id);
        },
        replies: [],
      });
    },
    updateComment(state, payload) {
      this.getters.getCommentPostById(payload.ids).postText = payload.text;
      this.getters.getCommentPostById(payload.ids).updated = true;
    },
    savePost(state, id) {
      state.savedPosts.push(id);
    },
    popSavedPost(state, id) {
      state.savedPosts = state.savedPosts.filter((el) => el != id);
    },

    createPost(state, txt) {
      const owner = state.personalData;
      this.state.info.push({
        userId: owner.id,
        postId: Date.now(),
        userName: owner.name,
        userImg: owner.img,
        date: "now",
        postText: txt,
        likes: {
          likesCount: 0,
          likedUsers: [],
        },
        deleteComment: function (id) {
          this.replies = this.replies.filter((el) => el.commentId != id);
        },
        replies: [],
      });
    },
    deletePost(state, id) {
      state.info = state.info.filter((el) => el.postId != id);
    },
  },
  actions: {
    setUpdateComment(context, payload) {
      if (payload.type == "set") context.commit("setComment", payload);
      else if (payload.type == "update")
        context.commit("updateComment", payload);
    },
  },
  modules: {},
});
export default store;
