<template>
  <!-- div圖放到最大 -->

  <v-carousel cycle max-height="auto" hide-delimiters show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <v-img
            :src="src[i]"
            max-height="auto"
            max-width="auto"
            class="grey darken-4"
          ></v-img>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <h1>更新日誌</h1>

  <v-timeline side="end" align="start">
    <v-timeline-item
      v-for="(year, i) in updatelog"
      :key="i"
      dot-color="pink"
      size="small"
    >
      <template v-slot:icon>
        <v-avatar>
          <img :src="year.timesrc" />
        </v-avatar>
      </template>

      <template v-slot:opposite>
        <span class="font-weight-bold">{{ year.date }}</span>
      </template>
      <!-- <v-card width="400" title= {{year.title}}> -->
      <v-card class="mx-auto" width="400" :title="year.title">
        <v-card-text class="py-2"> {{ year.text }} </v-card-text>

        <!-- <h2 class="font-weight-bold">{{ year.title }}</h2> -->
        <!-- <p>{{ year.text }}</p> -->
      </v-card>
    </v-timeline-item>
  </v-timeline>

  <!-- <helloEchart /> -->
</template>

<script>
import helloEchart from "../helloEchart.vue";

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
      colors: [
        "background-color:transparent;",
        "background-color:transparent;",
        "background-color:transparent;",
        "background-color:transparent;",
        "background-color:transparent;",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      src: [
        "https://lh3.googleusercontent.com/pw/AL9nZEUxiTgB99pn1toiqJVbDVZmRpWaEFtqYkqV9xVfV8m0VOMkoVcL8lQUxVcG-O2uV4SDsuPWmCaexbOokSC5GtXYpB9e8RcEtu5-SoO5AjKI1mfs77IcQxGdLc-SBccK0-NUrhBUlDZedzOzGnQxVtOH=w1943-h1297-no?authuser=0",
        "https://twphoto.soonnet.org/Photo/Photo_Resources/232367/1671895393000File/9089bc19-420e-4a96-b043-86322cdaf8d3_PB.jpg",
        "https://twphoto.soonnet.org/Photo/Photo_Resources/222480/1673807049000File/457f80d1-07de-4314-a294-240b5403b5ae_PB.jpg",
        "https://twphoto.soonnet.org/Photo/Photo_Resources/233399/1670190432000File/474ab7b5-03b9-4849-9a56-ee88f5edcf33_PB.jpg",
        "https://twphoto.soonnet.org/Photo/Photo_Resources/225203/1669361520000File/be2fd17f-bdc8-4080-83b3-c8df5db46da2_PB.jpg",
      ],

      updatelog: [
        {
          date: "2023.1.22",
          title: "網頁更新",
          text: "新增登入功能",
          timesrc: weiicon,
        },
        {
          date: "2023.1.22",
          title: "網頁更新",
          text: "新增計算機功能",
          timesrc: cticon,
        },
        {
          date: "2023.1.22",
          title: "網頁更新",
          text: "新增blog功能",
          timesrc: weiicon,
        },
        {
          date: "2023.1.22",
          title: "網頁更新",
          text: "新增開箱功能",
          timesrc: weiicon,
        },
        {
          date: "2023.1.22",
          title: "開箱更新",
          text: "iPhone 14 Pro Max開箱測試",
          timesrc: cticon,
        },
      ],
    };
  },

  computed: {
    timeline() {
      return this.events.slice().reverse();
    },
  },

  methods: {
    comment() {
      const time = new Date().toTimeString();
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(
          /:\d{2}\sGMT-\d{4}\s\((.*)\)/,
          (match, contents, offset) => {
            return ` ${contents
              .split(" ")
              .map((v) => v.charAt(0))
              .join("")}`;
          }
        ),
      });

      this.input = null;
    },
  },
};
</script>