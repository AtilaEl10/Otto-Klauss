<template>
  <div class="home">
    <Nav />
    <b-container>
      <b-row style="height: 100vh">
        <b-col>
          <h2 class="my-5 bg-light fw-bold">Tabla de datos</h2>
          <Tabla :filas="productos" :encabezados="titulos" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Tabla from "@/components/Tabla.vue"
import Nav from "@/components/Nav.vue"

import { mapState } from "vuex"


export default {
  name: "Home",
  
  components: {
    Tabla,
    Nav
  },
  computed: {
    ...mapState(["productos", "titulos"])
  },
};
</script>
