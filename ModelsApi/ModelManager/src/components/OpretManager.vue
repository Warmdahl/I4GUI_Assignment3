<template>
    <div>
        <form @submit.prevent="submitFunction">

            <label>First name</label>
            <md-input v-model="fname"></md-input>

            <label>Last name</label>
            <md-input v-model="lname"></md-input>

            <label>Email</label>
            <md-input v-model="email"></md-input>

            <label>Password</label>
            <md-input v-model="password"></md-input>

            <md-card-action>
                <md-button type="submit">submit</md-button>
            </md-card-action>
        </form>
    </div>
</template>

<script>
    import router from "../router";

    export default {
        name: 'opretmanager',
        data: () => ({
            fname: 'Firstname',
            lname: 'LastName',
            email: '123@mail.dk'
        }),
        methods: {
            submitFunction() {
                var url = "https://localhost:44368/api/manager";
                var data = {
                    firstname: this.fname,
                    lastname: this.lname,
                    email: this.email
                };

                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: new Headers({ 'Content-Type': 'application/json' })
                }).then(res => res.json()).then((token) => {
                    localStorage.setItem("token", token.jwt);
                    router.push("/opretmanager")
                }).catch(error => alert("Error!!! " + error))
            }
        }
    };
</script>

<style scoped>
</style>