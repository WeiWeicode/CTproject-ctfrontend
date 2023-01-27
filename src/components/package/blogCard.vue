<template>
  <!-- v-for="road in roadSection" -->
  <!-- 一排三個卡片 -->
  <v-row>
    <v-col cols="12" sm="6" md="4" v-for="(blog, i) in blogs" :key="i">
      <v-card class="mx-auto" height="500">
        <v-img height="200" :src="blog.imglink"></v-img>

        <v-card-title class="headline">{{ blog.name }}</v-card-title>

        <v-card-subtitle><div class="pa-4">
            <v-chip-group selected-class="text-primary" column>
              <v-chip v-for="tag in blog.tags" :key="tag">
                {{ tag }}
              </v-chip>
            </v-chip-group>
          </div></v-card-subtitle>
        <v-card-text>
          {{ blog.text }}
          
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary" :to="blog.tolink">查看</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>
export default {
  data() {
    return {
      blogs: [
        {
          id: 0,
          name: "第一個部落格",
          class: "通用",
          text: "第一個部落格測試",
          tags: ["部落格", "notion", "實用"],
          imglink: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          tolink: "/blog/blogfeed/5413122eef544661b51f4b6653fb6820",
        },

        {
          id: 1,
          name: "第二個部落格",
          class: "通用",
          text: "第二個部落格測試網址參數",
          tags: ["測試", "notion", "功能"],
          imglink: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
          tolink: "/blog/blogfeed/3a702f683b914bebb94e87b958921f51",
        },

      ],
    };
  },
};
</script>