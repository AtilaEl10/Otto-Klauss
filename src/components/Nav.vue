<template>
    <div>
        <b-navbar class="navbar-dark bg-dark px-5" toggleable="sm">

            <b-navbar-brand>
                <router-link class="text-warning fw-bold" to="/">Otto Klauss</router-link>
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
                    <router-link class="nav-link" to="/">Logout</router-link>
                </b-nav-text>
            </b-navbar-nav>
            </b-collapse>
            
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        </b-navbar>
    </div>
</template>


<script>

export default {
    name: "Nav"
}
</script>