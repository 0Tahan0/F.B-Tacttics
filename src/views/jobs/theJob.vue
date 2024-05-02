<template>
  <the-nav :hasAccount="hasAccount" />

  <div v-for="job in jobs" :key="job.id">
    <router-link :to="{
         name: 'jobDetails',
          params: { id: job.id } 
         }">
      {{ job.title }}
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jobs: [
        { title: "title one ", id: 1, details: "lorem" },
        { title: "title two ", id: 2, details: "lorem" },
        { title: "title three ", id: 3, details: "lorem" },
      ],
    };
  },
};
</script>
