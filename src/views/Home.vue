<template>
  <div class="home">
    <Nav />
    <b-container>
      <b-row style="height: 100vh">
        <b-col>
          <h1 class="my-5">Tabla de datos</h1>
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
