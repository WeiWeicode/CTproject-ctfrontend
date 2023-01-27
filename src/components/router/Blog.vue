<template>
  <div>
    <h1>Blog</h1>
    <blogCard />
  </div>
  
</template>
  
  <script>
// 使用者設定
// import blognav from "../package/blog/blognav.vue";
import blogCard from "../package/blogCard.vue";

export default {
  name: "Blog",
  data() {
    return {
      // blognav,
      tab: "option-1",
    };
  },
  components: {
    blogCard,
  },
};
</script>

