<template >
    <div>
        <b-table v-if="filas && encabezados" striped hover :fields="encabezados" :items="filas">
            <template #cell(actions)="row">
                <b-button @click="editar(row.item)" size="sm" class="my-1 me-4" variant="secondary">Editar</b-button>
                <b-button @click="borrar(row.item)" size="sm" class="my-1" variant="danger">Eliminar</b-button>
            </template>
        </b-table>
        <EditForm />
    </div>
</template>


<script>
import { mapActions, mapMutations } from 'vuex'
import EditForm from "@/components/EditForm.vue"

export default {
    name: "TablaEdit",
    components: {
        EditForm,
    },
    props:{
        filas: {
            type: Array
        },
        encabezados: {
            type: Array
        },
    },
    methods: {
        editar(juguete) {
            this.activarEdicion()
            this.editarProducto(juguete)
        },
        borrar(juguete){
            this.borrarProducto(juguete)
        },
        ...mapActions(["borrarProducto"]),
        ...mapMutations(["activarEdicion", "editarProducto"]),
    },
}
</script>