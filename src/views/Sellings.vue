<template>
  <div>
    <v-row class="my-10">
      <v-col align="center">
        <h1>Venta de juegos</h1>
        <p>
          Cantidad de productos con stock:
          {{ $store.getters.filterByStock.length }}
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Gameul :gameList="$store.getters.filterByStock" mode="sell" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Gameul from "../components/game_ul.vue";
export default {
  components: {
    Gameul,
  },
};
</script>
