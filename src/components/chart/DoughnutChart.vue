<template>
  <!-- <h1>圓餅圖</h1> -->

  <div class="echart" id="main"></div>

  <!-- <div class="container">
    <div class="row">
      <div class="col">
        <div class="echart" id="main"></div>
      </div>
    </div>
  </div> -->
</template>


<script>
// 這方式比較簡單 把官方的範例丟到draw即可

import * as echarts from "echarts";
// import "echarts-gl"; 暫時用不到 地圖的

export default {
  name: "Doughnut",

  methods: {
    draw() {
      //

      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);

      // 自適應大小
      window.addEventListener("resize", () => {
        myChart.resize();
      });


      var option;

      option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 100, name: "Bryton" },
              { value: 150, name: "Gramin" },
              { value: 40, name: "Wahoo" },
            ],
          },
        ],
      };

      option && myChart.setOption(option);

      //
    },
  },

  mounted() {    
    this.draw();
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