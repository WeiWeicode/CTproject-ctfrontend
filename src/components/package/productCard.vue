<template>
 
  <!-- v-for="road in roadSection" -->
  <!-- 一排三個卡片 -->
  <v-row>
    <v-col cols="12" sm="6" md="4" v-for="(product, i) in products" :key="i">
      <v-card class="mx-auto" height="500">
        <v-img
        height="300"
          :src="product.imglink"
          
        ></v-img>

        <v-card-title class="headline">{{ product.name }}</v-card-title>

        <v-card-subtitle>{{ product.class }} </v-card-subtitle>
        <v-card-text>
          {{ product.text }}
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary" :to="product.tolink">查看</v-btn>
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

      products: [
        // {
        //   id: 0,
        //   name: "智騎X7 Pro",
        //   class: "訓練台",
        //   text: "便宜實用的訓練台",
        //   imglink: "http://cdn.shopify.com/s/files/1/0535/4255/1737/products/x7-4_1200x1200.png?v=1611997201",
        //   tolink: "/Product/productfeed/0",
        // },
  
        // {
        //   id: 1,
        //   name: "gopro hero 11 black",         
        //   class: "運動攝影機",
        //   text: "常常發熱",
        //   imglink: "https://s.yimg.com/os/creatr-uploaded-images/2022-09/9abcb590-342b-11ed-bb77-b035c854493d",
        //   tolink: "/Product/productfeed/1",
        // },

        
        
      ],
    };
  },

  mounted: function () {
    axios.get("http://114.34.15.124:5172/productcard/").then((response) => {
      this.products = response.data;
    });
  },

  
};
</script>