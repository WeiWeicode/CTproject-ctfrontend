<template>
  <h1>2022碼表統計</h1>

  <h2>各家碼表市占率</h2>
  <div class="echart" id="main1"></div>

  <h2>歷年碼表統計</h2>
  <div class="echart" id="main2"></div>
</template>
  
  
  <script>
// 引用js data 方法

import { fn1, fn2 } from "./data/stopwatch2022data";

import * as echarts from "echarts";
// import "echarts-gl"; 暫時用不到 地圖的

export default {
  name: "Doughnut",
  data() {
    return {
      // 拿到方法
      fn1,
      fn2,

      // 傳入js data數據
      axiosdatamain1: [
        { value: 200, name: "Brytonaxios" },
        { value: 300, name: "Graminaxios" },
        { value: 100, name: "Wahooaxios" },
      ],

      axiosdatamain2: [
        ["product", "2020", "2021", "2022"],
        ["Bryton", 180, 280, 200],
        ["Garmin", 350, 310, 300],
        ["Wahoo", 60, 83, 100],
      ],
    };
  },
  methods: {},

  mounted() {
    this.fn1();
    this.fn2();
  },
};
</script>
  
  <style scoped>
.echart {
  width: 100%;
  min-width: 300px;
  height: 400px;
}
</style>