<template>
    <div>
        <v-row class="my-10">
            <v-col align=center>
                <h1>Total de ventas</h1>
                <p v-if="$store.getters.sellTotal > 0">Monto total de ventas: ${{$store.getters.sellTotal}}</p>
                <p v-else>No se han realizado ventas todavía</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <Sellul :gamesSelled="$store.state.gamesSelled" v-if="$store.getters.sellTotal > 0"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Sellul from '../components/sell_ul.vue'
export default {
    components: {
        Sellul,
    }
}
</script>