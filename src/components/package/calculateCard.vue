<template>
  <!-- v-for="road in roadSection" -->
  <!-- 一排三個卡片 -->
  <v-row>
    <v-col cols="12" sm="6" md="4" v-for="road in roadSection" :key="road.id">
      <v-card class="mx-auto" height="500">
        <v-img
        height="300"
          :src="road.imglink"
          
        ></v-img>

        <v-card-title class="headline">{{ road.name }}</v-card-title>

        <v-card-subtitle>總里程: {{ road.totalmileage }} KM</v-card-subtitle>
        <v-card-subtitle>總爬升: {{ road.totalclimb }} KM</v-card-subtitle>

        <v-card-text>
          {{ road.text }}
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary" :to="road.tolink">計算</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>

import axios from "axios";

export default {
  data() {
    return {
      loading: false,

      roadSection: [
        // {
        //   id: 1,
        //   name: "西進武嶺",
        //   totalmileage: 55,
        //   totalclimb: 2700,
        //   text: "埔里出發台灣公路最高殿堂",
        //   imglink: "https://image.cdn-eztravel.com.tw/A7AATocaCs8ip6aACeUM5iiRiAMu-9bMIXbVQoW1vFU/g:ce/aHR0cHM6Ly92YWNhdGlvbi5jZG4tZXp0cmF2ZWwuY29tLnR3L2ltZy9WRFIvTkEwXzE0NjY1OTA3MzAuanBn.jpg",
        //   tolink: "/calculate/roadsection/1"
        // },
        // {
        //   id: 2,
        //   name: "東進武嶺",
        //   totalmileage: 87,
        //   totalclimb: 3071,
        //   text: "花蓮出發到最高點",
        //   imglink: "https://www.settour.com.tw/ss_img/poi/20210209/d013d5d8-91a3-47e6-aa64-02259e80eac9.jpg",
        //   tolink: "/calculate/roadsection/2"
        // },
        
      ],
    };
  },

  mounted: function () {
    axios.get("http://114.34.15.124:5172/roadsection/").then((response) => {
      this.roadSection = response.data;
    });
  },

  
};
</script>