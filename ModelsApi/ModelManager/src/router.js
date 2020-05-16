import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import OpretModel from './components/OpretModel.vue';
import OpretManager from './components/OpretManager.vue';
import OpretJob from './components/OpretJob.vue';
import AddModeltoJob from './components/AddModeltoJob.vue';
import DeleteModel_FromJob from './components/DeleteModel_FromJob.vue';
//import DeleteModelfromJob from './components/DeleteModelfromJob.vue';
import SeJob from './components/SeJob.vue';
import AddExpenseToJob from './components/AddExpenseToJob.vue';

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "Login",
            component: Login
        },
        {
            path: "/opretmodel",
            name: "OpretModel",
            component: OpretModel
        },
        {
            path: "/opretmanager",
            name: "OpretManager",
            component: OpretManager
        },
        {
            path: "/opretjob",
            name: "OpretJob",
            component: OpretJob
        },
        {
            path: "/addmodeltojob",
            name: "AddModeltoJob",
            component: AddModeltoJob
        },
        {
            path: "/deletemodel_fromjob",
            name: "DeleteModel_FromJob",
            component: DeleteModel_FromJob
        }


        /*
        {
            path: "/deletemodelfromjob",
            name: "DeleteModelfromJob",
            component: DeleteModelfromJob
        }*/,
        {
            path: "/sejob",
            name: "SeJob",
            component: SeJob
        },
        {
            path: "/addexpensetojob",
            name: "AddExpenseToJob",
            component: AddExpenseToJob
        }
    ]
});