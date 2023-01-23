<template>
    <div class="d-flex justify-space-around align-center bg-grey-lighten-4">
      <v-img
        class="bg-white"
        width="auto"
        height="400"
        :aspect-ratio="1"
        src="https://dgalywyr863hv.cloudfront.net/pictures/clubs/464953/9856070/12/large.jpg"
        cover
      ></v-img>
    </div>
  
    
      <div class="d-flex justify-space-around align-center">
        <v-timeline align="start" side="end">
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :dot-color="item.color"
            :icon="item.icon"
            fill-dot
          >
            <v-card width="300px">
              <v-card-title :class="['text-h6', `bg-${item.color}`]">
                {{ item.title }}
              </v-card-title>
              <v-card-text class="bg-white text--primary">
                <p>{{ item.text }}</p>
                <v-view v-if="item.btn">
                  <v-btn @click="dialog = true">建議</v-btn>
                </v-view>
                <v-view v-if="item.iconbool">
                  <v-icon>mdi-email</v-icon>
                  <v-icon>mdi-facebook</v-icon>
                  <v-icon>mdi-instagram</v-icon>
                  <v-icon>mdi-youtube</v-icon>
                </v-view>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>
  
      
    <!-- 彈出視窗 -->
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title class="headline"></v-card-title>
        <v-card-text>
          <v-textarea v-model="text" label="請輸入建議"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"> 取消 </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false"> 確定 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
    
    
    
  <script>
  export default {
    name: "About",
    data() {
      return {
        dialog: false,
        text: "",
        items: [
          {
            color: "red-lighten-2",
            icon: "mdi-star",
            title: "新網頁上線",
            text: "經過幾個月的努力，我們終於上線了新的網頁，希望大家能喜歡。這是CT與緯緯的合作開發新網站，希望能夠為車友帶來更多的幫助。",
          },
          {
            color: "purple-lighten-2",
            icon: "mdi-book-variant",
            title: "開發更多新功能",
            text: "未來我們會持續開發更多新功能。也歡迎大家提出建議，我們會盡力為大家帶來更好的服務。",
            btn: true,
          },
          {
            color: "green-lighten-1",
            icon: "mdi-airballoon",
            title: "歡迎各位乾爹跟廠商贊助開箱",
            text: "聯絡人：CT Yeh",
            iconbool: true,
          },
        ],
      };
    },
  };
  </script>