import Vue from "vue";
import VueRouter from "vue-router";
import EventForm from "../components/Event/EventForm.vue";
import Home from "../components/Home.vue";
import SignUp from "../components/User/SignUp.vue";
import SignIn from "../components/User/SignIn.vue";
import AuthGuard from "./auth-guard";
import About from "../components/About.vue";
import EventEditForm from "../components/Event/EventEditForm.vue";

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
    component: EventForm,
    beforeEnter: AuthGuard
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
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/editevent",
    name: "Edit",
    component: EventEditForm
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});
export default router;
