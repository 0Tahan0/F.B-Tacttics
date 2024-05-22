import User from "./objects/user";
import img1 from "@/assets/images/1.jpg";
import img2 from "@/assets/images/2.jpg";
import img3 from "@/assets/images/3.jpg";
import img4 from "@/assets/images/4.jpg";
import img5 from "@/assets/images/5.jpg";
import person from "@/assets/images/person.png";
import notice from "./objects/notice";
// import { createCookie } from "../cookies";

// import img6 from "@/assets/images/balls.jpg";
export default {
  namespaced: true,
  state: {
    owner: 1234512343,
    users: [
      {
        id: 1234512343,
        name: "Tahan",
        img: img1,
        email: "wwwTahan@gmail.com",
        password: "tahan12345",
        type: "admin",
        follows: [1234512340],
        followers: [1234512342, 1234512344],
        savedPosts: [],
        notifications: [],
        commentsCount: 1,
        postsCount: 1,
        likesCount: 1,
      },
      {
        id: 1234512340,
        name: "عبدالله",
        img: img2,
        email: "abod@gmail.com",
        password: "abod12345",
        type: "user",
        follows: [],
        followers: [1234512342, 1234512341, 1234512343],
        savedPosts: [],
        notifications: [],
        commentsCount: 0,
        postsCount: 1,
        likesCount: 0,
      },
      {
        id: 1234512341,
        name: "amar",
        img: img3,
        email: "amar@gmail.com",
        password: "amar12345",
        type: "user",
        follows: [1234512342, 1234512340],
        followers: [1234512342, 1234512344],
        savedPosts: [],
        notifications: [],
        commentsCount: 1,
        postsCount: 0,
        likesCount: 0,
      },
      {
        id: 1234512344,
        name: "علي",
        img: img4,
        email: "ali@gmail.com",
        password: "ali12345",
        type: "admin",
        follows: [1234512342, 1234512343, 1234512341],
        followers: [1234512341],
        savedPosts: [],
        notifications: [],
        commentsCount: 2,
        postsCount: 0,
        likesCount: 0,
      },
      {
        id: 1234512342,
        name: "Khalid_1992",
        img: img5,
        email: "Khalid@gmail.com",
        password: "Khalid12345",
        type: "user",
        follows: [1234512341, 1234512340, 1234512343],
        followers: [1234512344, 1234512341],
        savedPosts: [],
        notifications: [],
        commentsCount: 0,
        postsCount: 0,
        likesCount: 0,
      },
    ],
  },
  getters: {
    getUserById: (state) => (id) => {
      return state.users.find((el) => el.id == id);
    },
  },
  mutations: {
    deleteUser(state, id) {
      state.users = state.users.filter((el) => el.id != id);
    },
    updateUserInfo(state, payload) {
      const selectedUser = this.getters["users/getUserById"](payload.id);
      Object.keys(payload.info).forEach(
        (el) => (selectedUser[el] = payload[el])
      );
    },
    createUser(state, info) {
      const user = new User();
      user.name = info.name;
      user.id = Date.now();
      user.img = person;
      user.email = info.email;
      user.password = info.password;
      
      state.users.push(user);
    },
    follow(state, id) {
      this.state.personalData.follows.push(id);
    },
    unFollow(state, id) {
      const follows = this.state.personalData.follows;
      this.state.personalData.follows = follows.filter((el) => el != id);
    },
    createNotice(state, payload) {
      const newNotice = new notice();
      newNotice.title = payload.title;
      newNotice.type = payload.type;
      newNotice.content = payload.content;
      newNotice.sender = payload.sender;
      newNotice.senderID = payload.targetUser;

      const targetUser = this.getters["users/getUserById"](payload.targetUser);

      targetUser.notifications.push(newNotice);
    },
  },
  actions: {
    follow(context, payload) {
      context.commit("follow", payload.id);
      context.commit("createNotice", payload.notice);
    },
  },
};
