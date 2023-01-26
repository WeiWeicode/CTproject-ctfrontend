// 碼表統計

// this.axiosdatamain1 & this.axiosdatamain1 可以直接從vue的data中取得


import * as echarts from "echarts";

export function fn1() {
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
        data: this.axiosdatamain1,
      },
    ],
  };

  option && myChart.setOption(option);
}

export function fn2() {
    var chartDom = document.getElementById('main2');
    var myChart = echarts.init(chartDom);
    var option;
    
    option = {
      legend: {},
      tooltip: {},
      dataset: {
        source: this.axiosdatamain2
      },
      xAxis: [
        { type: 'category', gridIndex: 0 },
        { type: 'category', gridIndex: 1 }
      ],
      yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
      grid: [{ bottom: '55%' }, { top: '55%' }],
      series: [
        // These series are in the first grid.
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        // These series are in the second grid.
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
      ]
    };
    
    option && myChart.setOption(option);
    
}
