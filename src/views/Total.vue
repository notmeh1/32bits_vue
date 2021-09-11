<template>
    <div>
        <v-row class="my-10">
            <v-col align=center>
                <h1>Total de ventas</h1>
                <p v-if="$store.getters.sellTotal > 0">Monto total de ventas: ${{$store.getters.sellTotal}}</p>
                <p v-else>No se han realizado ventas todavía</p>
            </v-col>
        </v-row>
    </div>
</template>