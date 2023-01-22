<template>
  <!-- 帳號登入 -->

  <v-card>
    <v-card-title class="headline">Login</v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field label="account" v-model="account" />
          </v-col>
          <v-col cols="12">
            <v-text-field label="Password" v-model="password" />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <!-- 關閉視窗 -->
      <v-btn color="blue darken-1" text @click="closeDialog">Cancel</v-btn>

      <!-- <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn> -->
      <!-- <v-btn color="blue darken-1" text @click="dialog = false">Login</v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "login",

  data() {
    return {
      account: "",
      password: "",
      dialog: "",
    };
  },

  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>