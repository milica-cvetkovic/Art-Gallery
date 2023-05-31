import { createRouter, createWebHistory } from 'vue-router'
import ArtistsView from "../views/ArtistsView.vue"
import HomeView from "../views/HomeView.vue"
import PaintingsView from '../views/PaintingsView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView
  },
  {
    path: "/artists",
    name: "Artists",
    component: ArtistsView
  },
  {
    path: "/profile",
    name: "ProfileView",
    component: ProfileView
  },
  {
    path: "/paintings",
    name: "PaintingsView",
    component: PaintingsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
