<template>
  <v-card>
    <v-card-title class="headline">
      配速產生器 - {{ route_info.name }}
    </v-card-title>
    <v-card-text>
      <v-form>
        <h3>
          最新功能請關注我的臉書粉絲團
          <a
            href="https://www.facebook.com/CTMEDIATW/"
            target="_blank"
            style="color: white"
            ><img
              width="32px"
              src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png"
          /></a>
        </h3>
      </v-form>

      
    </v-card-text>
  </v-card>
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
                <v-col cols="4" md="4">
                  <v-text-field
                    label="瓦數"
                    required
                    v-model="ftp"
                    width="auto"
                  ></v-text-field>
                </v-col>

                <v-col cols="4" md="4">
                  <v-text-field
                    label="體重(公斤)"
                    required
                    v-model="body_weight"
                  ></v-text-field>
                </v-col>

                <v-col cols="4" md="4">
                  <v-text-field
                    label="車重(公斤)"
                    required
                    v-model="bike_weight"
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- <v-btn> 計算 </v-btn> -->
              <v-btn class="my-2" @click="ftpAssignWatt">以FTP配瓦</v-btn>
              <v-btn class="my-2" @click="caculateSpeedAndTimeViaAP"
                >平均瓦數估算時間</v-btn
              >
            </v-container>
          </v-form>
        </v-window-item>

        <v-window-item value="2">
          <v-container>
            <v-row no-gutters>
              <v-col cols="12">
                <v-sheet class="pa-2">
                  <v-simple-table height="300px">
                    <template v-slot:default>
                      <table width="100%" style="table-layout: fixed">
                        <thead>
                          <tr>
                            <th class="text-left">路段</th>
                            <th class="text-left">距離</th>
                            <th class="text-left">坡度</th>
                            <th class="text-left">瓦數</th>
                            <th class="text-left">區間(s)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in lst_segments" :key="item.name">
                            <td class="text-left">{{ item.name }}</td>
                            <td class="text-left">{{ item.distance }}</td>
                            <td class="text-left">{{ item.grade }}</td>

                            <td class="text-left">
                              <v-text-field
                                label="瓦數"
                                single-line
                                v-model="item.watt"
                                max-width="100px"
                              ></v-text-field>
                            </td>
                            <td class="text-left">
                              <v-text-field
                                label="區段時間(秒)"
                                v-model="item.lap_time"
                                single-line
                              ></v-text-field>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </template>
                  </v-simple-table>
                </v-sheet>
              </v-col>
              <v-col cols="12">
                <v-sheet class="pa-2">
                  <v-btn class="my-2" @click="caculateSpeedAndTime"
                    >路段瓦數推估所需時間</v-btn
                  >
                  <v-btn class="my-2" @click="caculateWatt"
                    >以時間推估所需瓦數</v-btn
                  >
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>

  <v-divider></v-divider>
  <v-container class="grey lighten-5">
    <v-row class="mb-6" no-gutters>
      <v-col>
        <v-card class="pa-2" tile outlined height="300" >
          <v-card-title >路段資訊</v-card-title>
          <v-card-text>路段名稱: 西進武嶺</v-card-text>

          <v-card-text>總里程: 55K</v-card-text>
          <v-card-text>總爬升: 2705m</v-card-text>
        </v-card>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col>
        <v-card class="pa-2" tile outlined height="300">
          <v-card-title>時間估算</v-card-title>
          <v-card-text>平均瓦數:200w</v-card-text>
          <v-card-text>平均速度: 18km/h </v-card-text>
          <v-card-text>所需時間: 4h20min</v-card-text>
          <div class="text-center">
        <v-btn class="my-2" @click="downloadcsv">下載小抄</v-btn>
      </div>
          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-row class="mb-6" no-gutters>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <v-timeline side="end" align="start">
            <v-timeline-item
              v-for="(item, i) in lst_segments"
              :key="i"
              :dot-color="item.color"
              :icon="item.icon"
              fill-dot
            >
              <v-card>
                <v-card-title :class="['text-h6', `bg-${item.color}`]">
                  {{ item.name }}
                </v-card-title>
                <v-card-text class="bg-white text--primary">
                  <p>距離: {{ item.distance }} 公里</p>
                  <p>坡度: {{ item.grade }} %</p>
                  <p>瓦數: {{ item.watt }} 瓦</p>
                  <p>區間時間: {{ item.lap_time }} 秒</p>
                  <p>速度: {{ item.avg_speed }} 公里/小時</p>
                  <p>所需時間: {{ item.time }} 分鐘</p>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  <!-- 分隔線 -->

  <v-layout column justify-center align-center>
    <v-flex class="text-center">
      <v-card>
        <v-card-title class="headline"> </v-card-title>
        <v-card-text>
          <v-form>
            <h3>
              最新功能請關注我的臉書粉絲團
              <a
                href="https://www.facebook.com/CTMEDIATW/"
                target="_blank"
                style="color: white"
                ><img
                  width="32px"
                  src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png"
              /></a>
            </h3>
          </v-form>

          感謝Andy Yang提供計算方法<br />
          <a
            href="https://www.youtube.com/channel/UC5AIxJqajtl41ZxCbiuoagA"
            target="_blank"
            rel="noopener noreferrer"
          >
            前往 CT Yeh Youtube 頻道
          </a>
          <br />
          <a
            href="https://www.youtube.com/channel/UC5AIxJqajtl41ZxCbiuoagA?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            訂閱CT的頻道
          </a>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
  
  <script>
