<template>
  <div>
    <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        Lista de juegos filtrada
      </v-expansion-panel-header>
      <v-expansion-panel-content>
    <v-simple-table dark>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Codigo</th>
            <th class="text-left">Nombre</th>
            <th class="text-left">Stock</th>
            <th class="text-left">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(game, $index) in games"
            :key="$index"
            :style="{
              'background-color': game.color,
              color: 'black',
              'font-weight': 'bolder',
            }"
          >
            <td>{{ game.codigo }}</td>
            <td>{{ game.nombre }}</td>
            <td>{{ game.stock }}</td>
            <td>{{ game.precio }}</td>
          </tr>
        </tbody>
        <v-input></v-input>
      </template>
    </v-simple-table>
        <v-text-field
      placeholder="Filtrar"
      :value="$store.state.filterInput"
      @input="$store.dispatch('getFilter', $event)"
    />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "Gameul",
  computed: {
    games() {
      return this.$store.state.gameList;
    },
  },
};
</script>
