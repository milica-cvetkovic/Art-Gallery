<template>
  <div>
    <NavigationView></NavigationView>
    <router-view />
    <footer-view></footer-view> 
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  color: rgba(255,255,255,0.5);
  padding-left: 20px;
  padding-left: 20px
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: #fff;
}

nav a:hover{
  color: rgba(255,255,255, 0.8)
}

</style>

<script>
import FooterView from './components/FooterView.vue';
import NavigationView from './components/NavigationView.vue';

export default {
  name: "App",
  components: { NavigationView, FooterView },
};
</script>