<template>
  <the-nav :hasAccount="hasAccount" />
  <div class="container mx-auto">
    <h1>job details</h1>
    <p>job id is : {{ id }}</p>
  </div>
</template>
<script>
export default {
    props:['id'],
  data() {
    return {};
  },
};
</script>
