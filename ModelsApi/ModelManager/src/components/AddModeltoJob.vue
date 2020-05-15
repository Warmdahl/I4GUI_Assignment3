<template>
    <div>
        <form @submit.prevent="submitFunction">

            <md-card class="md-layout-item md-size-50 md-small-size-100">

                <md-card-header>
                    <div class="md-title">Add Model to Job</div>
                </md-card-header>

                <md-card-content>

                    <label>Model</label>
                    <md-field>
                        <select v-model="selectedModel">
                            <option disabled value="">Please select option</option>
                            <option v-for="model in models" :key="model.efModelId" v-bind:value="model.efModelId">{{model.firstName}}</option>
                        </select>
                    </md-field>

                    <label>Job</label>
                    <md-field>
<<<<<<< HEAD
                        <label>Job Id</label>
                        <md-input v-model="JobId"></md-input>
=======
                        <select v-model="selectedJob">
                            <option disabled value="">Please select option</option>
                            <option v-for="job in jobs" :key="job.efJobId" v-bind:value="job.efJobId">{{ job.customer }}</option>
                        </select>
>>>>>>> master
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
    //import router from "../router";

    export default {
        
        name: 'AddModeltoJob',
        data: () => ({
            selectedModel: 1,
            i: 0,
            selectedJob: 1,
            models: null,
            jobs: null,
            response: null
        }),

        mounted() {
            this.loadData();
<<<<<<< HEAD
        },
        methods: {
            submitFunction() {
                var url = "https://localhost:44368/api/jobs/" + this.JobId + "/model/" + this.ModelId;
                var data = {
                    "ModelId": this.ModelId,
                    "JobId": this.JobId
                };

                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
=======
            
        },
        methods: {
            submitFunction() {
                var url = "https://localhost:44368/api/jobs/" + this.selectedJob + "/model/" + this.selectedModel;

                fetch(url, {
                    method: 'POST',
>>>>>>> master
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    })
<<<<<<< HEAD
=======
                }).then(responseJson => {
                    this.response = JSON.parse(responseJson)
>>>>>>> master
                }).catch(error => alert("Error " + error));
            },

            loadData() {
                var url = "https://localhost:44368/api/models";
<<<<<<< HEAD
=======
                fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    })
                }).then(responseJson => responseJson.json())
                    .then(data => { this.models = data})
                    .catch(error => alert("Error!!! " + error));
>>>>>>> master

                fetch("https://localhost:44368/api/jobs", {
                    method: 'GET',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    })
                }).then(responseJson => responseJson.json())
                    .then(data => { this.jobs = data })
                    .catch(error => alert("Error!!! " + error));
            }
        }
    };
</script>

<style scoped>
</style>