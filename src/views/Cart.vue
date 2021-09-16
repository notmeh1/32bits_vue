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
          <router-view/>
      </v-col>
    </v-row>
    <v-overlay :value="checkoutSuccess.overlay" :opacity="checkoutSuccess.opacity">
      <v-col align=center>
        <v-progress-circular indeterminate size="64" class="text-center"></v-progress-circular>
        <h1>Obteniendo datos de su tarjeta de crédito...</h1>
      </v-col>
    </v-overlay>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Cartul from "../components/cart_ul.vue";
export default {
  components: {
    Cartul,
  },
  computed: {
    ...mapState(["checkoutSuccess"]),
  },
};
</script>