//   import Logo from "~/components/Logo.vue";
//   import VuetifyLogo from "~/components/VuetifyLogo.vue";
import Segment from "./Segment.vue";
export default {
  // validate ({ params }) {
  //   return !isNaN(+params.id)
  // },
  components: {
    Segment,
  },
  // methods: {
  //   caculate_avg_watt() {
  //     var total_watt = 0;
  //     var total_time = 0;
  //     this.lst_segments.forEach(function (segment) {
  //       total_watt =
  //         total_watt +
  //         parseInt(segment["lap_time"]) * parseInt(segment["watt"]);
  //       // totla_watt: 做多少功 = 總功率 + (功率 * 時間)
  //       total_time = segment["cumulative_time"];
  //       // total_time: 總時間
  //     });
  //     this.avg_watt = total_watt / total_time;
  //   },
  //   downloadcsv() {
  //     let csvContent = "";
  //     let lst_title = [
  //       "路段",
  //       "距離",
  //       "累積距離",
  //       "配瓦",
  //       "均速",
  //       "區段時間",
  //       "累計時間",
  //     ];
  //     csvContent += lst_title.join(",") + "\r\n";

  //     this.lst_segments.forEach(function (segment) {
  //       let lst_row = [
  //         segment["name"],
  //         segment["distance"],
  //         segment["cumulative_distance"],
  //         segment["watt"],
  //         segment["avg_speed"],
  //         new Date(1000 * parseInt(segment["lap_time"]))
  //           .toISOString()
  //           .substr(11, 8),
  //         new Date(1000 * parseInt(segment["cumulative_time"]))
  //           .toISOString()
  //           .substr(11, 8),
  //       ];
  //       let row = lst_row.join(",");
  //       csvContent += row + "\r\n";
  //     });

  //     var blob = new Blob(["\uFEFF" + csvContent], {
  //       type: "text/csv;charset=utf-8;",
  //     });
  //     var a = document.createElement("a");
  //     a.download = "ride_plan.csv";
  //     a.href = URL.createObjectURL(blob);
  //     a.click();
  //   },
  //   ftpAssignWatt() {
  //     // 用FTP配瓦
  //     var that = this;
  //     this.lst_segments.forEach(function (factor, i) {
  //       var wkg = that.ftp / that.body_weight;
  //       console.log("wkg =" + wkg);
  //       if (wkg > 4.5) {
  //         wkg = 4.5;
  //       }
  //       if (wkg < 3) {
  //         wkg = 3;
  //       }
  //       var multiple_factor = (1.18 * wkg) / 4.5;
  //       if (multiple_factor < 1) {
  //         multiple_factor = 1;
  //       }
  //       var fix_factor = multiple_factor * that.lst_segments[i].factor;
  //       // fix_factor: 修正因子 = 推力比 * 路段係數
  //       that.lst_segments[i].watt = parseInt(that.ftp * fix_factor);
  //       // lst_segments[i].watt: 路段功率 = FTP * 修正因子
  //       console.log("HELLO");
  //       console.log(that.lst_segments);
  //     });
  //     this.caculateSpeedAndTime();
  //     // caculateSpeedAndTime: 算出時間與速度,直接呈現在畫面上
  //     this.caculate_avg_watt();
  //     // caculate_avg_watt: 算出平均功率,直接呈現在畫面上
  //   },

  //   caculateSpeedAndTimeViaAP() {
  //     // 用平均功率估算時間
  //     // 算出時間與速度的AP AP=標準功率
  //     var that = this;
  //     this.lst_segments.forEach(function (factor, i) {
  //       that.lst_segments[i].watt = parseInt(that.ftp);
  //       // lst_segments[i].watt: 路段功率 = FTP
  //     });
  //     this.caculateSpeedAndTime();
  //     // caculateSpeedAndTime: 算出時間與速度
  //     this.caculate_avg_watt();
  //     // caculate_avg_watt: 算出平均功率
  //   },

  //   caculateSpeedAndTime() {
  //     // 路段瓦數推估所需時間
  //     let post_data = {
  //       lst_segments: this.lst_segments,
  //       weight: parseFloat(this.body_weight) + parseFloat(this.bike_weight),
  //       // parseFloat: 將字串轉為浮點數
  //       // body_weight: 騎手體重
  //       // bike_weight: 車重
  //     };
  //     console.log(post_data);
  //     this.$axios
  //       .post("/routes/caculate/timeandspeed", post_data)
  //       // 丟到 backend > api > routes > views.py class CaculateSpendTimeViaWatt(APIView)做計算
  //       // CaculateSpendTimeViaWatt(APIView) => 還會計算一個含式 def caculateTimeByWatt(self,Weight,lst_segments):
  //       .then((response) => {
  //         let lst_segments = response.data.data;
  //         console.log(lst_segments);
  //         this.lst_segments = lst_segments;
  //         this.caculate_avg_watt();
  //         // caculate_avg_watt: 算出平均功率
  //       });
  //   },
  //   caculateWatt() {
  //     // 以時間推估所需瓦數
  //     let post_data = {
  //       lst_segments: this.lst_segments,
  //       // lst_segments: 路段
  //       weight: parseFloat(this.body_weight) + parseFloat(this.bike_weight),
  //       // weight: 騎手體重 + 車重
  //     };
  //     console.log(post_data);
  //     this.$axios.post("/routes/caculate/watt", post_data).then((response) => {
  //       // 丟到 backend > api > routes > views.py class CaculateWattViaTime(APIView)做計算
  //       // CaculateWattViaTime(APIView) => 還會計算一個含式 def caculateWattByTime(self,Weight,lst_segments):
  //       let lst_segments = response.data.data;
  //       console.log(lst_segments);
  //       this.lst_segments = lst_segments;
  //       // lst_segments: 路段
  //       this.caculate_avg_watt();
  //       // caculate_avg_watt: 算出平均功率
  //     });
  //   },
  // },
  // mounted() {
  //   this.route_id = this.$route.params.id;
  //   this.$axios
  //     .get("/routes/segment/route/" + this.route_id)
  //     .then((response) => {
  //       let lst_segments = response.data.data;
  //       this.lst_segments = lst_segments;
  //       this.caculate_avg_watt();
  //       this.in_progress = false;
  //     });
  //   this.$axios.get("/routes/route/get/" + this.route_id).then((response) => {
  //     this.route_info = response.data.data;
  //     console.log(this.route_info);
  //   });
  // },
  data: () => ({
    route_info: { name: "路段資料載入中請稍後", description: "" },

    tab: null,

    in_progress: true,
    route_id: 0,
    dense: false,
    dialog: false,
    fixedHeader: true,
    height: 640,
    body_weight: 65,
    bike_weight: 8,
    avg_watt: 200,
    ftp: 210,
    lst_segments: [
      {
        id: "13303959",
        name: "中心碑-人止關",
        distance: 16.08,
        grade: 2.1,
        watt: 200,
        lap_time: 7200,
        cumulative_time: 7200,
        avg_speed: 10.0619,
        order: 1,
        cumulative_distance: 0,
        color: "green accent-4",
        icon: "mdi-heart",
      },
      {
        id: "13304188",
        name: "人止關-霧社",
        distance: 5.33,
        grade: 5.5,
        watt: 200,
        lap_time: 7200,
        cumulative_time: 7200,
        avg_speed: 10.0619,
        order: 2,
        cumulative_distance: 0,
        color: "green accent-2",
        icon: "mdi-heart",
      },
      {
        id: "13304017",
        name: "霧社-最高小七",
        distance: 11.98,
        grade: 6.6,
        watt: 200,
        lap_time: 7200,
        cumulative_time: 7200,
        avg_speed: 10.0619,
        order: 3,
        cumulative_distance: 0,
        color: "amber",
        icon: "mdi-heart-half-full",
      },
      {
        id: "13304064",
        name: "最高小七-翠峰",
        distance: 6.04,
        grade: 4.4,
        watt: 200,
        lap_time: 7200,
        cumulative_time: 7200,
        avg_speed: 10.0619,
        order: 4,
        cumulative_distance: 0,
        color: "orange",
        icon: "mdi-heart-half-outline",
      },
      {
        id: "13304083",
        name: "翠峰-鳶峰",
        distance: 6.58,
        grade: 6.8,
        watt: 200,
        lap_time: 7200,
        cumulative_time: 7200,
        avg_speed: 10.0619,
        order: 5,
        cumulative_distance: 0,
        color: "purple lighten-1",
        icon: "mdi-heart-off",
      },
      {
        id: "13304114",
        name: "鳶峰-昆陽",
        distance: 5.15,
        grade: 6.3,
        watt: 200,
        lap_time: 7200,
        cumulative_time: 7200,
        avg_speed: 10.0619,
        order: 6,
        cumulative_distance: 0,
        color: "red darken-1",
        icon: "mdi-help-box",
      },
      {
        id: "13304128",
        name: "昆陽-武嶺",
        distance: 2.12,
        grade: 8.2,
        watt: 200,
        lap_time: 7200,
        cumulative_time: 7200,
        avg_speed: 10.0619,
        order: 7,
        cumulative_distance: 0,
        color: "blue",
        icon: "mdi-human-handsup",
      },
    ],
  }),
};
</script>

