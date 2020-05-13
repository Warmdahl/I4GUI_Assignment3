<template>
    <div>
        <form>
            <label>First name</label>
            <md-input v-model="fname"></md-input>
            <label>Last name</label>
            <md-input v-model="lname"></md-input>
            <label>Email</label>
            <md-input v-model="email"></md-input>
            <label>Password</label>
            <md-input v-model="password"></md-input>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'opretmanager',
        props: {
            fname: 'Firstname',
            lname: 'LastName',
            email: '123@mail.dk'
        },
        methods: {
            login02Function() {
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