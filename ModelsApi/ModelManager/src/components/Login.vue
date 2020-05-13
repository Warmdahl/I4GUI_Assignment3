<template>
    <div>
        <form @submit.prevent="login02Function">
            <md-field md-clearable>
                <label>Cleareable</label>
                <md-input v-model="username"></md-input>
            </md-field>

            <md-field>
                <label>Password toggle</label>
                <md-input v-model="password" type="password"></md-input>
            </md-field>

            <md-field :md-toggle-password="false">
                <label>Password field without toggle</label>
                <md-input v-model="password" type="password"></md-input>
            </md-field>
            <md-card-actions>
                <md-button type="submit" class="md-primary">login</md-button>
            </md-card-actions>
        </form>
    </div>
</template>

<script>
import router from "../router";

    
    export default {
        name: 'Login',
        data: () => ({
            username: 'Initial Value',
            password: 'mysecurepassword',
            url: './api/account/login'
        }),
        methods: {
            /*send() {
                fetch(this.url, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: 'test',
                        password: 'test'
                    }), headers: new Headers({ 'Content-Type': 'application/json' })
                }).then(res => res.json().then((token) => {
                    localStorage.setItem("token", token.jwt);
                )
            },*/
            login02Function() {
                var url = "https://localhost:44368/api/account/login";
                var data = {
                    email: this.username,
                    password: this.password,
                    oldPassword: this.password
                };

                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: new Headers({ 'Content-Type': 'application/json' })
                }).then(res => res.json()).then((token) => {
                    localStorage.setItem("token", token.jwt);
                    router.push("/opretmodel")
                }).catch(error => alert("Error!!! "+ error))
            }
        }
    }
    
</script>

<style>
    
</style>