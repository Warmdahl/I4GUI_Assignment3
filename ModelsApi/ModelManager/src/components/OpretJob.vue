<template>
    <div>
        <form>
            <label>Job Id</label>
            <md-input v-model="jobid"></md-input>
            <label>Customer</label>
            <md-input v-model="customer"></md-input>
            <label>StartDate</label>
            <md-input v-model="sdate"></md-input>
            <label>Days</label>
            <md-input v-model="days"></md-input>
            <label>Location</label>
            <md-input v-model="location"></md-input>
            <label>Comments</label>
            <md-input v-model="comments"></md-input>
            <label>Models</label>
            <md-input v-model="models"></md-input>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'opretjob',
        props: {
            jobid: 'JobId',
            customer: 'Customer',
            sdate: 'StartDate',
            days: 'Days',
            location: 'Location',
            comments: 'Comments',
            models: 'Models'
        },
        methods: {
            login02Function() {
                var url = "https://localhost:44368/api/models";
                var data = {
                    jobid: this.jobid,
                    customer: this.customer,
                    sdate: this.sdate,
                    days: this.days,
                    location: this.location,
                    comments: this.comments,
                    models: this.models
                };

                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: new Headers({ 'Content-Type': 'application/json' })
                }).then(res => res.json()).then((token) => {
                    localStorage.setItem("token", token.jwt);
                    router.push("/opretjob")
                }).catch(error => alert("Error!!! " + error))
            }
        }
    };
</script>

<style scoped>
</style>