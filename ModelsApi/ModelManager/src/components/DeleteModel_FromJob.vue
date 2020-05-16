<template>
    <div>
        <form @submit.prevent="callJob">

            <md-card class="md-layout-item md-size-50 md-small-size-100">

                <md-card-header>
                    <div class="md-title">Delete Model From Job</div>
                </md-card-header>

                <md-card-content>

                    <div class="md-subheading">Job</div>
                    <div class="md-caption">Select a job to view the moddels assigned the job.</div>

                    <md-field>
                        <select v-model="selectedJob" style="background-color: black; color:white" v-on:click="callJob">
                            <option disabled value="">Please select Job</option>
                            <option v-for="job in jobs" :key="job.efJobId" v-bind:value="job.efJobId">{{ job.customer }} </option>
                        </select>
                    </md-field>
                </md-card-content>

            </md-card>
        </form>
        <form @submit.prevent="deleteModelFromJobFunction">
            <md-card class="md-layout-item md-size-50 md-small-size-100">

                <md-card-content>
                    <div class="md-subheading">Model</div>

                    <div v-if="(jobModels.models != 0)&&(jobModels.models.length > 0)">

                        <div v-if="(jobModels.models.length > 1)">
                            <div class="md-caption">There are {{jobModels.models.length}} Models assigned this job.</div>
                        </div>
                        <div v-else>
                            <div class="md-caption">There is {{jobModels.models.length}} Model assigned this job.</div>
                        </div>

                        <div class="md-caption">To delete a model from the job select one from the drop down below.</div>

                        <md-field>
                            <select v-model="selectedModel" style="background-color: black; color:white">
                                <option disabled value="">Please select Model</option>
                                <option v-for="model in jobModels.models" :key="model.email" v-bind:value="model.email">{{model.firstName}}</option>
                            </select>
                        </md-field>

                        <md-card-actions>
                            <md-button type="submit" class="md-raised">Delete model from job</md-button>
                        </md-card-actions>

                    </div>
                    <div v-else>
                        <div class="md-caption">There are no Models assigned this job.</div>
                        <!--<md-field>
                            <select style="background-color: black; color:white">
                                <option disabled value="">No Model assigned to job</option>
                            </select>
                        </md-field>-->
                    </div>
                </md-card-content>
            </md-card>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'DeleteModel_FromJob',

        data: () => ({
            selectedModel: 1,
            i: 0,
            selectedJob: 1,
            models: null,
            jobs: null,
            response: null,
            jobModels: ({
                models: [
                    //{
                //    email: "default@m.dk",
                //    firstName: "default first name",
                //    lastName: "default last name",
                //    phoneNo: "+00 00 00 00",
                //}
                ]
            }),
        }),
        mounted() {
            this.loadData();
            this.callJob();
        },
        methods: {
            

            callJob()
            {
                fetch("https://localhost:44368/api/jobs/" + this.selectedJob, {
                    method: 'GET',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    })
                }).then(responseJson => responseJson.json())
                    .then(data => {
                        this.jobModels = data
                    }).catch(error => alert("Error!!! " + error));
            },

            async deleteModelFromJobFunction()
            {
                var noModels = this.models.length;
                var selectedModelID;

                for (var i=0; i < noModels; i++)
                {
                    if (this.models[i].email == this.selectedModel)
                    {
                        selectedModelID = this.models[i].efModelId;
                    }
                }

                var url = "https://localhost:44368/api/jobs/" + this.selectedJob + "/model/" + selectedModelID;
                await fetch(url, {
                    method: 'DELETE',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    })
                }).catch(error => alert("Error!!! " + error));

                this.callJob();
            },

            loadData() {
                var url = "https://localhost:44368/api/models";
                fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    })
                }).then(responseJson => responseJson.json())
                    .then(data => { this.models = data })
                    .catch(error => alert("Error!!! " + error));

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
    }
</script>

<style scoped>
</style>