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
        <v-snackbar
          v-model="successSell.snackbar"
          :timeout="successSell.timeout"
          color="success"
          right
        >
          <v-icon class="mx-3">mdi-check</v-icon>
          {{ successSell.text }}
        </v-snackbar>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Gameul from "../components/game_ul.vue";
export default {
  computed: {
    ...mapState(["successSell"]),
  },
  components: {
    Gameul,
  },
};
</script>
