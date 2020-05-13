<template>
    <div>
        <form @submit.prevent="submitFunction">

            <label>First name</label>
            <md-input v-model="fname"></md-input>
            
            <label>Last name</label>
            <md-input v-model="lname"></md-input>
            
            <label>Email</label>
            <md-input v-model="email"></md-input>
            
            <label>Phone nr</label>
            <md-input v-model="phonenr"></md-input>
            
            <label>Addres Line 1</label>
            <md-input v-model="addresLine1"></md-input>
            
            <label>Addres Line 2</label>
            <md-input v-model="addresLine2"></md-input>
            
            <label>Zip code</label>
            <md-input v-model="zip"></md-input>
            
            <label>City</label>
            <md-input v-model="city"></md-input>
            
            <label>Country</label>
            <md-input v-model="country"></md-input>
            
            <label>Birth date</label>
            <md-input v-model="birthDate"></md-input>
            
            <label>Nationality</label>
            <md-input v-model="nationality"></md-input>
            
            <label>Height</label>
            <md-input v-model="height"></md-input>
            
            <label>Shoe size</label>
            <md-input v-model="shoeSize"></md-input>
            
            <label>Hair color</label>
            <md-input v-model="hairColor"></md-input>
            
            <label>Eye color</label>
            <md-input v-model="eyeColor"></md-input>
            
            <label>Comments</label>
            <md-input v-model="comments"></md-input>
            
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
        name: 'opretmodel',
        data: () => ({
            fname: 'Firstname',
            lname: 'LastName',
            email: '123@mail.dk',
            phonenr: '12345678',
            addresLine1: 'asdf',
            addresLine2: 'qwer',
            zip: '1234',
            city: 'asdftown',
            country: 'qwerland',
            birthDate: 'test',
            nationality: 'danglish',
            height: '2',
            shoeSize: '38',
            eyeColor: 'dark',
            comments: 'hej med dig',
            password: 'password123'
        }),
        methods: {
            submitFunction() {
                var url = "https://localhost:44368/api/models";
                var data = {
                    firstname: this.fname,
                    lastname: this.lname,
                    email: this.email,
                    phonenr: this.phonenr,
                    addresLine1: this.addresLine1,
                    addresLine2: this.addresLine2,
                    zip: this.zip,
                    city: this.city,
                    country: this.country,
                    birthDate: this.birthDate,
                    nationality: this.nationality,
                    height: this.height,
                    shoeSize: this.shoeSize,
                    eyeColor: this.eyeColor,
                    comments: this.comments,
                    password: this.password
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