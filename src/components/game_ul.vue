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
      </template>
    </v-simple-table>
        <v-text-field placeholder="Filtrar" v-model="filterInput"></v-text-field>
  </div>
</template>

<script>
export default {
  name: "Gameul",
  data: () => ({
      filterInput: '',
  }),
  computed: {
    games() {
      return this.$store.state.gameList;
    },
  },
  methods: {
      
  },
};
</script>
