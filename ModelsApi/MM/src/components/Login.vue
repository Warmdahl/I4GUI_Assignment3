<template>
    <div class="Login">
        <h1>{{ msg }}</h1>
        <p>This is a test</p>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

