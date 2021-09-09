<template>
  <div>
    <v-row class="my-10">
      <v-col align="center">
        <h1>Venta de juegos</h1>
        <p>
          Cantidad de productos con stock:
          {{ $store.getters.filterByStock.length }}
        </p>
        <p>Cantidad de stock total: {{ $store.getters.stockTotal }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <GameulMono :gameList="$store.getters.filterByStock" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import GameulMono from "../components/game_ul_mono.vue";
export default {
  components: {
    GameulMono,
  },
};
</script>
