<template>
    

  <v-container fluid>
    <!-- <v-view v-if="tab === 1"> -->
    <v-view v-if="tab == 1">
      <stopwatch2022 />
    </v-view>
    <!-- </v-view> -->

    <v-view v-if="tab == 2">
      <FTP20min />
    </v-view>

    <statisticalCard />
  </v-container>
</template>
    
    
    
    <script>
// 引用統計卡片
import stopwatch2022 from "../chart/stopwatch2022.vue";
import FTP20min from "../chart/FTP20min.vue";

export default {
  name: "chart",

  components: {
    stopwatch2022,
    FTP20min,
  },

//   取得網址參數
  data() {
    return {
      tab: this.$route.params.id,
    };
  },


};
</script>