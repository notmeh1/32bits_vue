<template>
  <div>
    <v-row class="my-10">
      <v-col align="center">
        <h1>Lista de juegos</h1>
        <p>
          Cantidad de productos registrados: {{ $store.state.gameList.length }}
        </p>
        <p>Cantidad de stock total: {{ $store.getters.stockTotal }}</p>
        <Gameul :gameList="$store.state.gameList" />
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
              <Gameul :gameList="$store.getters.searchByName" />
              <v-text-field
                placeholder="Nombre del juego"
                :value="$store.state.filterInput"
                @input="$store.dispatch('getFilter', $event)"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Gameul from "../components/game_ul.vue";
export default {
  name: "Search",
  components: {
    Gameul,
  },
};
</script>
