<template>
      <v-container fluid>
    <!-- <v-view v-if="tab === 1"> -->
    <v-view v-if="tab == 0">
      <x7rpo />
    </v-view>
    <!-- </v-view> -->

    <v-view v-if="tab == 1">
      <gopro11 />
    </v-view>

    <statisticalCard />
  </v-container>
</template>


<script>

import x7rpo from "./x7pro.vue";
import gopro11 from "./gopro11.vue";

export default {
  name: "productfeed",

  components: {
    x7rpo,
    gopro11,
  },

//   取得網址參數
  data() {
    return {
      tab: this.$route.params.id,
    };
  },


};

</script>