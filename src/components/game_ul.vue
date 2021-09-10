<template>
  <div>
    <v-simple-table dark>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Codigo</th>
            <th class="text-left">Nombre</th>
            <th class="text-left">Stock</th>
            <th class="text-left">Precio</th>
            <th class="text-left" v-if="mode === 'sell'">---</th>
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

<script>
export default {
  name: "Gameul",
  computed: {
    games() {
      return this.$store.state.gameList;
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
