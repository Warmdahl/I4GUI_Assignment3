<template>
    <div>
        <form @submit.prevent="submitFunc">

            <md-card class="md-layout-item md-size-50 md-small-size-100">

                <md-card-header>
                    <div class="md-title">Add Expenses to Job</div>
                </md-card-header>

                <md-card-content>

                    <label>Job</label>
                    <md-field>
                        
                        <select v-model="selectedJob" style="background-color:black; color:white">
                            <option disabled value="">Please select option</option>
                            <option v-for="job in jobs" :key="job.efJobId" v-bind:value="job.efJobId">{{ job.customer }}</option>
                        </select>
                    </md-field>

                    <md-field>
                        <label>Amount</label>
                        <md-input v-model="amount"></md-input>
                    </md-field>

                    <md-field>
                        <md-datepicker v-model="date" background="007AFF">
                            <label>Date</label>
                        </md-datepicker>
                    </md-field>

                    <md-field>
                        <label>Comment</label>
                        <md-input v-model="comment"></md-input>
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
    export default {
        name: 'AddExpenseToJob',
        data: () => ({
            id: null,
            selectedJob: null,
            jobs: null,
            amount: 5.6,
            date: "2020-01-01",
            comment: "text"


        }),
        mounted() {
            let jwt = localStorage.getItem("token")
            console.log(jwt)
            let jwtData = jwt.split('.')[1]
            console.log(jwtData)
            let decoded = window.atob(jwtData)
            console.log(decoded)
            let decodedData = JSON.parse(decoded)
            this.id = decodedData['ModelId']
            console.log(this.id)
            this.loadJobs()

        },
        methods: {

            loadJobs() {
                fetch("https://localhost:44368/api/jobs", {
                    method: 'GET',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    })
                }).then(responseJson => responseJson.json())
                    .then(data => { this.jobs = data })
                    .then(console.log(this.jobs))
                    .catch(error => alert("Error!!! " + error));
            },
            submitFunc() {
                var data = {
                    modelId: Number(this.id),
                    jobId: this.selectedJob,
                    date: this.date,
                    text: this.text,
                    amount: Number(this.amount)
                };
                fetch("https://localhost:44368/api/expenses", {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify(data),
                    headers: new Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    })
                }).then(responseJson => responseJson.json())
                    .catch(error => alert("Error!!! " + error));
            }
        }
    }
</script>

<style>
</style>