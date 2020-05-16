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


    <!--<div class="page-container" id="app">
        <md-app md-waterfall md-mode="fixed-last">
            <md-app-toolbar class="md-large md-dense md-secondary">
                <div class="md-toolbar-row">
                    <div class="md-toolbar-section-start">
                        <span class="md-title">Model Manager</span>
                    </div>
                </div>

                <div>
                    <md-tabs md-sync-route>

                        <md-tab id="tab-login" md-label="Login" to="/" exact></md-tab>
                        <md-tab id="tab-opretmodel" md-label="Opret Model" to="/opretmodel" exact></md-tab>
                        <md-tab id="tab-opretmanager" md-label="Opret Manager" to="/opretmanager" exact></md-tab>
                        <md-tab id="tab-opretjob" md-label="Opret Job" to="/opretjob" exact></md-tab>
                        <md-tab id="tab-addmodeltojob" md-label="Add Model To Job" to="/addmodeltojob" exact></md-tab>
                        <md-tab id="tab-deletemodelfromjob" md-label="Delete Model From Job" to="/deletemodel_fromjob" exact></md-tab>
                        <md-tab id="tab-sejob" md-label="Se Job" to="/sejob" exact></md-tab>
                        <md-tab id="tab-addexpensetojob" md-label="Add expense to job" to="/addexpensetojob" exact></md-tab>
                    </md-tabs>
                </div>
            </md-app-toolbar>
            <md-app-content>
                <router-view></router-view>
            </md-app-content>
        </md-app>
    </div>-->




    <div class="page-container" id="app">
        <md-app md-waterfall md-mode="fixed">
            <md-app-toolbar class="md-primary">
                <span class="md-title">Model Manager</span>
            </md-app-toolbar>

            <md-app-drawer md-permanent="full">
                <md-toolbar class="md-transparent" md-elevation="0">
                    Navigation
                </md-toolbar>


                <md-list>
                    <md-list-item id="tab-login" to="/" exact>
                        <md-icon><img src="./assets/key.png" /></md-icon>
                        <span class="md-list-item-text">Login</span>
                    </md-list-item>

                    <md-list-item id="tab-opretmodel" md-label="Opret Model" to="/opretmodel" exact>
                        <md-icon><img src="./assets/AddModel.png" /></md-icon>
                        <span class="md-list-item-text">Opret Model</span>
                    </md-list-item>

                    <md-list-item id="tab-opretmanager" md-label="Opret Manager" to="/opretmanager" exact>
                        <md-icon><img src="./assets/addManager.png" /></md-icon>
                        <span class="md-list-item-text">Opret Manager</span>
                    </md-list-item>

                    <md-list-item id="tab-opretjob" md-label="Opret Job" to="/opretjob" exact>
                        <md-icon><img src="./assets/addJob.png" /></md-icon>
                        <span class="md-list-item-text">Opret Job</span>
                    </md-list-item> 
                     
                    <md-list-item id="tab-addmodeltojob" md-label="Add Model To Job" to="/addmodeltojob" exact>
                        <md-icon><img src="./assets/addModelToJob.png" /></md-icon>
                        <span class="md-list-item-text">Add Model to Job</span>
                    </md-list-item>

                    <md-list-item id="tab-deletemodelfromjob" md-label="Delete Model From Job" to="/deletemodel_fromjob" exact>
                        <md-icon><img src="./assets/deleteModelToJob.png" /></md-icon>
                        <span class="md-list-item-text">Delete Model From Job</span>
                    </md-list-item>

                    <md-list-item id="tab-sejob" md-label="Se Job" to="/sejob" exact>
                        <md-icon><img src="./assets/seejobs.png" /></md-icon>
                        <span class="md-list-item-text">Se Job</span>
                    </md-list-item>

                    <md-list-item id="tab-addexpensetojob" md-label="Add expense to job" to="/addexpensetojob" exact>
                        <md-icon><img src="./assets/money.png" /></md-icon>
                        <span class="md-list-item-text">Add Expense To Job</span>
                    </md-list-item>




                </md-list>
            </md-app-drawer>

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