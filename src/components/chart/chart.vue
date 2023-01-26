<template>
    

  <v-container fluid>
    <!-- <v-view v-if="tab === 1"> -->
    <v-view v-if="tab == 1">
      <stopwatch2022 />
    </v-view>
    <!-- </v-view> -->

    <v-view v-if="tab == 2">
      <westWuling2022 />
    </v-view>

    <statisticalCard />
  </v-container>
</template>
    
    
    
    <script>
// 引用統計卡片
import stopwatch2022 from "./stopwatch2022.vue";
import westWuling2022 from "./westWuling2022.vue";

export default {
  name: "chart",

  components: {
    stopwatch2022,
    westWuling2022,
  },

//   取得網址參數
  data() {
    return {
      tab: this.$route.params.id,
    };
  },


};
</script>