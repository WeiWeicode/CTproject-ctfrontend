<template>
  <!-- div圖放到最大 -->

  <v-carousel cycle max-height="auto" hide-delimiters show-arrows-on-hover>
    <v-carousel-item v-for="slide in images" :key="i">
      <v-sheet :color="slide.color" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <v-img
            :src="slide.imglink"
            max-height="auto"
            max-width="auto"
            class="grey darken-4"
          ></v-img>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <v-timeline side="end" align="start">
    <v-timeline-item
      v-for="(year, i) in updatelog"
      :key="i"
      dot-color="pink"
      width="194"
      height="100"
    >
      <template v-slot:icon>
        <v-avatar>
          <img :src="year.timesrc" />
        </v-avatar>
      </template>

      <template v-slot:opposite>
        <span class="font-weight-bold">{{ year.date }}</span>
      </template>

      <h2 class="font-weight-bold">{{ year.title }}</h2>
      <p>{{ year.text }}</p>
    </v-timeline-item>
  </v-timeline>

  <!-- <helloEchart /> -->
</template>

<script>
import helloEchart from "../helloEchart.vue";
// axios
import axios from "axios";

const weiicon =
  "https://lh3.googleusercontent.com/ogw/AAEL6sghfOQotovhAWPaRc20GDiKyrSCyUU0hIvzrjoUOw=s32-c-mo";
const cticon =
  "https://yt3.googleusercontent.com/ytc/AMLnZu9ELr-CdE-wrJKG4TUn_9HdpCb60xx_CaJKJ3r0LdE=s176-c-k-c0x00ffffff-no-rj-mo";

export default {
  name: "Home",
  components: {
    helloEchart,
  },
  data() {
    return {
      events: [],
      input: null,
      nonce: 0,
      images: [
        {
          id: 2,
          color: "background-color:transparent;",
          // slide: "Second",
          // imglink:
          //   "https://twphoto.soonnet.org/Photo/Photo_Resources/232367/1671895393000File/9089bc19-420e-4a96-b043-86322cdaf8d3_PB.jpg",
        },
      ],
      // images: [
      //   {
      //     id: 1,
      //     color: "background-color:transparent;",
      //     // slide: "First",
      //     imglink: "https://lh3.googleusercontent.com/pw/AL9nZEUxiTgB99pn1toiqJVbDVZmRpWaEFtqYkqV9xVfV8m0VOMkoVcL8lQUxVcG-O2uV4SDsuPWmCaexbOokSC5GtXYpB9e8RcEtu5-SoO5AjKI1mfs77IcQxGdLc-SBccK0-NUrhBUlDZedzOzGnQxVtOH=w1943-h1297-no?authuser=0",
      //   },
      //   {
      //     id: 2,
      //     color: "background-color:transparent;",
      //     // slide: "Second",
      //     imglink: "https://twphoto.soonnet.org/Photo/Photo_Resources/232367/1671895393000File/9089bc19-420e-4a96-b043-86322cdaf8d3_PB.jpg",
      //   },
      // ],
      // 連播透明背景

      updatelog: [
        // {
        //   date: "2023.1.27",
        //   title: "網頁更新",
        //   text: "新增blog功能",
        //   timesrc: weiicon,
        // },
        // {
        //   date: "2023.1.25",
        //   title: "網頁更新",
        //   text: "新增計算機功能",
        //   timesrc: cticon,
        // },
        // {
        //   date: "2023.1.22",
        //   title: "網頁更新",
        //   text: "新增開箱功能",
        //   timesrc: weiicon,
        // },
        // {
        //   date: "2023.1.22",
        //   title: "開箱更新",
        //   text: "iPhone 14 Pro Max開箱測試",
        //   timesrc: cticon,
        // },
      ],
    };
  },
  mounted: function () {
    axios.get("http://114.34.15.124:5172/homeimg/").then((response) => {
      this.images = response.data;
    });
    axios.get("http://114.34.15.124:5172/updatelog/").then((response) => {
      this.updatelog = response.data;
    });
  },

  computed: {},

  methods: {},
};
</script>