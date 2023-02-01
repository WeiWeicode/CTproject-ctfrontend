<template>
  <v-app>
    <v-row>
      <v-app-bar app dark shrink-on-scroll prominent>
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <!-- <v-spacer></v-spacer> -->

        <v-col class="pa-3" outlined tile>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer">
          </v-app-bar-nav-icon>
        </v-col>

        <v-spacer></v-spacer>

        <v-col outlined tile>
          <!-- <v-app-bar-title>CT</v-app-bar-title> -->
        </v-col>

        <v-spacer></v-spacer>
        <v-col class="pa-2" outlined tile>
          <!-- <v-sheet elevation="2">
            
            <v-tabs
              
              show-arrows
              slider-color="teal-lighten-3"
            >
              <v-tab link @click.prevent="home">Home</v-tab>
              <v-tab link @click.prevent="product">開箱</v-tab>
              <v-tab link @click.prevent="blog">blog</v-tab>
              <v-tab link @click.prevent="about">about</v-tab>
            </v-tabs>
          </v-sheet> -->
          <v-card>
            <v-tabs center-active slider-color="white">
              
              <v-tab link @click.prevent="home">Home</v-tab>
              <v-tab link @click.prevent="about">about</v-tab>
              <v-tab link @click.prevent="product">product</v-tab>
              <v-tab link @click.prevent="blog">blog</v-tab>

              <v-tab size='1'></v-tab>
              <!-- 多放一個v-tab假的才能移動 -->
            </v-tabs>
            
          </v-card>
        </v-col>

        <!-- <v-col>
            <v-app-bar-title>Title</v-app-bar-title>
          </v-col> -->
      </v-app-bar>
    </v-row>

    <v-navigation-drawer v-model="drawer" bottom temporary>
      <!-- <v-view v-if="this.userview"> -->
        <!-- 有登入才顯示 -->
        <!-- <v-list-item>
          <v-list-item-avatar>
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="title">
              {{ user.fullName }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-view> -->

      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item link @click.prevent="calculate">
            <v-list-item-title>路段計算機</v-list-item-title>
          </v-list-item>

          <v-list-item link @click.prevent="statistical">
            <v-list-item-title>大數據統計</v-list-item-title>
          </v-list-item>

          <!-- <v-view v-if="this.userview">
            <v-list-item link>
              <v-list-item-title>活動</v-list-item-title>
            </v-list-item>

            <v-list-item link @click.prevent="settings">
              <v-list-item-title>設置</v-list-item-title>
            </v-list-item>
          </v-view> -->
        </v-list-item-group>
      </v-list>

      <v-divider></v-divider>
   
      <!-- <v-view v-if="this.userview">
       
        <v-list-item link @click="login">
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
      </v-view>
      <v-view v-if="this.userview">
        <v-list-item link @click="logout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-view> -->
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <login @close="dialog = false" />
    </v-dialog>

    <!-- 彈出Login視窗 -->
    <!-- <login v-if="false" /> -->

    <!-- <v-main>
      <helloVuetify />
      <h1>APPvue</h1>
      <helloEchart />
    </v-main> -->
  </v-app>
</template>

<script>
import helloEchart from "./components/helloEchart.vue";
import helloVuetify from "./components/helloVuetify.vue";
import login from "./components/package/account/login.vue";

export default {
  name: "App",
  props: {
    // dialogLogin
  },

  data: () => ({
    drawer: false,
    dialog: false,
    userview: false,

    group: null,
    user: {},
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  components: {
    helloEchart,
    helloVuetify,
    login,
  },

  methods: {
    home() {
      this.$router.push("/Home");
    },
    settings() {
      this.$router.push("/Settings");
    },
    calculate() {
      this.$router.push("/Calculate");
    },
    statistical() {
      this.$router.push("/Statistical");
    },
    product() {
      this.$router.push("/Product");
    },
    blog() {
      this.$router.push("/Blog");
    },
    about() {
      this.$router.push("/About");
    },

    login() {
      this.dialog = true;
    },
    // 接收子層傳遞的dialog資料

    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

