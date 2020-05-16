<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <p>Welcome to your new single-page application, built with Vue.js.</p>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

