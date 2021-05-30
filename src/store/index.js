import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [],
    titulos: [
      { label: "ID", key: "codigo" },
      { label: "Nombre", key: "nombre" },
      { label: "Stock", key: "stock" },
      { label: "Precio", key: "precio" },
    ],
  },

  mutations: {
    guardarProductos(state, payload) {
      const juguete = payload
      if (!juguete) return
      state.productos.push(juguete)
    },
    eliminarProducto(state, payload){
      const juguete = payload;
      if(!juguete) return
      const index = state.productos.indexOf(juguete)
      state.productos.splice(index, 1)
    },
  },

  actions: {
    async getProductos({commit}) {
      const db = firebase.firestore()
      try {
        const request = await db.collection("juguetes").get()
        if (request) {
          request.docs.forEach((juguete) => {
            const obj = juguete.data()
            const id = juguete.id
            obj.id = id
            commit("guardarProductos", obj);
          });
        }
      } catch (error) {
        console.log("Error en la obtencion de la Data de Firebase", error);
      }
    },
    async borrarProducto({commit}, payload) {
      // Se borra de Firebase
      const juguete = payload;
      if(!juguete) return
      // const idFirebase = juguete.id

      commit("eliminarProducto", juguete)
    }

  },
});
