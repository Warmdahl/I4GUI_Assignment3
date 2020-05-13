<template>
    <div>
        <form @submit.prevent="submitFunction">

            <md-card class="md-layout-item md-size-50 md-small-size-100">

                <md-card-header>
                    <div class="md-title">Opret Job</div>
                </md-card-header>

                <md-card-content>

                    <md-field>
                        <label>Customer</label>
                        <md-input v-model="customer"></md-input>
                    </md-field>

                    <md-field>
                        <label>StartDate</label>
                        <md-input v-model="sdate"></md-input>
                    </md-field>

                    <md-field>
                        <label>Days</label>
                        <md-input v-model="days"></md-input>
                    </md-field>

                    <md-field>
                        <label>Location</label>
                        <md-input v-model="location"></md-input>
                    </md-field>

                    <md-field>
                        <label>Comments</label>
                        <md-input v-model="comments"></md-input>
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
        name: 'opretjob',
        data: () => ({
            customer: 'Customer',
            sdate: '2020-05-13T14:17:57.148Z',
            days: 'Days',
            location: 'Location',
            comments: 'Comments'
        }),
        methods: {
            submitFunction() {
                var url = "https://localhost:44368/api/Jobs";
                var data = {
                    "Customer": this.customer,
                    "Sdate": this.sdate,
                    "Days": this.days,
                    "Location": this.location,
                    "Comments": this.comments
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
    };
</script>

<style>
</style>