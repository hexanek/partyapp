import Vue from "vue";
import VueRouter from "vue-router";
import EventForm from "../components/Event/EventForm.vue";
import Home from "../components/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/addevent",
    name: "AddEvent",
    component: EventForm

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
