<template>
    <div>
        <form @submit.prevent="submitFunction">

            <md-card class="md-layout-item md-size-50 md-small-size-100">

                <md-card-header>
                    <div> class="md-title">Delete Model from Job</div>
                </md-card-header>

                <md-card-content>

                    <md-field>
                        <label>Model Id</label>
                        <md-input v-model="ModelId"></md-input>
                    </md-field>

                    <md-field>
                        <label>Job Id</label>
                        <md-input v-model="JobId"></md-input>
                    </md-field>

                </md-card-content>

                <md-card-action>
                    <md-button typeof="submit" class="md-raised">Delete Model</md-button>
                </md-card-action>

            </md-card>
        </form>
    </div>
</template>

<script>
    //import router from "../router";

    export default {
        name: 'DeleteModelfromJob',
        data: () => ({
            ModelId: 'ModelId',
            JobId: 'JobId',
        }),
        methods: {
            submitFunction() {
                var url = "https://localhost:44368/api/Jobs/" + this.JobId + "/model/" + this.ModelId; //Skal kigges p�!!
                var data = {
                    ModelId: this.ModelId,
                    JobId: this.JobId,
                };

                fetch(url, {
                    method: 'DELETE',
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

<style scoped>
</style>