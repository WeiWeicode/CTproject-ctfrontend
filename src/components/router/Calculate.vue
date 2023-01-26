<template>
  
  

  <v-container fluid>
    <!-- 引用calculateCard -->
    <calculateCard />
  </v-container>


  
</template>



<script>
// 引用路段卡片
import calculateCard from "../package/calculateCard.vue";

export default {
  name: "Calculate",

  // 引用calculateCard
  components: {
    calculateCard,
  },
};
</script>