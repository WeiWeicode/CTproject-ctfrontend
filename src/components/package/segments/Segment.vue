<template>
  <tr>
    <td>
      <a
        :href="'https://veloviewer.com/segments/' + item.id"
        target="_blank"
        style="color: white"
      >
        {{ item.name }}
      </a>
    </td>
    <td>{{ item.distance }} km</td>
    <td>{{ item.grade }} %</td>
    <td>{{ item.cumulative_distance }} km</td>
    <td>
      <v-text-field
        label="瓦數"
        type="number"
        single-line
        v-model="item.watt"
      ></v-text-field>
    </td>

    <td>
      <v-text-field
        label="區段時間(秒)"
        type="number"
        v-model="item.lap_time"
        single-line
      ></v-text-field>
    </td>

    <td>
      {{ new Date(1000 * item.lap_time).toISOString().substr(11, 8) }}
    </td>
    <td>{{ item.avg_speed.toFixed(2) }} kph</td>
    <td>
      {{ new Date(1000 * item.cumulative_time).toISOString().substr(11, 8) }}
    </td>
  </tr>
</template>
<!-- <style scoped>
.v-text-field {
  width: 50px;
}
</style> -->
<script>
export default {
  props: ["item"],
};
</script>