<template>
    <div>
        <form @submit.prevent="submitFunction">

            <md-card class="md-layout-item md-size-50 md-small-size-100">

                <md-card-header>
                    <div class="md-title">Opret Model</div>
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
                        <label>Phone nr</label>
                        <md-input v-model="phonenr"></md-input>
                    </md-field>

                    <md-field>
                        <label>Addres Line 1 </label>
                        <md-input v-model="addresLine1"></md-input>
                    </md-field>

                    <md-field>
                        <label>Addres Line 2</label>
                        <md-input v-model="addresLine2"></md-input>
                    </md-field>

                    <md-field>
                        <label>Zip code</label>
                        <md-input v-model="zip"></md-input>
                    </md-field>

                    <md-field>
                        <label>City</label>
                        <md-input v-model="city"></md-input>
                    </md-field>

                    <md-field>
                        <label>Country</label>
                        <md-input v-model="country"></md-input>
                    </md-field>

                    <md-field>
                            <md-datepicker v-model="birthDate" background="007AFF">
                                <label>Birth date</label>
                            </md-datepicker>
                    </md-field>

                    <md-field>
                        <label>Nationality</label>
                        <md-input v-model="nationality"></md-input>
                    </md-field>

                    <md-field>
                        <label>Height</label>
                        <md-input v-model="height"></md-input>
                    </md-field>

                    <md-field>
                        <label>Shoe size</label>
                        <md-input v-model="shoeSize"></md-input>
                    </md-field>

                    <md-field>
                        <label>Hair color</label>
                        <md-input v-model="hairColor"></md-input>
                    </md-field>

                    <md-field>
                        <label>Eye color</label>
                        <md-input v-model="eyeColor"></md-input>
                    </md-field>

                    <md-field>
                        <label>Comments</label>
                        <md-input v-model="comments"></md-input>
                    </md-field>

                    <md-field>
                        <label>Password</label>
                        <md-input v-model="password"></md-input>
                    </md-field>

                </md-card-content>

                <md-card-actions>
                    <md-button type="submit" class="md-raised">submit</md-button>
                </md-card-actions>

            </md-card>
        </form>
    </div>
</template>

<script>
    import router from "../router";

    export default {
        name: "OpretModel",
        data: () => ({
            fname: "Firstname",
            lname: "LastName",
            email: "124@mail.dk",
            phonenr: "12345678",
            addresLine1: "asdf",
            addresLine2: "qwer",
            zip: "1234",
            city: "asdftown",
            country: "qwerland",
            birthDate: "2020-02-02",
            nationality: "danglish",
            height: 2.1,
            shoeSize: 38,
            hairColor: "brown",
            eyeColor: "dark",
            comments: "hej med dig",
            password: "password123",
            url: "./api/models"
        }),
        methods: {
            submitFunction() {
                var url = "https://localhost:44368/api/models";
                var data = {
                    "firstName": this.fname,
                    "lastName": this.lname,
                    "email": this.email,
                    "phoneNo": this.phonenr,
                    "addresLine1": this.addresLine1,
                    "addresLine2": this.addresLine2,
                    "zip": this.zip,
                    "city": this.city,
                    "country": this.country,
                    "birthDate": this.birthDate,
                    "nationality": this.nationality,
                    "height": this.height,
                    "shoeSize": this.shoeSize,
                    "hairColor": this.hairColor,
                    "eyeColor": this.eyeColor,
                    "comments": this.comments,
                    "password": this.password
                };

                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    })
                }).then(router.push("/")
                ).catch(error => alert("Error!!! " + error))
            }
        }
    }
</script>

<style>
</style>