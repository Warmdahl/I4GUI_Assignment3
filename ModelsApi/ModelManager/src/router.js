import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import OpretModel from './components/OpretModel.vue';
import OpretManager from './components/OpretManager.vue';
import OpretJob from './components/OpretJob.vue';
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
        }
    ]
});