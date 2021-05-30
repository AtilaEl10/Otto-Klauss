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
    editar: false, //para desplegar formulario de edicion de prodctos
    updateProducto: {
      nombre: "",
      stock: 0,
      precio: 0,
    }
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
    activarEdicion(state) {
      state.editar = true
    },
    editarProducto(state, payload) {
      const juguete = payload
      if(!juguete) return
      state.updateProducto = juguete
    },

    crearJuguete(state, payload) {
      const repetido = state.productos.find((juguete) => juguete.id === payload.id)
      if(!repetido) state.productos.push(payload)
    }
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
      
      commit("eliminarProducto", juguete)
    },
    async actualizarProducto({commit}, payload) {
      const juguete = payload
      if(!juguete) return
      const idFirebase = juguete.id
      try {
        const request = await firebase.firestore().collection("juguetes").doc(idFirebase).update({
          stock: juguete.stock,
          nombre: juguete.nombre,
          precio: juguete.precio
        })
        console.log(request);
      } catch (error) {
        console.log("Error al actualizar el producto", error);
      }
      commit()
    },
    async agregarNuevoJuguete({commit}, payload) {
      const db = firebase.firestore()
      const juguete = payload
      if(!juguete) return

      commit("crearJuguete", juguete)
      await db.collection("juguetes").add(juguete)
    }
  },
});
