import { createRouter, createWebHistory } from 'vue-router'
import ArtistsView from "../views/ArtistsView.vue"
import HomeView from "../views/HomeView.vue"
import PaintingsView from '../views/PaintingsView.vue'
import ProfileView from '../views/ProfileView.vue'
import AboutView from "../views/AboutView.vue"
import SculpturesView from "../views/SculpturesView.vue"
import PaintingView from '../views/PaintingView.vue'
import SculptureView from '../views/SculptureView.vue'
import OthersView from '../views/OthersView.vue'
import OtherView from '../views/OtherView.vue'

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
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView
  },
  {
    path: "/sculptures",
    name: "SculpturesView",
    component: SculpturesView
  },
  {
    path:"/paintings/:id",
    name: "PaintingView",
    component: PaintingView
  },
  {
    path:"/sculptures/:id",
    name: "SculptureView",
    component: SculptureView
  },
  {
    path: "/others",
    name: "OthersView",
    component: OthersView
  },
  {
    path:"/others/:id",
    name: "OtherView",
    component: OtherView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
