<template>
  <div class="flex flex-col items-center justify-center text-center h-screen">
    <base-card
      class="p-10 hover:bg-dark2Color transition-colors duration-1000 hover:text-white"
    >
      <base-title>{{ title }}</base-title>
      <base-button
        class="border border-mainColor before:bg-mainColor"
        rounded
        shape="slide"
        ><router-link :to="{ name: 'الصفحة الرئيسية' }">{{
          direction
        }}</router-link></base-button
      >
    </base-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "لم يتم العثور على الصفحة !",
      direction: "العودة إلى الصفحة الرئيسية؟",
    };
  },
};
</script>
