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
import artists from "./data/artists.js";

export default {
  name: "App",
  components: { NavigationView, FooterView },
  created() {
    if (localStorage.getItem("language") == null){
      let language = 'english';
      localStorage.setItem("language", JSON.stringify(language));
    }
    if (localStorage.getItem("offers") == null) {
      let offers = [
        {
          id: 1,
          username: "elonmusk123",
          artwork: "The Last Supper",
          bidding: 1000,
          date: new Date("2023-04-05T12:39:00")
        },
        {
          id: 2,
          username: "billgates123",
          artwork: "The Last Supper",
          bidding: 10000,
          date: new Date("2023-05-05T14:39:00")
        },
        {
          id: 3,
          username: "elonmusk123",
          artwork: "The Birth of Venus",
          bidding: 100,
          date: new Date("2023-01-19T23:22:17")
        }
      ];
      localStorage.setItem("offers", JSON.stringify(offers));
    }
    if (localStorage.getItem("messages") == null){
      let messages = [
        {
          id: 1,
          username: "elonmusk123",
          idArtist: 1,
          artist: "Leonardo da Vinci",
          text: "Moj omiljeni umetnik!"
        },
        {
          id: 2,
          username: "elonmusk123",
          idArtist: 1,
          artist: "Leonardo da Vinci",
          text: "Jedan od najboljih svetskih umetnika!"
        },
        {
          id: 3,
          username: "elonmusk123",
          idArtist: 1,
          artist: "Leonardo da Vinci",
          text: "Svako delo me ostavi bez daha!"
        },
        {
          id: 4,
          username: "billgates123",
          idArtist: 4,
          artist: "Sandro Boticelli",
          text: "Uvek lepo prenese emociju na svoja dela!"
        },
        {
          id: 5,
          username: "stevejobs123",
          idArtist: 2,
          artist: "Michelangelo Buonarotti",
          text: "Ne kazu dzabe jedan od najboljih umetnika ikada!"
        },
        {
          id: 6,
          username: "billgates123",
          idArtist: 1,
          artist: "Leonardo da Vinci",
          text: "Zadivljen sam svakim njegovim delom!!"
        }
      ];
      localStorage.setItem("messages", JSON.stringify(messages));
    }
    if (localStorage.getItem("artists") == null){
      localStorage.setItem("artists", artists);
    }
  }
};
</script>