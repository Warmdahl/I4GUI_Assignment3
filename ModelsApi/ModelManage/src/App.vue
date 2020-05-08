<template>
    <div id="app">
        <Home msg="Hello world! Det kan du tro" />
        <!--<Model test="yep it is a true quote"/>-->
    </div>
</template>

<script>
    import Home from './components/Home.vue';
    import FormValidation from './components/Login.vue';
    import data from './components/Models.vue';

    export default {
        name: 'app',
        components: {
            Home,
            FormValidation,
            data
        }
    };
</script>

<style>
</style>

