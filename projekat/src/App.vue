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
  color: rgba(255, 255, 255, 0.5);
  padding-left: 20px;
  padding-left: 20px;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: #fff;
}

nav a:hover {
  color: rgba(255, 255, 255, 0.8);
}
</style>

<script>
import FooterView from "./components/FooterView.vue";
import NavigationView from "./components/NavigationView.vue";

export default {
  name: "App",
  components: { NavigationView, FooterView },
  created() {
    if (localStorage.getItem("user") == null) {
      localStorage.setItem("user", "elonmusk123"); // ulogovan user
    }
    if (localStorage.getItem("offers") == null) {
      let offers = [
        {
          username: "elonmusk123",
          artwork: "The Last Supper",
          bidding: 1000,
        },
        {
          username: "billgates123",
          artwork: "The Creation od Adam",
          bidding: 10000,
        },
        {
          username: "elonmusk123",
          artwork: "The Birth of Venus",
          bidding: 100,
        },
      ];
      localStorage.setItem("offers", JSON.stringify(offers));
    }
  },
};
</script>