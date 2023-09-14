import { createRouter, createWebHistory } from "vue-router"
import AboutView from "../views/AboutView.vue"
import HomeView from "../views/HomeView.vue"
import FavoriteView from "../views/FavoriteView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    { path: "/image/:id", component: AboutView },
    { path: "/favorite", component: FavoriteView },
  ],
})

export default router
