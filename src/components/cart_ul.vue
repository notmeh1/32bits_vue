<template>
  <div>
    <v-simple-table dark>
      <template>
        <thead>
          <tr>
            <th class="text-center">Nombre</th>
            <th class="text-center">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(game, $index) in cart" :key="$index">
            <th class="text-center">{{ game.nombre }}</th>
            <th class="text-center">{{ game.precio }}</th>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="text-center my-3">
      <v-btn color="success" align="center" @click="$store.dispatch('checkOut')">Realizar compra</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    
    getCart() {
      return this.$store.state.cart;
    },
  },
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
};
</script>
