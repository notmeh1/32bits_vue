<template>
  <div>
    <v-row class="my-10">
      <v-col align="center">
        <h1>Lista de juegos</h1>
        <p>
          Cantidad de productos registrados: {{ $store.state.gameList.length }}
        </p>
        <p>Cantidad de stock total: {{ $store.getters.stockTotal }}</p>
        <Gameul :gameList="$store.state.gameList" mode="default" />
        <v-snackbar
          v-model="successAdd.snackbar"
          :timeout="successAdd.timeout"
          color="success"
          right
        >
          <v-icon class="mx-3">mdi-check</v-icon>
          {{ successAdd.text }}
        </v-snackbar>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Filtrar lista por nombre
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <Gameul :gameList="$store.getters.searchByName" mode="filter" />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Gameul from "../components/game_ul.vue";
export default {
  name: "Search",
  computed: {
    ...mapState(["successAdd"]),
  },
  components: {
    Gameul,
  },
};
</script>
