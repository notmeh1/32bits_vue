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
          </v-col>
          <v-col> </v-col>
        </v-row>
        <!-- add transition-->
      </v-main>
      <Footer />
    </v-container>
  </v-app>
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0%;
}
</style>
