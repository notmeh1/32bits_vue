<template>
<div>

  <v-toolbar-title align=center><v-img src="../assets/img/banner-transparent.png" class="logo"/></v-toolbar-title>

  <v-toolbar color="dark" dark dense class="rounded-xl">
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text :to="{name: 'index'}"> Inicio </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text :to="{name: 'search'}"> Búsqueda </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text :to="{name: 'sellings'}"> Ventas </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text :to="{name: 'total'}"> Total </v-btn>

      <v-divider vertical></v-divider>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-divider class="mx-4" vertical></v-divider>
    <v-btn :to="{name: 'cart'}" color="success"><v-icon>mdi-cart</v-icon></v-btn>
  </v-toolbar>
</div>
</template>

<style scoped>
.logo {
  width: 40%;
}
</style>
