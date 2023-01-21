<template>
  <div>
    <div>
      <h1>helloEchart</h1>
    </div>
    <!-- <div :style="{ width: '1000px', height: '400px' }">
      <FTP20min />
    </div>
    <div :style="{ width: '1000px', height: '400px' }">
      <DoughnutChart />
    </div>
    <div :style="{ width: '1000px', height: '400px' }">
      <ClusteringProcess />
    </div> -->
  </div>

 

  <v-container >
    <v-row no-gutters>
      <v-col>
        <v-sheet > <FTP20min /></v-sheet>
      </v-col>
      <v-col>
        <v-sheet > <DoughnutChart /> </v-sheet>
      </v-col>

      <v-responsive width="100%"></v-responsive>

      <v-col>
        <v-sheet > <ClusteringProcess /> </v-sheet>
      </v-col>

      <!-- <v-col>
        <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
      </v-col> -->
    </v-row>
  </v-container>
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

