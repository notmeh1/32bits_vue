<template>
  <div>
    <v-simple-table dark>
      <template>
        <thead>
          <tr>
            <th class="text-left">Codigo</th>
            <th class="text-left">Nombre</th>
            <th class="text-left">Stock</th>
            <th class="text-left">Precio</th>
            <th class="text-left" v-if="mode === 'sell' || mode === 'default'">
              ---
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(game, $index) in gameList"
            :key="$index"
            :style="[
              mode === 'filter'
                ? {
                    'background-color': game.color,
                    color: 'black',
                    'font-weight': 'bolder',
                  }
                : {},
            ]"
          >
            <td>{{ game.codigo }}</td>
            <td>{{ game.nombre }}</td>
            <td>{{ game.stock }}</td>
            <td>{{ game.precio }}</td>
            <td v-if="mode === 'sell'">
              <v-btn
                elevation="2"
                depressed
                color="error"
                @click="$store.dispatch('sellGame', $index)"
                >Vender</v-btn
              >
            </td>
            <td v-if="mode === 'default'">
              <v-btn
                v-if="game.stock > 0"
                elevation="2"
                depressed
                color="success"
                @click="$store.dispatch('addCart', $index)"
                ><v-icon>mdi-cart-plus</v-icon></v-btn
              >
              <v-icon v-else>mdi-cart-off</v-icon>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-text-field
      v-if="mode === 'filter'"
      placeholder="Nombre del juego"
      :value="$store.state.filterInput"
      @input="$store.dispatch('getFilter', $event)"
    />
  </div>
</template>
<!-- intentar mover snackbar a app.vue (snackbar global) -->
<script>
export default {
  name: "Gameul",
  data: () => ({}),
  computed: {
    getGameList() {
      return this.$store.state.gameList;
    },
    getSuccess() {
      return this.$store.state.sellSuccess;
    },
  },
  props: {
    gameList: {
      type: Array,
      required: true,
    },
    mode: {
      type: String,
      default: "default",
    },
  },
};
</script>
