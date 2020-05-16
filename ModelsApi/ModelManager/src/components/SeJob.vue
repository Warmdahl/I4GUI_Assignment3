<template>
    <div>
        <md-card class="md-layout-item md-size-59 md-small-size-100">

            <md-card-header>
                <div class="md-title">Se Job</div>
            </md-card-header>

            <md-card-content>

                <label>Job</label>
                <md-field>
                    
                    
                        <md-table>
                            
                                <md-table-row>
                                    <md-table-head>Customer</md-table-head>
                                    <md-table-head>Start date</md-table-head>
                                    <md-table-head>Number of days</md-table-head>
                                    <md-table-head>location</md-table-head>
                                    <md-table-head>Comment</md-table-head>
                                </md-table-row>
                            
                            
                            <md-table-row v-for="job in jobs" v-bind:key="job.efJobId">
                                <md-table-cell>{{job.customer}}</md-table-cell>
                                <md-table-cell>{{job.startDate}}</md-table-cell>
                                <md-table-cell>{{job.days}}</md-table-cell>
                                <md-table-cell>{{job.location}}</md-table-cell>
                                <md-table-cell>{{job.comments}}</md-table-cell>

                            </md-table-row>
                            
                        </md-table>
                   
                </md-field>

            </md-card-content>
        </md-card>
    </div>
</template>

<script>
    //import router from "../router";

    export default {
        name: 'SeJob',

        data: () => ({
            jobs: null,
            models: null
        }),

        mounted() {
            this.loadJobs();
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
                    .catch(error => alert("Error!!! " + error));
            }
        }
    };
        
    
</script>

<style>
</style>