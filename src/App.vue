<template>
  <v-app>
    <v-container fluid>
      <Navbar />
      <v-main>
        <!-- add transition-->
        <router-view />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "./components/navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped></style>
