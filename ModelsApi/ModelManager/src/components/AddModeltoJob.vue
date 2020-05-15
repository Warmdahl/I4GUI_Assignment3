<template>
    <div>
        <form @submit.prevent="submitFunction">

            <md-card class="md-layout-item md-size-50 md-small-size-100">

                <md-card-header>
                    <div class="md-title">Add Model to Job</div>
                </md-card-header>

                <md-card-content>

                    <md-field>
                        <label>Model Id</label>
                        <md-input v-model="ModelId"></md-input>
                    </md-field>

                    <md-field>
                        
                            <li v-for="model in this.models" :key="model.efModelId">
                        <label value={model.firstName}></label>
                            </li>
                        
                    </md-field>

                    <md-field>
                        <label>Job Id</label>
                        <md-input v-model="JobId"></md-input>
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
            ModelId: 1,
            JobId: 1,
            models: null,
            response: null
           
        }),
        mounted() {
            this.loadData02();
        },
        methods: {
            submitFunction() {
                var url = "https://localhost:44368/api/jobs/" + this.JobId + "/model/" + this.ModelId;
                /*var data = {
                    "ModelId": this.ModelId,
                    "JobId": this.JobId
                };*/

                fetch(url, {
                    method: 'POST',
                    //body: JSON.stringify(data),
                    credentials: 'include',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    })
                }).then(responseJson => {
                    this.response = JSON.parse(responseJson);
                }).catch(error => alert("Error " + error));
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
                    .then(data => (this.models = data.total))
                .catch(error => alert("Error!!! " + error));
            },

            loadData02() {
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
                .catch(error => alert("Server error: " + error))
            }
        }
    };
</script>

<style scoped>
</style>