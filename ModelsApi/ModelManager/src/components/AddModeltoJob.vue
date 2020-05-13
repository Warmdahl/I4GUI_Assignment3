<template>
    <div>
        <form @submit.prevent="submitFunction">

            <label>Model Id</label>
            <md-input v-model="ModelId"></md-input>

            <label>Job Id</label>
            <md-input v-model="JobId"></md-input>
        </form>
    </div>
</template>

<script>
    import router from "../router";

    export default {
        name: 'AddModeltoJob',
        data: () => ({
            ModelId: 'ModelId',
            JobId: 'JobId',
        }),
        methods: {
            submitFunction() {
                var url = "https://localhost:44368/api/Jobs/(JobId)/model/(ModelId)";
                var data = {
                    ModelId: this.ModelId,
                    JobId: this.JobId,
                };

                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: new Headers({ 'Content-Type': 'application/json' })
                }).then(res => res.json()).then((token) => {
                    localStorage.setItem("token", token.jwt);
                    router.push("/AddModeltoJob")
                }).catch(error => alert("Error!!! " + error))
            }
        }
    };
</script>

<style scoped>
</style>