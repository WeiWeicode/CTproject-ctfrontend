<template>
  <div>
    <div>
      <h1>helloEchart</h1>
    </div>
    <div :style="{ width: '1000px', height: '400px' }">
      <FTP20min />
    </div>
    <div :style="{ width: '1000px', height: '400px' }">
      <DoughnutChart />
    </div>
    <div :style="{ width: '1000px', height: '400px' }">
      <ClusteringProcess />
    </div>
  </div>
</template>


<script>
import FTP20min from "./chart/20minFTP.vue";
import DoughnutChart from "./chart/DoughnutChart.vue";
import ClusteringProcess from "./chart/ClusteringProcess.vue";

export default {
  name: "chart",
  components: {
    FTP20min,
    DoughnutChart,
    ClusteringProcess,
  },
};
</script>

