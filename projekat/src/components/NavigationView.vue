<template>
  <header v-if="verify() == 'serbian'">
    <nav id="navigation"
      class="navbar navbar-expand-md navbar-dark"
      style="background-color: rgba(0, 0, 0, 0.8)"
    >
      <div class="container-fluid">
        <router-link class=" text-decoration-none navbar-brand" to="/"> <img src="logo.png" alt="" width="38" height="32" style="margin-right: 15px"><span id="site-name">Fine Art Co</span></router-link>
        
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
                  <li><router-link class="dropdown-item text-decoration-none" to="/others">Ostale Umetnine</router-link></li>
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
            <li class="nav-item">
              <div class="dropdown">
                <a
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  class="text-decoration-none"
                  >Jezici</a
                >
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                  style="background-color: rgba(0, 0, 0, 0.9)"
                >
                  <li><a class="dropdown-item text-decoration-none" @click="changeLanguage('serbian')" >Srpski</a></li>
                  <li><a class="dropdown-item text-decoration-none" @click="changeLanguage('english')" >Engleski</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <header v-else>
    <nav id="navigation"
      class="navbar navbar-expand-md navbar-dark"
      style="background-color: rgba(0, 0, 0, 0.8)"
    >
      <div class="container-fluid">
        <router-link class=" text-decoration-none navbar-brand" to="/"> <img src="logo.png" alt="" width="38" height="32" style="margin-right: 15px"><span id="site-name">Fine Art Co</span></router-link>
        
        <div class="navbar-collapse collapse show" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="text-decoration-none" id="home" to="/"
                >Home</router-link
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
                  >Art</a
                >
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton1"
                  style="background-color: rgba(0, 0, 0, 0.9)"
                >
                  <li><router-link class="dropdown-item text-decoration-none" to="/paintings">Paintings</router-link></li>
                  <li><router-link class="dropdown-item text-decoration-none" to="/sculptures">Sculptures</router-link></li>
                  <li><router-link class="dropdown-item text-decoration-none" to="/others">Others</router-link></li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <router-link
                class="text-decoration-none"
                id="artists"
                to="/artists"
                >Artists</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="text-decoration-none"
                id="about"
                to="/about"
                >About us</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="text-decoration-none" id="profile" to="/profile"
                >My account</router-link
              >
            </li>
            <li class="nav-item">
              <div class="dropdown">
                <a
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  class="text-decoration-none"
                  >Languages</a
                >
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                  style="background-color: rgba(0, 0, 0, 0.9)"
                >
                  <li><a class="dropdown-item text-decoration-none" @click="changeLanguage('serbian')" >Serbian</a></li>
                  <li><a class="dropdown-item text-decoration-none" @click="changeLanguage('english')" >English</a></li>
                </ul>
              </div>
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

nav {
  padding: 20px;
  font-size: 14pt;
}

#site-name{
  font-size: 22pt;
  font-weight: bold;
}

</style>

<script>
import $ from "jquery";

export default {
  name: "NavigationView",
  watch:{
    $route (to, from){
      if (from.path.includes("/paintings") || from.path.includes("/sculptures") || from.path.includes("/others")){
        $("#dropdownMenuButton1").css({
          "font-weight" : "unset",
          "color" : "rgba(255,255,255,0.5)"
        });
      }
      if (to.path.includes("/paintings") || to.path.includes("/sculptures") || to.path.includes("/others")){
        $("#dropdownMenuButton1").css({
          "font-weight" : "bold",
          "color" : "rgba(255,255,255,1)"
        });
      }
    }
} ,
methods:{
  changeLanguage(language){
    localStorage.setItem("language", JSON.stringify(language));
    location.reload();
  },
  verify(){
    return JSON.parse(localStorage.getItem('language'));
  }
}
};
</script>