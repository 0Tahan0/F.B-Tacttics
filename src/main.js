import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/main.css";
import "./assets/input.css";
// import "./assets/output.css";

import axios from "axios";
import VueAxios from "vue-axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(...[fas, far, fab]);

// ##################
const app = createApp(App);

// ##################

// -------------------------------------

import theNav from "@/components/layout/theNav.vue";
app.component("the-nav", theNav);
import slideSide from "@/components/layout/slideSide.vue";
app.component("slide-side", slideSide);
import theLogo from "@/components/layout/theLogo.vue";
app.component("the-logo", theLogo);

import baseCard from "@/components/UI/baseCard.vue";
app.component("base-card", baseCard);

import baseTitle from "@/components/UI/baseTitle.vue";
app.component("base-title", baseTitle);

import baseButton from "@/components/UI/baseButton.vue";
app.component("base-button", baseButton);

import switchButton from "@/components/UI/switchButton.vue";
app.component("switch-button", switchButton);

import baseInput from "@/components/UI/baseInput.vue";
app.component("base-input", baseInput);
// optionSelect
import baseSelect from "@/components/UI/baseSelect.vue";
app.component("base-select", baseSelect);

import theLink from "@/components/UI/theLink.vue";
app.component("the-link", theLink);

import selectItem from "@/components/UI/selectItem.vue";
app.component("select-item", selectItem);
import theMenu from "@/components/UI/theMenu.vue";
app.component("the-menu", theMenu);

// templates

import theArticle from "@/components/templates/theArticle.vue";
app.component("the-article", theArticle);

import theIcon from "@/components/templates/theIcon.vue";
app.component("the-icon", theIcon);

import thePost from "@/components/artticlesComp/thePost.vue";
app.component("the-post", thePost);

import theSwiper from "@/components/templates/theSwiper.vue";
app.component("the-swiper", theSwiper);
import theCarousel from "@/components/templates/theCarousel.vue";
app.component("the-carousel", theCarousel);

import theWindow from "@/components/templates/theWindow.vue";
app.component("the-window", theWindow);

import theComment from "@/components/artticlesComp/theComment.vue";
app.component("the-comment", theComment);

app.component("fs-icon", FontAwesomeIcon);
// --------------------------------
import allArticles from "./components/artticlesComp/articlesSections/allArticles.vue";
app.component("all-articles", allArticles);
import myArticles from "./components/artticlesComp/articlesSections/myArticles.vue";
app.component("my-articles", myArticles);
import savedArticles from "./components/artticlesComp/articlesSections/savedArticles.vue";
app.component("saved-articles", savedArticles);
// --------------------------------
app.use(VueAxios, axios);
app.use(store);
app.use(router);
app.mount("#app");

// createApp(App).mount('#app')
