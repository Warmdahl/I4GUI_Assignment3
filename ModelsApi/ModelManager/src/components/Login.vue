<template>
    <div>
        <form @submit.prevent="login02Function">
            <md-card class="md-layout-item md-size-50 md-small-size-100">

                <md-card-header>
                    <div class="md-title">Login</div>
                </md-card-header>

                <md-card-content>
                    <md-field md-clearable>
                        <label>Username</label>
                        <md-input v-model="username"></md-input>
                    </md-field>

                    <md-field>
                        <label>Password</label>
                        <md-input v-model="password" type="password"></md-input>
                    </md-field>
                </md-card-content>

                <md-card-actions>
                    <md-button type="submit" class="md-raised">login</md-button>
                </md-card-actions>

            </md-card>
        </form>
    </div>
</template>

<script>
    import router from "../router";
    //import Vue from "vue";
    //Vue.forceUpdate()
    
    export default {
        name: 'Login',
        data: () => ({
            username: 'Enter Email',
            password: 'EnterPassword',
            url: './api/account/login'
        }),
        methods: {
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
                    router.push("/sejob").
                    then(this.$router.go())
                }).catch(error => alert("Error!!! "+ error))
            }
        }
    }
    
</script>

<style>
    
</style>