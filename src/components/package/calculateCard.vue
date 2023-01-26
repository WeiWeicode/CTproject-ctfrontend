<template>
  <!-- v-for="road in roadSection" -->
  <!-- 一排三個卡片 -->
  <v-row>
    <v-col cols="12" sm="6" md="4" v-for="road in roadSection" :key="road.id">
      <v-card class="mx-auto" height="500">
        <v-img
        height="300"
          :src="road.照片"
          
        ></v-img>

        <v-card-title class="headline">{{ road.路段名稱 }}</v-card-title>

        <v-card-subtitle>總里程: {{ road.總公里 }} KM</v-card-subtitle>
        <v-card-subtitle>總爬升: {{ road.總爬升 }} KM</v-card-subtitle>

        <v-card-text>
          {{ road.說明 }}
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary" :to="road.path">計算</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>
export default {
  data() {
    return {
      loading: false,

      roadSection: [
        {
          id: 1,
          路段名稱: "西進武嶺",
          總公里: 55,
          總爬升: 2700,
          說明: "埔里出發台灣公路最高殿堂",
          照片: "https://image.cdn-eztravel.com.tw/A7AATocaCs8ip6aACeUM5iiRiAMu-9bMIXbVQoW1vFU/g:ce/aHR0cHM6Ly92YWNhdGlvbi5jZG4tZXp0cmF2ZWwuY29tLnR3L2ltZy9WRFIvTkEwXzE0NjY1OTA3MzAuanBn.jpg",
          path: "/calculate/roadsection/1"
        },
        {
          id: 2,
          路段名稱: "東進武嶺",
          總公里: 87,
          總爬升: 3071,
          說明: "花蓮出發到最高點",
          照片: "https://www.settour.com.tw/ss_img/poi/20210209/d013d5d8-91a3-47e6-aa64-02259e80eac9.jpg",
          path: "/calculate/roadsection/2"
        },
        {
          id: 3,
          路段名稱: "西進武嶺",
          總公里: 55,
          總爬升: 2700,
          說明: "埔里出發台灣公路最高殿堂",
          照片: "https://image.cdn-eztravel.com.tw/A7AATocaCs8ip6aACeUM5iiRiAMu-9bMIXbVQoW1vFU/g:ce/aHR0cHM6Ly92YWNhdGlvbi5jZG4tZXp0cmF2ZWwuY29tLnR3L2ltZy9WRFIvTkEwXzE0NjY1OTA3MzAuanBn.jpg",
          path: "/calculate/roadsection/3"
        },
        {
          id: 4,
          路段名稱: "東進武嶺",
          總公里: 87,
          總爬升: 3071,
          說明: "花蓮出發到最高點",
          照片: "https://www.settour.com.tw/ss_img/poi/20210209/d013d5d8-91a3-47e6-aa64-02259e80eac9.jpg",
          path: "/calculate/roadsection/4"
        },
        {
          id: 5,
          路段名稱: "西進武嶺",
          總公里: 55,
          總爬升: 2700,
          說明: "埔里出發台灣公路最高殿堂",
          照片: "https://image.cdn-eztravel.com.tw/A7AATocaCs8ip6aACeUM5iiRiAMu-9bMIXbVQoW1vFU/g:ce/aHR0cHM6Ly92YWNhdGlvbi5jZG4tZXp0cmF2ZWwuY29tLnR3L2ltZy9WRFIvTkEwXzE0NjY1OTA3MzAuanBn.jpg",
          path: "/calculate/roadsection/5"
        },
        {
          id: 6,
          路段名稱: "東進武嶺",
          總公里: 87,
          總爬升: 3071,
          說明: "花蓮出發到最高點",
          照片: "https://www.settour.com.tw/ss_img/poi/20210209/d013d5d8-91a3-47e6-aa64-02259e80eac9.jpg",
          path: "/calculate/roadsection/6"
        },
      ],
    };
  },

  
};
</script>