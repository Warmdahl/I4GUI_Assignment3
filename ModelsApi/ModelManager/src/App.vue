<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/login">Login</router-link> |
            <router-link to="/opretmodel">Opret Model</router-link> |
            <router-link to="/opretmanager">Opret Manager</router-link> |
            <router-link to="/opretjob">Opret Job</router-link> |
            <router-link to="/AddModeltoJob">Add Model to Job</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app'
    };
</script>

<style>
</style>

