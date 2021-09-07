<template>
    <div>
        <v-row class="my-10">
            <v-col align=center>
                <h1>Lista de juegos</h1>
                <Gameul/>
            </v-col>
        </v-row>
        <v-row>
            <v-col align=center>
                <h1>Lista de juegos (Filtrada)</h1>
                <Gameulfilter/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Gameul from '../components/game_ul.vue'
import Gameulfilter from '../components/game_ul_filter.vue'
export default {
    name: "GameList",
    components:{
        Gameul,
        Gameulfilter,
    },
}
</script>