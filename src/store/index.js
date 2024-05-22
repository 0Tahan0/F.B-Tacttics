// import { createApp } from "vue";

// ----------------
import { createStore } from "vuex";
import posts from "./posts";
import users from "./users";

// import img6 from "@/assets/images/balls.jpg";
// Create a new store instance.

const store = createStore({
  
  state: {
    personalData: users.state.users.find((el) => el.id == users.state.owner),
  },
  modules: {
    posts: posts,
    users: users,
  },
  namespaced: true,
});

export default store;
