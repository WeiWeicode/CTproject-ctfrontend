<template>
 
  <!-- v-for="road in roadSection" -->
  <!-- 一排三個卡片 -->
  <v-row>
    <v-col cols="12" sm="6" md="4" v-for="(product, i) in products" :key="i">
      <v-card class="mx-auto" height="500">
        <v-img
        height="300"
          :src="product.照片"
          
        ></v-img>

        <v-card-title class="headline">{{ product.name }}</v-card-title>

        <v-card-subtitle>{{ product.類型 }} </v-card-subtitle>
        <v-card-text>
          {{ product.說明 }}
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary" :to="product.連結">查看</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>
export default {
  data() {
    return {

      products: [
        {
          id: 0,
          name: "智騎X7 Pro",
          類型: "訓練台",
          說明: "便宜實用的訓練台",
          照片: "http://cdn.shopify.com/s/files/1/0535/4255/1737/products/x7-4_1200x1200.png?v=1611997201",
          連結: "/Product/productfeed/0",
        },
  
        {
          id: 1,
          name: "gopro hero 11 black",         
          類型: "運動攝影機",
          說明: "常常發熱",
          照片: "https://s.yimg.com/os/creatr-uploaded-images/2022-09/9abcb590-342b-11ed-bb77-b035c854493d",
          連結: "/Product/productfeed/1",
        },

        
        
      ],
    };
  },

  
};
</script>