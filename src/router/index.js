/*
 * @Author: iRuxu
 * @Date: 2022-05-15 10:51:05
 * @LastEditTime: 2022-06-11 16:27:50
 * @Description: 
 */
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
    routes,
    mode : 'history',
    base : '/about/'
});

export default router;
