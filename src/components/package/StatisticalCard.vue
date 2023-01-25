<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      md="4"
      v-for="card in StatisticalCards"
      :key="card.id"
    >
      <v-card class="mx-auto" >
        <v-img max-height="250" :src="card.照片"></v-img>

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
          統計表名稱: "2022西進武嶺完成統計",
          說明: "埔里出發到台灣公路最高殿堂，是有練車就會完成還是，倖存者偏差呢？用大數據說明吧！",
          照片: "https://image.cdn-eztravel.com.tw/A7AATocaCs8ip6aACeUM5iiRiAMu-9bMIXbVQoW1vFU/g:ce/aHR0cHM6Ly92YWNhdGlvbi5jZG4tZXp0cmF2ZWwuY29tLnR3L2ltZy9WRFIvTkEwXzE0NjY1OTA3MzAuanBn.jpg",
          path: "/Statistical/chart/1",
        },
        {
          id: 2,
          統計表名稱: "2022碼表",
          說明: "碼表是單車愛好者最基本的入門推坑品，有哪些深得大家喜愛？又或者台灣人都用甚麼碼表呢?",
          照片: "http://c2.biketo.com/d/file/news/bikenews/2021-12-23/860e0b8015a0e067eef1248aa0ca254d.jpg",
          path: "/Statistical/chart/2",
        },
        {
          id: 3,
          統計表名稱: "自行車衣品牌",
          說明: "零零總總的自行車衣，你最喜歡哪個呢？",
          照片: "https://i3.momoshop.com.tw/1658771944/goodsimg/0009/359/404/9359404_R4_m.webp",
          path: "/Statistical/chart/3",
        },
        {
          id: 4,
          統計表名稱: "訓練台統計",
          說明: "訓練台是單車愛好者最基本的練功聖品，大神們是住在上面嗎？又或者都用甚麼訓練台呢",
          照片: "https://www.gofunsports.com/material-alias/%E5%AE%A4%E5%85%A7%E9%81%8B%E5%8B%95/%E5%96%AE%E8%BB%8A%E8%A8%93%E7%B7%B4/%E7%92%B0%E5%A2%83%E4%BB%8B%E7%B4%B9-600x400-4.jpg",
          path: "/Statistical/chart/4",
        },
      ],
    };
  },
};
</script>