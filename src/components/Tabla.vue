<template >
    <div class="bg-light p-4">
        <b-table v-if="filas && encabezados" striped hover :fields="encabezados" :items="filas"></b-table>
    </div>
</template>


<script>

export default {
    name: "Tabla",
    props:{
        filas: {
            type: Array
        },
        encabezados: {
            type: Array
        },
    }
}
</script>