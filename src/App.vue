<template>
  <v-app>
    <v-container fluid>
      <Navbar />
      <v-main>
        <!-- add transition-->
        <router-view />
      </v-main>
      <Footer/>
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

<style lang="scss" scoped></style>
