<template>
    <div>
        <Nav />
        <b-col cols="10" class="mx-auto mt-5 bg-light p-5 rounded-2 shadow">
            <h2 class="fw-bold">Añadir Nuevo Producto</h2>
            <label class="mt-3">Código</label>
            <b-form-input v-model="juguete.codigo"></b-form-input>
            <label class="mt-3">Nombre</label>
            <b-form-input v-model="juguete.nombre"></b-form-input>
            <label class="mt-3">Stock</label>
            <b-form-input type="number" v-model="juguete.stock"></b-form-input>
            <label class="mt-3">Precio</label>
            <b-form-input type="number" v-model="juguete.precio"></b-form-input>
            <b-button @click="agregar()" class="mt-4 col-6" variant="primary">Agregar</b-button>
        </b-col>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue"
import { mapActions } from 'vuex'

export default {
    name: "Agregar",
    components: {
        Nav,
    },
    data() {
        return {
            juguete: {
                codigo: "",
                nombre: "",
                stock: "",
                precio: "",
            },
        }
    },
    methods: {
        ...mapActions(["agregarNuevoJuguete"]),
        agregar() {
            const juguete = this.juguete
            if(!juguete.codigo || !juguete.nombre || !juguete.stock || !juguete.precio) return;
            this.agregarNuevoJuguete(juguete)
            alert("el producto ha sido agregado, revisa el catalogo para comprobar su existencia")
        }
    },
}
</script>