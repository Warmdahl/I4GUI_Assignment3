<template>
    <!--<div id="app">

        <nav>
            <router-link to="/" tag="md-button">Home</router-link> |
            <router-link to="/login" tag="md-button">Login</router-link> |
            <router-link to="/opretmodel" tag="md-button">Opret Model</router-link> |
            <router-link to="/opretmanager" tag="md-button">Opret Manager</router-link> |
            <router-link to="/opretjob" tag="md-button">Opret Job</router-link> |
            <router-link to="/addmodeltojob" tag="md-button">Add Model to Job</router-link> |
            <router-link to="/deletemodelfromjob" tag="md-button">Delete Model from Job</router-link> |
            <router-link to="/sejob" tag="md-button">Se Job</router-link>
        </nav>
        <router-view></router-view>

    </div>-->


    <div class="page-container">
        <md-app md-waterfall md-mode="fixed-last">
            <md-app-toolbar class="md-large md-dense md-primary">
                <div class="md-toolbar-row">
                    <div class="md-toolbar-section-start">

                        <span class="md-title">Model Maneger</span>
                    </div>


                </div>

                <div>
                    <md-tabs md-sync-route>
                        <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
                        <md-tab id="tab-login" md-label="Login" to="/login" exact></md-tab>
                        <md-tab id="tab-opretmodel" md-label="Opret Model" to="/opretmodel" exact></md-tab>
                        <md-tab id="tab-opretmanager" md-label="Opret Manager" to="/opretmanager" exact></md-tab>
                        <md-tab id="tab-opretjob" md-label="Opret Job" to="/opretjob" exact></md-tab>
                        <md-tab id="tab-addmodeltojob" md-label="Add Model To Job" to="/addmodeltojob" exact></md-tab>
                        <md-tab id="tab-deletemodelfromjob" md-label="Delete Model From Job" to="/deletemodelfromjob" exact></md-tab>
                        <md-tab id="tab-sejob" md-label="Se Job" to="/sejob" exact></md-tab>

                    </md-tabs>
                </div>
            </md-app-toolbar>

            <md-app-content>
                <router-view></router-view>
            </md-app-content>
        </md-app>
    </div>


</template>

<script>

    export default {
        name: 'app'
    };
</script>

<style>
</style>