import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Items from "@/views/Items.vue";
import About from "@/views/About.vue";

Vue.use(VueRouter);

const routes = [

  {path: '/about/:id', component: About, name: "about"},
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
    	{path: '', component: Items},
    ]
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition) 
        } else {
          resolve({ x: 0, y: 0 })
        }
        
      }, 250)
    })
  },
  routes
});

export default router;
