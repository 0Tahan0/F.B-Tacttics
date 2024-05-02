<template>
  <div class="home fade">
    <!-- nav -->
    <div id="nv" class="shadow-lg">
      <the-nav :hasAccount="hasAccount" />
      <div
        class="text-xs border-gray-300 dark:border-gray-700 bg-mainColor text-white font-medium"
      >
        <div
          class="hidden md:flex flex-wrap container mx-auto md:justify-start justify-evenly"
        >
          <a
            v-for="(tap, ind) in taps"
            :key="ind"
            :href="`#${tap.link}`"
            class="p-2 py-3 hover:bg-white hover:text-mainColor transition-colors duration-300"
            >{{ tap.name }}
          </a>
          <a
            href="#famousArticles"
            class="p-2 py-3 hover:bg-white hover:text-mainColor transition-colors duration-300"
            >المقالات
          </a>
          <a
            href="#contactUs"
            class="p-2 py-3 hover:bg-white hover:text-mainColor transition-colors duration-300"
            >تواصل معنا</a
          >
        </div>
        <the-menu class="md:hidden">
          <template #button>
            <base-button class="shadow-none"
              ><fs-icon :icon="['fas', 'list']"
            /></base-button>
          </template>
          <div class="w-56 flex-col flex">
            <a
              v-for="(tap, ind) in taps"
              :key="ind"
              :href="`#${tap.link}`"
              class="p-2 py-3 hover:bg-white hover:text-mainColor transition-colors duration-300"
              >{{ tap.name }}
            </a>
            <a
              href="#famousArticles"
              class="p-2 py-3 hover:bg-white hover:text-mainColor transition-colors duration-300"
              >المقالات
            </a>
            <div class="border-t flex flex-col">
              <a
                href="#contactUs"
                class="p-2 py-3 hover:bg-white hover:text-mainColor transition-colors duration-300"
                >تواصل معنا</a
              >
              <base-button
                v-if="!hasAccount"
                rounded
                class="shadow-none before:bg-mainColor"
                shape="slide"
                ><router-link :to="{ name: 'تسجيل الدخول' }"
                  >تسجيل الدخول</router-link
                ></base-button
              >
            </div>
          </div>
        </the-menu>
      </div>
    </div>
    <!-- end nav -->
    <!-- intro -->
    <div ref="intro" class="shadow">
      <the-carousel class="h-full" autoPlay :time="4000">
        <div
          carousel-item
          class="flex md:flex-row flex-col-reverse justify-center items-center"
        >
          <p class="p-2 text-center md:text-right">
            كلام فاضي كلام فاضي كلام فاضي كلام فاضي كلام فاضي كلام فاضي كلام
            فاضي كلام فاضي كلام فاضي
          </p>
          <div class="h-full min-h-full w-1/2">
            <img
              src="@/assets/images/F.B.png"
              alt="photo"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
        <div
          carousel-item
          class="flex md:flex-row flex-col-reverse justify-center items-center"
        >
          <p class="p-2 text-center md:text-right">
            كلام فاضي كلام فاضي كلام فاضي كلام فاضي كلام فاضي كلام فاضي كلام
            فاضي كلام فاضي كلام فاضي
          </p>
          <div class="h-full min-h-full w-1/2">
            <img
              src="@/assets/images/playerOne.png"
              alt="photo"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
        <div
          carousel-item
          class="flex md:flex-row flex-col-reverse justify-center items-center"
        >
          <p class="p-2 text-center md:text-right">
            كلام فاضي كلام فاضي كلام فاضي كلام فاضي كلام فاضي كلام فاضي كلام
            فاضي كلام فاضي كلام فاضي
          </p>
          <div class="min-h-full h-full w-1/2">
            <img
              src="@/assets/images/playerTow.png"
              alt="photo"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
      </the-carousel>
    </div>
    <!-- end intro -->
    <!-- content -->
    <div>
      <base-card class="container mx-auto mt-10">
        <div class="mt-10" v-for="(i, ind) in taps" :key="ind">
          <base-title :id="i.link"> #{{ i.name }} </base-title>
          <base-card>
            <the-article maxChar="500" :text="i.txt"></the-article>
          </base-card>
        </div>
        <base-button
          rounded
          shape="slide"
          slideSide="left"
          class="before:bg-mainColor ms-auto block"
        >
          <router-link to="/articles"
            >عرض المزيد من المقالات</router-link
          ></base-button
        >
      </base-card>
      <div>
        <div class="bg-mainColor py-5" id="famousArticles">
          <base-title class="text-white text-center">أشهر المقالات</base-title>
        </div>
        <base-card class="container mx-auto mt-10">
          <!-- <base-title>أشهر المقالات</base-title> -->
          <the-swiper class="" style="height: 600px">
            <div
              swiper-item
              v-for="i in getPosts"
              :key="i.postId"
              class="pointer-events-none select-none"
              toolTip="للقراءة فقط"
            >
              <base-card class="w-fit"
                ><base-title
                  >عدد تفاعلات {{ i.likes.likesCount }}</base-title
                ></base-card
              >
              <the-post :info="i"></the-post>
            </div>
            <div
              swiper-item
              v-for="i in getPosts"
              :key="i.postId"
              class="pointer-events-none select-none"
            >
              <base-card class="w-fit"
                ><base-title
                  >عدد تفاعلات {{ i.likes.likesCount }}</base-title
                ></base-card
              >
              <the-post :info="i"></the-post>
            </div>
          </the-swiper>
          <base-button
            rounded
            shape="slide"
            slideSide="left"
            class="before:bg-mainColor ms-auto block"
          >
            <router-link to="/articles"
              >عرض المزيد من المقالات</router-link
            ></base-button
          >
        </base-card>
      </div>
    </div>

    <!-- end content -->
    <!-- footer -->
    <section
      class="dark:bg-dark2Color bg-light2Color mt-10 h-screen"
      id="contactUs"
    >
      <div class="bg-mainColor py-5">
        <base-title class="text-white text-center">تواصل معنا</base-title>
      </div>

      <div class="container mx-auto p-2">
        <div class="grid items-center grid-cols-2">
          <div class="my-2 col-span-2 md:col-span-1 text-center md:text-start">
            <p class="text-sm md:text-md">
              يمكنك التواصل معنا عبر البريد
              <the-link link="#">FBT@gmail.com</the-link>
            </p>
          </div>
          <div
            class="text-2xl my-2 col-span-2 md:col-span-1 justify-center md:justify-end flex"
          >
            <a href="#">
              <the-icon
                :icon="['fab', 'facebook']"
                class="bg-facebook"
                toolTip="facebook"
              />
            </a>
            <a href="#">
              <the-icon
                :icon="['fab', 'instagram']"
                class="bg-instagram"
                toolTip="instagram"
              />
            </a>
            <a href="#">
              <the-icon
                :icon="['fab', 'google']"
                class="bg-google"
                toolTip="google"
              />
            </a>
          </div>
        </div>
        <p
          class="pointer-events-none select-none text-center text-xs md:text-sm my-2 dark:text-gray-300 text-gray-600 font-medium"
        >
          Copyright 2024 &copy;
        </p>
      </div>
    </section>
    <!-- end footer -->
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.intro.style.height = `calc(100vh - ${
      document.querySelector("#nv").getBoundingClientRect().height
    }px)`;
  },
  computed: {
    getPosts() {
      return this.$store.state.info;
    },
  },
  data() {
    return {
      taps: [
        {
          name: "تاريخ كرة القدم",
          link: "football-history",
          txt: `وكوكب السعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراًفما تلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكالسعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فمتلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعبدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفبها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها مساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاوهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخأو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاً وهريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخط أحزين والدكن المأنوس يختال إذ حل محل`,
        },
        {
          name: "خطط كرة القدم",
          link: "football-plans",
          txt: `وكوكب السعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراًفما تلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكالسعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فمتلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعبدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفبها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها مساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاوهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخأو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاً وهريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخط أحزين والدكن المأنوس يختال إذ حل محل`,
        },
        {
          name: "تاريخ الخطط",
          link: "football-plans-history",
          txt: `وكوكب السعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراًفما تلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكالسعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فمتلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعبدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفبها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها مساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاوهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخأو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاً وهريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخط أحزين والدكن المأنوس يختال إذ حل محل`,
        },
        {
          name: "التكتيك في كرة القدم",
          link: "football-tactic",
          txt: `وكوكب السعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراًفما تلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكالسعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فمتلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعبدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفبها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها مساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاوهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخأو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاً وهريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخط أحزين والدكن المأنوس يختال إذ حل محل`,
        },
        {
          name: "كرة القدم المعاصرة القدم",
          link: "football-today",
          txt: `وكوكب السعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراًفما تلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكالسعد بدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فمتلفى بها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعبدا ساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفبها من ساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدساطعاً وهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها مساخط أو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاوهب ريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخأو حزين والدكن المأنوس يختال إذ حل محل وكوكب السعد بدا ساطعاً وهريح البشر ذات اليمين واهتزت الدنيا سروراً فما تلفى بها من ساخط أحزين والدكن المأنوس يختال إذ حل محل`,
        },
      ],
    };
  },
  props: ["hasAccount"],
  name: "HomeView",
};
</script>
