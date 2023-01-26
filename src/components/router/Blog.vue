<template>
  <div>
    <h1>Blog</h1>
    <blognav />
  </div>
</template>
  
  <script>

  // 使用者設定
  import blognav from "../package/blog/blognav.vue";


  export default {
    name: "Blog",
    components: {
      blognav,
    },
    
  };
  
  </script>