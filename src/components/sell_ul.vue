<template>
  <div>
    <v-simple-table dark>
      <template>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(sell, $index) in gamesSelled" :key="$index">
            <th>{{ sell.codigo }}</th>
            <th>{{ sell.nombre }}</th>
            <th>{{ sell.precio }}</th>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  computed: {
    getSellList() {
      return this.$store.state.gamesSelled;
    },
  },
  props: {
    gamesSelled: {
      type: Array,
      required: true,
    },
  },
};
</script>
