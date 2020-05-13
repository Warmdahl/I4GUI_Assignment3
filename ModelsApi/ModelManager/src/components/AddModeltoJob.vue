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
                        
                            <label>{{ models[0].firstName }}</label>
                        
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
            models: []
        }),
        created:function() {
            this.loadData();
        },
        methods: {
            submitFunction() {
                var url = "https://localhost:44368/api/Jobs/" + this.JobId + "/model/" + this.ModelId;
                var data = {
                    ModelId: this.ModelId,
                    JobId: this.JobId, 
                };

                fetch(url, {
                    method: 'POST', // Or POST, PUT, DELETE
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    },
                    body: Json.stringify(data)
                }).then(responseJson => {
                    data = JSON.parse(responseJson);
                })
                    .catch(error => this.setState({
                        isLoading: false,
                        message: 'Something bad happened ' + error
                    }));
            },

            loadData() {
                var url = "https://localhost:44368/api/models";
                
                fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    },
                })
                    .then(responseJson => {this.models == responseJson.data })
                    .catch(error => alert("Error!!! " + error));
            }
        }
    };
</script>

<style scoped>
</style>