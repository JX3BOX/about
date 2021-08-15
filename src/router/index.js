import Vue from "vue";
import VueRouter from "vue-router";

import Index from "../views/Index.vue";
import Team from "../views/Team.vue";
import Cop from "../views/Cop.vue";
import Privacy from "../views/Privacy.vue";
import Licence from "../views/Licence.vue";
import Treaty from "../views/Treaty.vue";
import Incentives from "../views/Incentives.vue";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Index },
    { path: '/team', component: Team },
    { path: '/cop', component: Cop },
    { path: '/privacy', component: Privacy },
    { path: '/licence', component: Licence },
    { path: '/treaty', component: Treaty },
    { path: '/incentives', component: Incentives },
]

const router = new VueRouter({
    routes
});

export default router;
