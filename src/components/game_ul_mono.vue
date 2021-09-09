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
            <th class="text-left"> --- </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(game, $index) in gameList"
            :key="$index"
            :style="{
              'font-weight': 'bolder',
            }"
          >
            <td>{{ game.codigo }}</td>
            <td>{{ game.nombre }}</td>
            <td>{{ game.stock }}</td>
            <td>{{ game.precio }}</td>
            <td><v-btn elevation="2" depressed color="error" @click="$store.dispatch('sellGame', $index)">Vender</v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
  },
};
</script>
