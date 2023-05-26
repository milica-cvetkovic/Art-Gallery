import { createRouter, createWebHistory } from 'vue-router'
import ArtistsView from "../components/ArtistsView.vue"
import HomeView from "../components/HomeView.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
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
