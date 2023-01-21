<template>
  <h1>Calculate</h1>
  

  <v-container fluid>
    <!-- 引用calculateCard -->
    <calculateCard />
  </v-container>


  
</template>



<script>
// 引用路段卡片
import calculateCard from "../calculateCard.vue";

export default {
  name: "Calculate",

  // 引用calculateCard
  components: {
    calculateCard,
  },
};
</script>