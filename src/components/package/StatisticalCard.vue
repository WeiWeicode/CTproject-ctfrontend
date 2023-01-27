<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      md="4"
      v-for="card in StatisticalCards"
      :key="card.id"
    >
      <v-card class="mx-auto" height="500">
        <v-img height="300" :src="card.照片"></v-img>

        <v-card-title class="headline">{{ card.統計表名稱 }}</v-card-title>

        <v-card-text>
          {{ card.說明 }}
        </v-card-text>

        <v-card-actions>
          <v-btn :href="card.path">連結</v-btn>
          <!-- 連結paht -->
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

      StatisticalCards: [
        {
          id: 1,
          統計表名稱: "2022碼表統計",
          說明: "碼表是單車愛好者最基本的入門推坑品，有哪些深得大家喜愛？又或者台灣人都用甚麼碼表呢?",
          照片: "http://c2.biketo.com/d/file/news/bikenews/2021-12-23/860e0b8015a0e067eef1248aa0ca254d.jpg",
          path: "/Statistical/chart/1",
        },
        {
          id: 2,
          統計表名稱: "2022西進武嶺完成統計",
          說明: "埔里出發到台灣公路最高殿堂，是有練車就會完成還是，倖存者偏差呢？用大數據說明吧！",
          照片: "https://image.cdn-eztravel.com.tw/A7AATocaCs8ip6aACeUM5iiRiAMu-9bMIXbVQoW1vFU/g:ce/aHR0cHM6Ly92YWNhdGlvbi5jZG4tZXp0cmF2ZWwuY29tLnR3L2ltZy9WRFIvTkEwXzE0NjY1OTA3MzAuanBn.jpg",
          path: "/Statistical/chart/2",
        },
        
      ],
    };
  },
};
</script>