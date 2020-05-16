<template>
    <div>
        <form @submit.prevent="callJob">

            <md-card class="md-layout-item md-size-50 md-small-size-100">

                <md-card-header>
                    <div class="md-title">Delete Model From Job</div>
                </md-card-header>

                <md-card-content>

                    <label>Job</label>
                    <md-field>
                        <select v-model="selectedJob">
                            <option disabled value="">Please select option</option>
                            <option v-for="job in jobs" :key="job.efJobId" v-bind:value="job.efJobId">{{ job.customer }}</option>
                        </select>
                    </md-field>

                    <div class="md-title">{{specificjobModel.models[0].firstName}}</div>

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

        name: 'DeleteModel_FromJob',
        data: () => ({
            selectedModel: 1,
            i: 0,
            selectedJob: 1,
            models: null,
            jobs: null,
            response: null,
            specificjobModel: ({
                models: [{
                    email: "default@m.dk",
                    firstName: "default first name",
                    lastName: "default last name",
                    phoneNo: "+00 00 00 00",
                }, {
                    email: "default22@m.dk",
                    firstName: "default22 first name",
                    lastName: "default22 last name",
                    phoneNo: "+00 00 00 22",
                }]
            })
        }),
        mounted() {
            this.loadData();

        },
        methods: {
            

            callJob()
            {

                //console.log(this.specificjobModel)


                fetch("https://localhost:44368/api/jobs/" + this.selectedJob, {
                    method: 'GET',
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    })
                }).then(responseJson => responseJson.json())
                    .then(data => {
                    this.specificjobModel = data
                    }).catch(error => alert("Error!!! " + error));
            },


            submitFunction() {


                //var url = "https://localhost:44368/api/jobs/" + this.selectedJob + "/model/" + this.selectedModel;
                //fetch(url, {
                //    method: 'DELETE',
                //    credentials: 'include',
                //    headers: new Headers({
                //        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                //        'Content-Type': 'application/json'
                //    })
                //}).then(responseJson => responseJson.json())
                //    .then(data => { this.response = data })
                //    .catch(error => alert("Error!!! " + error));
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