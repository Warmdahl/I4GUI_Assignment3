<template>
    <div>
        <form>
            <label>First name</label>
            <md-input v-model="fname"></md-input>
            <label>Last name</label>
            <md-input v-model="lname"></md-input>
            <label>Email</label>
            <md-input v-model="email"></md-input>
            <label>Phone nr</label>
            <md-input v-model="phonenr"></md-input>
            <label>Addres Line 1</label>
            <md-input v-model="phonenr"></md-input>
            <label>Addres Line 2</label>
            <md-input v-model="phonenr"></md-input>
            <label>Zip code</label>
            <md-input v-model="phonenr"></md-input>
            <label>City</label>
            <md-input v-model="phonenr"></md-input>
            <label>Country</label>
            <md-input v-model="phonenr"></md-input>
            <label>Birth date</label>
            <md-input v-model="phonenr"></md-input>
            <label>Nationality</label>
            <md-input v-model="phonenr"></md-input>
            <label>Height</label>
            <md-input v-model="phonenr"></md-input>
            <label>Shoe size</label>
            <md-input v-model="phonenr"></md-input>
            <label>Hair color</label>
            <md-input v-model="phonenr"></md-input>
            <label>Eye color</label>
            <md-input v-model="phonenr"></md-input>
            <label>Comments</label>
            <md-input v-model="phonenr"></md-input>
            <label>Password</label>
            <md-input v-model="phonenr"></md-input>
        </form>
        </div>
</template>

<script>
    export default {
        name: 'opretmodel',
        props: {
            fname: 'Firstname',
            lname: 'LastName',
            email: '123@mail.dk',
            phonenr: '12345678'
        },
        methods: {
            login02Function() {
                var url = "https://localhost:44368/api/models";
                var data = {
                    firstname: this.fname,
                    lastname: this.lname,
                    email: this.email,
                    phonenr: this.phonenr
                };

                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: new Headers({ 'Content-Type': 'application/json' })
                }).then(res => res.json()).then((token) => {
                    localStorage.setItem("token", token.jwt);
                    router.push("/opretmodel")
                }).catch(error => alert("Error!!! " + error))
            }
        }
    };
</script>

<style scoped>
</style>