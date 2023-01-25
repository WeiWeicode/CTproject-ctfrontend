<template>
  <h1>2022武嶺統計</h1>

  <h2>完成人數與完成比例 (資料引用自NS武嶺)</h2>
  <div class="echart" id="main1"></div>
  
  <h2>男女推力比與完成時間</h2>
  <div class="echart" id="main2"></div>
</template>
  
  
  <script>
// 引用js data 方法

import { fn1, fn2 } from "./data/westWuling2022data";


// template id:main1, main2 要記得改
// script:data, mounted, 都要引入


export default {
  name: "Doughnut",
  data() {
    return {
      // 拿到方法
      fn1,
      fn2,
      axiosdatamain1_1: [
        "3小時內完成",
        "3-4小時完成",
        "4-5小時完成",
        "5-6小時完成",
        "6-7小時完成",
      ],

      axiosdatamain1_2: [
        { value: 1715, name: "完成人數", selected: true },
        { value: 275, name: "未完賽人數" },
      ],

      // 傳入js data數據
      axiosdatamain1_3: [
        { value: 20, name: "3小時內" },
        { value: 335, name: "3-4小時" },
        { value: 600, name: "4-5小時" },
        { value: 800, name: "5-6小時" },
        { value: 500, name: "6-7小時" },
      ],

      // axiosdatamain2: [
      //   ["product", "2020", "2021", "2022"],
      //   ["Bryton", 180, 280, 200],
      //   ["Garmin", 350, 310, 300],
      //   ["Wahoo", 60, 83, 100],
      // ],
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