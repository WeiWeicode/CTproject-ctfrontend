<template>
  <!-- v-for="road in roadSection" -->
  <!-- 一排三個卡片 -->
  <div class="search">
    <v-card>
      <v-toolbar color="purple" dark flat prominent>

        <v-text-field class="mx-4" flat hide-details label="Search" prepend-inner-icon="mdi-magnify" solo-inverted
          v-model="searchtitle"></v-text-field>


        <template v-slot:extension>
          <v-tabs v-model="tabs" centered>

            <!-- 按鈕 searchclass = n.text -->
            <!-- <v-tab @click="seachclass = n.text" v-for="n in classblog" :key="n" >
            {{ n.text }}
          </v-tab>  -->
            <v-tab @click="searchclass = n.text" v-for="n in classblog" :key="n">
              {{ n.text }}
            </v-tab>



          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <div class="text-center">
            <!-- 搜尋tag closable 移除tag:deletetag-->
            <v-chip-group column>
              <v-chip v-for="tag in searchtag" :key="tag" @click="deletetag">
                {{ tag }} <v-icon >
                  mdi-close
                </v-icon>
              </v-chip>
            </v-chip-group>


          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <!-- 分隔線 高度1px -->

    <v-divider></v-divider>


    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(blog, i) in blogtable" :key="i">
        <v-card class="mx-auto" height="500">
          <v-img height="200" :src="blog.imglink"></v-img>

          <v-card-title class="headline">{{ blog.name }}</v-card-title>
          <v-card-text class="headline">分類:{{ blog.classname }}</v-card-text>
          <v-card-subtitle>
            <div class="pa-4">
              <v-chip-group selected-class="text-primary" column>
                <!-- chip增加到searchtag -->
                <v-chip v-for="tag in blog.tags" :key="tag" @click="addtag">
                  {{ tag }}
                </v-chip>


                <!-- <v-chip v-for="tag in blog.tags" :key="tag" @click="addtag">
                {{ tag }}
              </v-chip> -->
              </v-chip-group>
            </div>
          </v-card-subtitle>



          <v-card-text>
            {{ blog.text }}
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" :to="blog.tolink">查看</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>


<script>

import axios from "axios";

export default {
  data() {
    return {
      blogs: [
        // {
        //   id: 0,
        //   name: "第一個部落格",
        //   class: "通用",
        //   text: "第一個部落格測試",
        //   tags: ["部落格", "notion", "實用"],
        //   imglink: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        //   tolink: "/blog/blogfeed/5413122eef544661b51f4b6653fb6820",
        // },

        // {
        //   id: 1,
        //   name: "第二個部落格",
        //   class: "通用",
        //   text: "第二個部落格測試網址參數",
        //   tags: ["測試", "notion", "功能"],
        //   imglink: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
        //   tolink: "/blog/blogfeed/3a702f683b914bebb94e87b958921f51",
        // },

      ],



      chip: true,

      tabs: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',


      searchtitle: '',
      searchclass: '',
      searchtag: [],
      temptag: '',


      classblog: [
      ],




    };
  },

  mounted: function () {
    axios.get("http://114.34.15.124:5172/blogcard/").then((response) => {
      // tags:"['部落格', 'notion', '實用']" 兩邊雙引號與/轉空白
      for (let i = 0; i < response.data.length; i++) {
        response.data[i].tags = response.data[i].tags.replace(/'/g, '"');
        response.data[i].tags = JSON.parse(response.data[i].tags);
      }
      // classblog 從 response.data 中取出 classname 必定帶一個全部
      let classname = [];
      for (let i = 0; i < response.data.length; i++) {
        classname.push(response.data[i].classname);
      }
      // classblog 去除重複
      classname = [...new Set(classname)];

      this.classblog = [{ text: "全部" }];
      for (let i = 0; i < classname.length; i++) {
        this.classblog.push({ text: classname[i] });
      }
      this.blogs = response.data;

      this.blogtable = response.data;


    });

  },

  methods: {
    // 增加標籤到 searchtag 重複的不加入
    addtag() {
      if (!this.searchtag.includes(window.event.target.innerText)) {
        this.searchtag.push(window.event.target.innerText);
      }
    },
    // 刪除searchtag
    deletetag() {
      this.temptag = window.event.target.innerText;
      this.searchtag = this.searchtag.filter((item) => item !== this.temptag);

      // this.searchtag.splice(window.event.target.id, 1);

    },
  },

  computed: {
    // searchtitle 搜尋 name class 並回傳 blogstable class全部=空值 查詢searchtag
    blogtable() {
      let blogtable = [];
      for (let i = 0; i < this.blogs.length; i++) {
        if (
          this.blogs[i].name.includes(this.searchtitle) &&
          (this.blogs[i].classname.includes(this.searchclass) ||
            this.searchclass == "全部" || this.searchclass == "") &&
          (this.searchtag.every((val) => this.blogs[i].tags.includes(val)) ||
            this.searchtag.length == 0)

        ) {
          blogtable.push(this.blogs[i]);
        }
      }
      return blogtable;
    },




  },

};
</script>

<style scoped>
/* 強制定位 */
.search {
  width: 100%;
  height: 200px;

  /* 絕對定位 */
  position: absolute;

  /* 水平與垂直定位 */
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);

  /* 外框 */
  /* border: 1px solid #000; */
}
</style>