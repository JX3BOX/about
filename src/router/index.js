import Vue from "vue";
import VueRouter from "vue-router";

import Index from "../views/Index.vue";
import Team from "../views/Team.vue";
import Cop from "../views/Cop.vue";
import Text from "../views/Text.vue";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Index },
    { path: '/team', component: Team },
    { path: '/cop', component: Cop },
    { path: '/:type', component: Text },
]

const router = new VueRouter({
    routes
});

export default router;
