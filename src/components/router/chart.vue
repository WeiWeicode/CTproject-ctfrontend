<template>
  

    <v-container fluid>
        <v-view v-if="tab === 1">
            <stopwatch />
        </v-view>

        <v-view v-if="tab === 2">
            <FTP20min />
        </v-view>

      <statisticalCard />
    </v-container>
  </template>
    
    
    
    <script>
  // 引用統計卡片
  import stopwatch from "../chart/stopwatch.vue";
  import FTP20min from "../chart/FTP20min.vue";
  
  export default {
    name: "chart",
  
    components: {
        stopwatch,
        FTP20min,
    },
  };
  </script>