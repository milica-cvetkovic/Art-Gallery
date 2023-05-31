<template>
  <header>
    <nav
      class="navbar navbar-expand-md navbar-dark"
      style="background-color: rgba(0, 0, 0, 0.8)"
    >
      <div class="container-fluid">
        <router-link class=" text-decoration-none navbar-brand" to="/"> <img src="logo.png" alt="" width="30" height="24" style="margin-right: 10px"> Fine Art Co</router-link>
        
        <div class="navbar-collapse collapse show" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="text-decoration-none" id="home" to="/"
                >Početna</router-link
              >
            </li>
            <li class="nav-item">
              <div class="dropdown">
                <a
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  class="text-decoration-none"
                  >Umetnine</a
                >
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton1"
                  style="background-color: rgba(0, 0, 0, 0.9)"
                >
                  <li><router-link class="dropdown-item text-decoration-none" to="/paintings">Slike</router-link></li>
                  <li><router-link class="dropdown-item text-decoration-none" to="/sculptures">Skulpture</router-link></li>
                  <li><router-link class="dropdown-item text-decoration-none" to="/randomstuff">Ostale Umetnine</router-link></li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <router-link
                class="text-decoration-none"
                id="artists"
                to="/artists"
                >Umetnici</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="text-decoration-none"
                id="about"
                to="/about"
                >O nama</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="text-decoration-none" id="profile" to="/profile"
                >Moj profil</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.bg-img {
  height: 100vh;
  width: 100vw;
  filter: brightness(0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

a.router-link-exact-active {
  color: rgb(255, 255, 255);
}
</style>

<script>
import $ from "jquery";

export default {
  name: "NavigationView",
  watch:{
    $route (to, from){
      if (from.path == "/paintings"){
        $("#dropdownMenuButton1").css({
          "font-weight" : "unset",
          "color" : "rgba(255,255,255,0.5)"
        });
      }
      if (to.path == "/paintings"){
        $("#dropdownMenuButton1").css({
          "font-weight" : "bold",
          "color" : "rgba(255,255,255,1)"
        });
      }
    }
} 
};
</script>