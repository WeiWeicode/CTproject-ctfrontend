<template>
    <v-container fluid>
        <productCard />
    </v-container>
  
  </template>
    
    <script>
  import productCard from "../package/productCard.vue";
  
  // 使用者設定
  export default {
    name: "Product",
  
    components: {
        productCard,
      },
    
  };
  </script>