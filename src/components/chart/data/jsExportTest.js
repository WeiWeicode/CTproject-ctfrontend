// 寫一個方法 回傳一個陣列
// { value: 100, name: "Bryton" },
//                 { value: 150, name: "Gramin" },
//                 { value: 40, name: "Wahoo" },

import * as echarts from "echarts";

const obj = 123;
const obj2 = { name: 'obj2' };
const data = [{ value: 200, name: "Bryton" },
              { value: 160, name: "Gramin" },
              { value: 200, name: "Wahoo" }]


// 只輸出內容
export default data;


export function fn1(axiosdata) {
    var chartDom = document.getElementById("main1");
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
            name: "數量統計",
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
            // data: fn
            data: this.axiosdata
          },
        ],
      };

      option && myChart.setOption(option);
    }
  


// export function getStopwatch2022Data()
//     return [
//         { value: 100, name: "Bryton" },
//         { value: 150, name: "Gramin" },
//         { value: 40, name: "Wahoo" },
//     ]

