<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(product, i) in products" :key="i">
        <v-card
          :to="product.連結"
          class="mx-auto"
          max-width="344"
          outlined
          elevation="0"
        >
          <v-img :src="product.照片" height="300" max-width="auto"></v-img>

          <v-card-title class="justify-center">
            <div>
              <h3 class="headline mb-0">{{ product.name }}</h3>
              <div>{{ product.類型 }}</div>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  




</template>
  
  <script>
import x7pro from "../package/product/x7pro.vue";

// 使用者設定
export default {
  name: "Product",

  components: {
      x7pro,
    },
  data: () => ({
    model: 0,
    

    products: [
      {
        id: 0,
        name: "智騎X7 Pro",
        類型: "訓練台",
        照片: "http://cdn.shopify.com/s/files/1/0535/4255/1737/products/x7-4_1200x1200.png?v=1611997201",
        連結: "/Product/x7pro",
      },

      {
        id: 1,
        name: "gopro hero 11 black",
        類型: "運動攝影機",
        照片: "https://s.yimg.com/os/creatr-uploaded-images/2022-09/9abcb590-342b-11ed-bb77-b035c854493d",
        連結: "/Product/gopro11",
      },
      
    ],
  }),
};
</script>