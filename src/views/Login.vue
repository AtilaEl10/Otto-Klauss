<template>
    <div>
        <b-container>
            <b-row  style="height: 100vh">
                <b-col cols="12" md="6" class="m-auto border rounded-2 p-5 shadow">
                    <h2 class="fw-bold">Ingresar</h2>
                    <b-form-group label="Correo electrónico:" description="Introduzca su correo" class="fw-bold text-start mt-4">
                        <b-form-input v-model="form.email" type="email" placeholder="Correo Electrónico" required></b-form-input>
                    </b-form-group>

                    <b-form-group label="Contraseña" description="Introduzca su contraseña" class="mt-4 fw-bold text-start">
                        <b-form-input v-model="form.pass" type="password" placeholder="Contraseña"></b-form-input>
                    </b-form-group>

                    <b-button @click="login" type="button" variant="success" class="mt-4 mx-2">Ingresar</b-button>
                    <b-button @click="limpiar" variant="outline-primary" class="mt-4 mx-2">Limpiar</b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import firebase from "firebase"

export default {
    name: "Login",
    data() {
        return {
            form: {
                email: "",
                pass: "",
            },
        };
    },
    methods: {
       async login() {
             if(!this.form && !this.form.email && !this.form.pass) return
             console.log(this.form.email);
             console.log(this.form.pass);
            try {
                console.log("hola");
                const request = await firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.pass)
                console.log("Hola de neuvo");
                // if(request && request !== null) this.$router.push("/home")
                console.log(request);
                if(request && request !== null) localStorage.setItem("login", "logueado")

            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Codigo de error", errorCode);
                console.log("Mensaje de error", errorMessage);
            }
        },
        /*
        login() {
            console.log(this.form.email);
            console.log(this.form.pass);
            
            if (!this.form && !this.form.email && !this.form.pass) return;
            firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.pass)
            .then(user =>{
                console.log("paso la info");
                console.log(user);
                this.form.pass = ""
                this.form.email = ""
            }).catch (error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Codigo de error", errorCode);
                console.log("Mensaje de error", errorMessage);
            })
        },
        */
        limpiar(){
            if(!this.form) return;
            this.form.email = "";
            this.form.pass = "";
        },
    },
}
</script>
