<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <div class="container-fluid">
                <router-link class="navbar-brand text-warning fw-bold" to="/">Otto Klauss</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Inicio</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/editar">Editar</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/agregar">Agregar</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>


<script>

export default {
    name: "Nav"
}
</script>