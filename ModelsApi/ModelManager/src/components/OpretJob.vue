<template>
    <div>
        <form @submit.prevent="submitFunction">

            <md-card class="md-layout-item md-size-55 md-small-size-50">

                <md-card-header>
                    <div class="md-title">Opret Job</div>
                </md-card-header>

                <md-card-content>

                    <md-field>
                        <label>Customer</label>
                        <md-input v-model="customer"></md-input>
                    </md-field>

                    <md-field>
                        <div class="block md-layout-item" md-size-100>
                            <md-datepicker v-model="sdate" background="007AFF">
                                <label>Start date</label>
                            </md-datepicker>
                        </div>
                    </md-field>

                    <md-field>
                        <label>Days</label>
                        <md-input v-model="days" type="number"></md-input>
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
        name: 'opretjob',
        data: () => ({
            customer: 'Customer',
            sdate: '2020-05-13',
            days: 1,
            location: 'Location',
            comments: 'Comments'
        }),
        methods: {
            submitFunction() {
                var url = "https://localhost:44368/api/Jobs";
                var data = {
                    "customer": this.customer,
                    "startDate": this.sdate,
                    "days": this.days,
                    "location": this.location,
                    "comments": this.comments
                };

                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    })
                }).then(router.push("/sejob")
                ).catch(error => alert("Error!!! " + error))
            }
        }
    };
</script>

<style>
</style>