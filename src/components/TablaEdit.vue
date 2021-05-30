<template >
    <div>
        <b-table v-if="filas && encabezados" striped hover :fields="encabezados" :items="filas">
            <template #cell(actions)="row">
                <b-button @click="editar(row.item)" size="sm" class="my-1 me-4" variant="secondary">Editar</b-button>
                <b-button @click="borrar(row.item)" size="sm" class="my-1" variant="danger">Eliminar</b-button>
            </template>
        </b-table>
    </div>
</template>


<script>
import { mapActions } from 'vuex'

export default {
    name: "TablaEdit",
    props:{
        filas: {
            type: Array
        },
        encabezados: {
            type: Array
        },
    },
    methods: {
        editar() {
            
        },
        borrar(juguete){
            this.borrarProducto(juguete)
        },
        ...mapActions(["borrarProducto"])
    },
}
</script>