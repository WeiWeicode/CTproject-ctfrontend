<template>
  <v-app>
    <v-app-bar
      app
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
      inverted-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <!-- <v-spacer></v-spacer> -->
      <v-row>
        <v-col class="pa-2" outlined tile>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer">
          </v-app-bar-nav-icon>
        </v-col>
        <v-spacer></v-spacer>

        <v-col outlined tile>
          <!-- <v-app-bar-title>CT</v-app-bar-title> -->
        </v-col>

        <v-spacer></v-spacer>
        <v-col class="pa-2" outlined tile>
          <!-- about blog -->
        </v-col>

        <!-- <v-col>
            <v-app-bar-title>Title</v-app-bar-title>
          </v-col> -->
      </v-row>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" bottom temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://picsum.photos/200/200?random" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="title">
            {{ user.fullName }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item link @click.prevent="home">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item link @click.prevent="calculate">
            <v-list-item-title>路段計算機</v-list-item-title>
          </v-list-item>

          <v-view v-if="true">
            <v-list-item link>
              <v-list-item-title>活動</v-list-item-title>
            </v-list-item>

            <v-list-item link @click.prevent="settings">
              <v-list-item-title>設置</v-list-item-title>
            </v-list-item>
          </v-view>
        </v-list-item-group>
      </v-list>

      <v-divider></v-divider>
      <v-view v-if="false">
        <v-list-item link @click="login">
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
      </v-view>
      <v-view v-if="true">
        <v-list-item link @click="logout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-view>
    </v-navigation-drawer>

    <v-main>
      <v-container class="grey lighten-5">
        <router-view />
      </v-container>
    </v-main>

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

export default {
  name: "App",

  data: () => ({
    drawer: false,
    group: null,
    user: {
      initials: "JD",
      fullName: "John Doe",
      email: "john.doe@doe.com",
    },
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  components: {
    helloEchart,
    helloVuetify,
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
  },
};
</script>

