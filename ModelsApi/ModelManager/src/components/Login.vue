<template>
    <div>
        <form @submit.prevent="send">
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
                <md-button type="submit" v-model="login_btn" class="md-primary">login</md-button>
            </md-card-actions>
        </form>
    </div>
</template>

<script>
    
    export default {
        name: 'Login',
        data: () => ({
            username: 'Initial Value',
            password: 'mysecurepassword',
            url: './api/account/login'
        }),
        methods: {
            send() {
                fetch(this.url, {
                    method: 'POST',
                    body: JSON.stringify(({
                        email: 'test',
                        password: 'test'
                    }),
                    headers: new Headers({'Content-Type': 'application/json'})
                }).then(res => res.json().then((token) => {
                    localStorage.setItem("token", token.jwt);
                ).catch(error => console.error('Error:', error))
            }
        }
    }
    
</script>

<style>
    
</style>