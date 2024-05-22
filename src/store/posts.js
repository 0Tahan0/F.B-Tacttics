import img1 from "@/assets/images/1.jpg";
import img2 from "@/assets/images/2.jpg";
import img3 from "@/assets/images/3.jpg";
import img4 from "@/assets/images/4.jpg";
import img5 from "@/assets/images/5.jpg";
import video from "@/assets/images/forTest.mp4";

import post from "./objects/post";

import comment from "./objects/comment";

export default {
  namespaced: true,
  state: {
    posts: [
      {
        userId: 1234512340,
        postId: 1234567894,
        // userName: "عبدالله",
        // userImg: img1,
        date: "2024/3/23",
        postText:
          "وكوكب السعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل",

        postMedia: {
          images: [img2, img3, img1],
          videos: [],
        },
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
            // userName: "Tahan",
            // userImg: img6,
            date: "2024/3/23",
            postText: `
            <button class="bg-red-500">click</button>
            https://www.google.com  رابط`,

            postMedia: {
              images: [img1, img3, img2],
              videos: [],
            },
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
            // userName: "amar",
            // userImg: img2,
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
                // userName: "عبدالله",
                // userImg: img1,
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
                    // userName: "amar",
                    // userImg: img2,
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
            // userName: "علي",
            // userImg: img6,
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
                // userName: "Khalid_1992",
                // userImg: img3,
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
        // userName: "Tahan",
        // userImg: img6,
        date: "2024/3/23",
        postText:
          "  وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ ",

        postMedia: {
          images: [img4, img5],
          videos: [video],
        },
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
            // userName: "علي",
            // userImg: img6,
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
                // userName: "عبدالله",
                // userImg: img1,
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
                // userName: "Khalid_1992",
                // userImg: img3,
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
  },
  getters: {
    getAllPosts(state) {
      return state.posts;
    },
    getUserPosts: (state) => (id) => {
      return state.posts.filter((ps) => ps.userId == id);
    },
    // getSavedPosts(state) {
    //   // let _savedPosts = [];
    //   // this.state.personalData.savedPosts.forEach((el) => {
    //   //   const ps = state.posts.find((p) => p.postId == el);
    //   //   if (ps) _savedPosts.push(ps);
    //   // });
    //   // return _savedPosts;
    //   console.log(this.state.personalData.savedPosts);
    //   return state.posts;
    // },
    getCommentPostById: (state) => (ids) => {
      if (ids.length <= 1) return state.posts.find((el) => el.postId == ids[0]);
      else {
        const parent = state.posts.find((el) => el.postId == ids[0]);
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
  },
  mutations: {
    toggleLike(state, ids) {
      const likes = this.getters["posts/getCommentPostById"](ids).likes;
      const user = this.state.personalData;
      if (likes.likedUsers.find((el) => el == user.id) != undefined) {
        likes.likesCount--;
        likes.likedUsers = likes.likedUsers.filter((el) => el != user.id);
        user.likesCount -= 1;
      } else {
        likes.likesCount++;
        likes.likedUsers.push(user.id);
        user.likesCount += 1;
      }
    },
    deleteComment(state, ids) {
      this.getters["posts/getCommentPostById"](ids.slice(0, -1)).deleteComment(
        this.getters["posts/getCommentPostById"](ids).commentId
      );
      const owner = this.state.personalData;
      owner.commentsCount -= 1;
    },
    setComment(state, payload) {
      const d = new Date();

      const parent = this.getters["posts/getCommentPostById"](payload.ids);
      const owner = this.state.personalData;
      const newComment = new comment();
      newComment.userId = owner.id;
      newComment.commentId = Date.now();
      newComment.userName = owner.userName;
      newComment.userImg = owner.userImg;
      newComment.date =
        d.getUTCFullYear() + "/" + (d.getUTCMonth() + 1) + "/" + d.getUTCDate();
      newComment.postText = payload.text;
      newComment.type = payload.ids.length > 1 ? "reply" : "comment";
      owner.commentsCount =
        payload.ids.length > 1 ? owner.commentsCount : owner.commentsCount + 1;
      parent.replies.push(newComment);
    },
    updateComment(state, payload) {
      this.getters["posts/getCommentPostById"](payload.ids).postText =
        payload.text;
      this.getters["posts/getCommentPostById"](payload.ids).updated = true;
    },
    savePost(state, id) {
      this.state.personalData.savedPosts.push(id);

      // state.savePost.concat(id);
      // [state.savedPosts].push(id);

      // state.savedPosts.push(id);
    },
    popSavedPost(state, id) {
      this.state.personalData.savedPosts =
        this.state.personalData.savedPosts.filter((el) => el != id);
    },
    createPost(state, payload) {
      const d = new Date();
      const owner = this.state.personalData;
      const newPost = new post();
      newPost.userId = owner.id;
      newPost.postId = Date.now();
      newPost.userName = owner.name;
      newPost.userImg = owner.img;
      newPost.date =
        d.getUTCFullYear() + "/" + (d.getUTCMonth() + 1) + "/" + d.getUTCDate();
      newPost.postText = payload.txt;
      // newPost.postImg = payload.img;
      newPost.postMedia = payload.media;
      owner.postsCount += 1;
      // owner.posts.push(newPost);
      state.posts.push(newPost);
    },
    deletePost(state, id) {
      const owner = this.state.personalData;
      state.posts = state.posts.filter((el) => el.postId != id);
      owner.postsCount -= 1;
    },
  },
  actions: {
    setUpdateComment(context, payload) {
      if (payload.type == "set") context.commit("setComment", payload);
      else if (payload.type == "update")
        context.commit("updateComment", payload);
    },
  },
};
