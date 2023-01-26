<template>
  

  <v-container fluid>
    <statisticalCard />
  </v-container>
</template>
  
  
  
  <script>
// 引用統計卡片
import statisticalCard from "../package/StatisticalCard.vue";

export default {
  name: "Statistical",

  components: {
    statisticalCard,
  },
};
</script>