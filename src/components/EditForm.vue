<template>
    <div v-if="editar">
        <b-col cols="9" class="mx-auto mt-5 bg-info p-4 rounded-2 shadow">
            <h2 class="text-white fw-bold">Editar Producto</h2>
            <label class="mt-3">Nombre</label>
            <b-form-input v-model="updateProducto.nombre"></b-form-input>
            <label class="mt-3">Stock</label>
            <b-form-input v-model="updateProducto.stock"></b-form-input>
            <label class="mt-3">Precio</label>
            <b-form-input v-model="updateProducto.precio"></b-form-input>
            <b-button @click="actualizar(updateProducto)" class="mt-4 col-6" variant="success">Aceptar</b-button>
        </b-col>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
    name: "EditForm",

    data() {
        return {
            nombre: "",
            stock: 0,
            precio: 0,
        }
    },
    computed: {
        ...mapState(["editar", "updateProducto"])
    },
    methods: {
        ...mapActions(["actualizarProducto"]),
         
        actualizar(juguete) {
            this.actualizarProducto(juguete)
        }

    },
}
</script>