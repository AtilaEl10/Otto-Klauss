<template>
  <div class="home">
    <Nav />
    <b-container>
      <b-row style="height: 100vh">
        <b-col>
          <h2 class="my-5 bg-light fw-bold">Editar o Eliminar Productos</h2>
          <TablaEdit :filas="productos" :encabezados="titulos" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TablaEdit from "@/components/TablaEdit.vue"
import Nav from "@/components/Nav.vue"

import { mapState } from "vuex"


export default {
  name: "Home",
  
  components: {
    TablaEdit,
    Nav,
  },
  computed: {
    ...mapState(["productos", "titulos"])
  },
  created(){
    this.titulos.push({ label: "Acciones", key: "actions" })
  }
};
</script>
