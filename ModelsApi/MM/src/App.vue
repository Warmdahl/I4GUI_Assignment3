<template>
    <div id="app">
        <Home msg="Hello world!" />
        <Hej test="Test"/>
        <p>Hej</p>
    </div>
</template>

<script>
    import Home from './components/Home.vue';
    import Hej from './components/test.vue';
    //import FormValidation from './components/Login.vue';

    export default {
        name: 'app',
        components: {
            Home,
            Hej,
            //FormValidation
        }
    };
</script>

<style>
</style>

