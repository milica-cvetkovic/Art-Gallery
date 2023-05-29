import { createRouter, createWebHistory } from 'vue-router'
import ArtistsView from "../components/ArtistsView.vue"
import HomeView from "../views/HomeView.vue"
import PaintingsView from "../components/PaintingsView.vue"

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView
  },
  {
    page: "/paintings",
    name: "PaintingsView",
    component: PaintingsView
  },
  {
    path: "/artists",
    name: "Artists",
    component: ArtistsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
