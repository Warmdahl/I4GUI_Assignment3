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
                        <label>Job Id</label>
                        <md-input v-model="JobId"></md-input>
                    </md-field>

                </md-card-content>

                <md-card-action>
                    <md-button type="submit" class="md-raised">Add Model</md-button>
                </md-card-action>

            </md-card>
        </form>
    </div>
</template>

<script>
    //import router from "../router";

    export default {
        name: 'AddModeltoJob',
        data: () => ({
            ModelId: 'ModelId',
            JobId: 'JobId',
        }),
        //methods: {
        //    submitFunction() {
        //        var url = "https://localhost:44368/api/Jobs/" + this.JobId + "/model/" + this.ModelId;
        //        var data = {
        //            ModelId: this.ModelId,
        //            JobId: this.JobId, 
        //        };

        //        fetch(url, {
        //            method: 'POST', // Or POST, PUT, DELETE
        //            credentials: 'include',
        //            headers: {
        //                'Authorization': 'Bearer ' + localStorage.getItem("token"),
        //                'Content-Type': 'application/json'
        //            },
        //        }).then(responseJson => {
        //            var items = JSON.parse(responseJson);
        //        })
        //            .catch(error => this.setState({
        //                isLoading: false,
        //                message: 'Something bad happened ' + error
        //            }));
        //    }
        //}
    };
</script>

<style scoped>
</style>