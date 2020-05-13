<template>
    <div>
        <form @submit.prevent="submitFunction">

            <md-card class="md-layout-item md-size-50 md-small-size-100">

                <md-card-header>
                    <div class="md-title">Opret Job</div>
                </md-card-header>

                <md-card-content>

                    <md-field>
                        <label>First name</label>
                        <md-input v-model="fname"></md-input>
                    </md-field>

                    <md-field>
                        <label>Last name</label>
                        <md-input v-model="lname"></md-input>
                    </md-field>

                    <md-field>
                        <label>Email</label>
                        <md-input v-model="email"></md-input>
                    </md-field>

                    <md-field>
                        <label>Password</label>
                        <md-input v-model="password"></md-input>
                    </md-field>

                </md-card-content>

                <md-card-action>
                    <md-button type="submit" class="md-raised">submit</md-button>
                </md-card-action>

            </md-card>
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