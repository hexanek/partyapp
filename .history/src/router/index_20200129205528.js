import Vue from "vue";
import VueRouter from "vue-router";
import EventForm from "../components/Event/EventForm.vue";
import Home from "../components/Home.vue";
import SignUp from "../components/User/SignUp.vue";
import SignIn from "../components/User/SignIn.vue";

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
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn
  }
];

const router = new VueRouter({
  routes
});
export default router;
