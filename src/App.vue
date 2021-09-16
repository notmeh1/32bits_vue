<template>
  <v-app>
    <v-container fluid>
      <Navbar />
      <v-main>
        <v-row>
          <v-col> </v-col>
          <v-col cols="10">
            <transition name="fade">
              <router-view />
            </transition>
            <v-snackbar
              v-model="successAdd.snackbar"
              :timeout="successAdd.timeout"
              color="success"
              right
            >
              <v-icon class="mx-3">mdi-check</v-icon>
              {{ successAdd.text }}
            </v-snackbar>
            <v-snackbar
              v-model="successSell.snackbar"
              :timeout="successSell.timeout"
              color="success"
              right
            >
              <v-icon class="mx-3">mdi-check</v-icon>
              {{ successSell.text }}
            </v-snackbar>
          </v-col>
          <v-col> </v-col>
        </v-row>
      </v-main>
      <Footer />
    </v-container>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapState(["successAdd", "successSell"]),
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0%;
}
</style>
