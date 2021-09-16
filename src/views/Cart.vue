<template>
  <div>
    <v-row class="my-10">
      <v-col align="center">
        <h1>Carrito</h1>
        <p v-if="$store.state.cart.length === 0">
          No hay nada en el carrito aún!
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Cartul :cart="$store.state.cart" v-if="$store.state.cart.length > 0" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Cartul from "../components/cart_ul.vue";
export default {
  components: {
    Cartul,
  },
};
</script>
