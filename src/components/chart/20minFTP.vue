<template>
  <h1>FTP折線圖</h1>

  <div
    class="echart"
    id="20minFTP"
    
  ></div>
</template>


<script>
// 這方式比較簡單 把官方的範例丟到draw即可

import * as echarts from "echarts";

export default {
  name: "login_new",
  methods: {
    //绘制3D路径图
    draw() {
      //

      var chartDom = document.getElementById("20minFTP");
      var myChart = echarts.init(chartDom);

      // 自適應大小
      window.addEventListener("resize", () => {
        myChart.resize();
      });

      var option;

      option = {
        title: {
          text: "20minFTP",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {},
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            // saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["5s", "30s", "1min", "5min", "10min", "20min"],
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} W",
          },
        },
        series: [
          {
            // name: "Highest",
            type: "line",
            data: [700, 600, 300, 240, 220, 200],
            markPoint: {
              data: [
                { type: "max", name: "Max" },
                { type: "min", name: "Min" },
              ],
            },
            // markLine: {
            //   data: [{ type: "average", name: "Avg" }],
            // },
            // 算平均
          },
          {
            // name: "Lowest",
            // type: "line",
            // data: [1, -2, 2, 5, 3, 2, 0],
            // markPoint: {
            //   data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }],
            // },
            markLine: {
              data: [
                { type: "average", name: "Avg" },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max",
                  },
                  {
                    symbol: "circle",
                    label: {
                      position: "start",
                      formatter: "Max",
                    },
                    type: "max",
                    name: "最高点",
                  },
                ],
              ],
            },
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
  /* max-width: 600px; */
  min-width: 300px;
  height: 400px;
}

</style>