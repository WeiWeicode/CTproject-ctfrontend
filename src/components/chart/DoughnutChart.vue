<template>
  <h1>圓餅圖</h1>

  <div
    class="echart"
    id="main"
    :style="{ width: '100%', height: '100%' }"
  ></div>
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

      var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
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