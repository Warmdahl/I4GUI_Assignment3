import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import OpretModel from './components/OpretModel.vue';
import OpretManager from './components/OpretManager.vue';
import OpretJob from './components/OpretJob.vue';
import AddModeltoJob from './components/AddModeltoJob.vue';
//import DeleteModelfromJob from './components/DeleteModelfromJob.vue';
import SeJob from './components/SeJob.vue';

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/login",
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
        },        {            path: "/addmodeltojob",            name: "AddModeltoJob",            component: AddModeltoJob        },        //{        //    path: "/deletemodelfromjob",        //    name: "DeleteModelfromJob",        //    component: DeleteModelfromJob
        //},        {            path: "/sejob",            name: "SeJob",            component: SeJob        }    ]
});