<template>
    <div>
        <b-navbar class="navbar-dark bg-success px-5" toggleable="sm">

            <b-navbar-brand>
                <router-link class="text-light fw-bold nav-link" to="/">Otto Klauss</router-link>
            </b-navbar-brand>

            <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="ms-auto">
                <b-nav-text>
                    <router-link class="nav-link" to="/">Inicio</router-link>
                </b-nav-text>
                <b-nav-text>
                    <router-link class="nav-link" to="/editar">Editar</router-link>
                </b-nav-text>
                <b-nav-text>
                    <router-link class="nav-link" to="/agregar">Agregar</router-link>
                </b-nav-text>
                <b-nav-text>
                    <b-button @click="logout()" class="btn-warning px-3 ms-3 text-dark fw-bold">Cerrar Sesión
                    </b-button>
                </b-nav-text>
            </b-navbar-nav>
            </b-collapse>
            
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        </b-navbar>
    </div>
</template>


<script>
import firebase from "firebase"

export default {
    name: "Nav",
    methods: {
        async logout() {
            try {
                await firebase.auth().signOut()
                localStorage.setItem("login", "")
                this.$router.push("/login")
            } catch (error) {
                console.log("No se ha podido cerrar sesion", error);
            }
        }
    },
}
</script>

<style scoped>
    .nav-linkk {
        transition: all 1s
    }
    .nav-link:hover {
        border-bottom: 1px solid yellow;
    }
</style>