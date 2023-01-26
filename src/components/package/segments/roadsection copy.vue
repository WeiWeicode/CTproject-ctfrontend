<template>
  <div>
    <h1>road section</h1>
    接收ID測試: {{ $route.params.id }}
  </div>

  <v-card>
    <v-tabs v-model="tab">
      <v-tab value="1">瓦數配速</v-tab>
      <v-tab value="2">路段配速</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="1">
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field dense label="瓦數(FTP/AP)"></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="體重(KG)" filled dense></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="車重(KG)"
                    filled
                    rounded
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-btn> 計算 </v-btn>
            </v-container>
          </v-form>
        </v-window-item>

        <v-window-item value="2">
            
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>

  <v-timeline side="end" align="start">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :dot-color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card>
        <v-card-title :class="['text-h6', `bg-${item.color}`]">
          Lorem Ipsum Dolor
        </v-card-title>
        <v-card-text class="bg-white text--primary">
          <p>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
            imperdiet nec ut, sed euismod convenire principes at. Est et nobis
            iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae.
          </p>
          <v-btn :color="item.color" variant="outlined"> Button </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>


<script>
// 網頁要接收ID

export default {
  name: "roadsection",
  data: () => ({
    tab: null,

    items: [
      {
        color: "red-lighten-2",
        icon: "mdi-star",
      },
      {
        color: "purple-lighten-2",
        icon: "mdi-book-variant",
      },
      {
        color: "green-lighten-1",
        icon: "mdi-airballoon",
      },
      {
        color: "indigo-lighten-2",
        icon: "mdi-buffer",
      },
    ],
  }),

  
};
</script>