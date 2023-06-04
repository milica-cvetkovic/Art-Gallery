<template>
  <div v-if="verify() == 'serbian'" class="container-fluid" id="other-container">
   <div class="row">
     <div class="col-sm-12" style="float:left;" id="breadcrumbs">
          <router-link to="/" style="text-decoration: none; color: gray"> Početna </router-link> / 
          <span style="color: gray"> Umetnine </span> / <router-link to="/others" style="text-decoration: none; color: gray"> Ostalo </router-link> 
          / {{other.ime}}
      </div>
   </div>
    <div class="row">
      <div class="col-sm-12">
        <img id="main-photo" v-bind:src="'/artworks/' + other.photo + '.jpg'" alt="other" style="border-radius: 8px; margin-top: 20px; margin-bottom: 20px" >
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <h3 id="other-name">{{ other.ime }}</h3>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm-12">
        <h4>{{ other.umetnik }}</h4>
        <div id="about-artist">
          <p>{{ other.oUmetniku }}</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm">
        <h5><strong>Procenjena vrednost</strong>: {{ other.vrednost }}</h5>
        <h5><strong>Procenjena starost</strong>: {{ other.starost }}</h5>
      </div>
    </div>
    <hr />
    <div class="row wrapper-outer">
      <div>
        <br>
        <h2><strong>Galerija slika</strong></h2>
        <br>
      </div>
      <div id="wrapper">
      <div id="other-gallery" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#other-gallery"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#other-gallery"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#other-gallery"
            data-bs-slide-to="2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="gallery"
              v-bind:src="'/artworks/' + other.photo + '-1.jpg'"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              class="gallery"
              v-bind:src="'/artworks/' + other.photo + '-2.jpg'"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              class="gallery"
              v-bind:src="'/artworks/' + other.photo + '-3.jpg'"
              alt=""
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#other-gallery"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#other-gallery"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
      </div>
    </div>
    <div class="row">
      <div>
        <br>
        <h2><strong>Galerija video</strong></h2>
        <br>
      </div>
      <div class="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/J5t91VaiBYY" allowfullscreen></iframe>
      </div>
    </div>
    <br>
    <div class="row" style="margin-bottom: 500px">
      <hr>
      <h4>
        Ponude za ovu umetninu
      </h4>
      <div class="row">
        <div class="col-3" v-for="o of offers" :key="o.id">
          Korisnik: {{o.username}}
          Iznos: {{o.bidding}}
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container-fluid" id="other-container">
   <div class="row">
     <div class="col-sm-12" style="float:left;" id="breadcrumbs">
          <router-link to="/" style="text-decoration: none; color: gray"> Početna </router-link> / 
          <span style="color: gray"> Umetnine </span> / <router-link to="/others" style="text-decoration: none; color: gray"> Ostalo </router-link> 
          / {{other.ime}}
      </div>
   </div>
    <div class="row">
      <div class="col-sm-12">
        <img id="main-photo" v-bind:src="'/artworks/' + other.photo + '.jpg'" alt="other" style="border-radius: 8px; margin-top: 20px; margin-bottom: 20px" >
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <h3 id="other-name">{{ other.ime }}</h3>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm-12">
        <h4>{{ other.umetnik }}</h4>
        <div id="about-artist">
          <p>{{ other.oUmetniku }}</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm">
        <h5><strong>Procenjena vrednost</strong>: {{ other.vrednost }}</h5>
        <h5><strong>Procenjena starost</strong>: {{ other.starost }}</h5>
      </div>
    </div>
    <hr />
    <div class="row wrapper-outer">
      <div>
        <br>
        <h2><strong>Galerija slika</strong></h2>
        <br>
      </div>
      <div id="wrapper">
      <div id="other-gallery" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#other-gallery"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#other-gallery"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#other-gallery"
            data-bs-slide-to="2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="gallery"
              v-bind:src="'/artworks/' + other.photo + '-1.jpg'"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              class="gallery"
              v-bind:src="'/artworks/' + other.photo + '-2.jpg'"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              class="gallery"
              v-bind:src="'/artworks/' + other.photo + '-3.jpg'"
              alt=""
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#other-gallery"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#other-gallery"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
      </div>
    </div>
    <div class="row">
      <div>
        <br>
        <h2><strong>Galerija video</strong></h2>
        <br>
      </div>
      <div class="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/J5t91VaiBYY" allowfullscreen></iframe>
      </div>
    </div>
    <br>
    <div class="row" style="margin-bottom: 500px">
      <hr>
      <h4>
        Ponude za ovu umetninu
      </h4>
      <div class="row">
        <div class="col-3" v-for="o of offers" :key="o.id">
          Korisnik: {{o.username}}
          Iznos: {{o.bidding}}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#other-container {
  background-color: rgba(255, 255, 255, 0.8);
  padding-right: 100px;
  padding-left: 100px;
  padding-bottom: 1px;
}

#other-name {
  font-weight: bold;
  font-size: 24pt;
}

h3,
h5, p {
  text-align: left;
}

h5{
  font-size: 16pt;
}

p{
    font-size: 14pt;
}

p{
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
}

h4 {
  text-align: left;
  font-size: 18pt;
  font-weight: bold;
}

#about-artist {
  text-align: left;
  font-size: 16pt;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 2px;
}

.carousel-item img {
  width: 90%;
  height: 70%;
  object-fit: contain;
}

#other-gallery{
  width: 70%;
  margin: auto;
}

#wrapper {
  background-color: rgba(255, 255, 255, 0.7);
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
}

#main-photo{
  width: 50%;
}

#breadcrumbs {
  padding-top: 9px;
}

</style>

<script>
import $ from "jquery";
import others from "../data/others.js";

export default {
  name: "OtherView",
  data() {
    return {
      others: others,
      other: {},
      offers: [],
      user: ""
    };
  },
  created() {
    let otherId = Number(this.$route.params.id);
    this.other = this.others.find(
      (other) => other.id == otherId
    );

    this.user = localStorage.getItem("user");
    this.offers = JSON.parse(localStorage.getItem("offers"));
    let other = this.other;
    this.offers = this.offers.filter(function(elem) {
      return elem.artwork == other.name
    });

    this.messages = JSON.parse(localStorage.getItem("messages"));
    this.messages = this.messages.filter(function (elem) {
      return elem.artist == other.artist;
    });

    if (this.verify() == "serbian") {
      $(document).prop("title", "Fine Art Co Ostalo");
    } else {
      $(document).prop("title", "Fine Art Co Others");
    }
  },
  methods: {
    postOffer() {
      if (localStorage.getItem("user") == null){
        if (this.verify() == "serbian"){
          alert("Niste ulogovani.");
        }
        else {
          alert("You are not logged in.");
        }
        return;
      }
      let id = 0;
      let offers = JSON.parse(localStorage.getItem("offers"));
      for (let i = 0; i < offers.length; i++) {
        if (offers[i].id > id) {
          id = offers[i].id;
        }
      }
      let newOffer = {
        id: id + 1,
        username: this.user,
        artwork: this.other.name,
        bidding: this.bidding,
        date: new Date(),
      };
      offers.push(newOffer);
      localStorage.setItem("offers", JSON.stringify(offers));
      this.offers = JSON.parse(localStorage.getItem("offers"));
      let other = this.other;
      this.offers = this.offers.filter(function (elem) {
        return elem.artwork == other.name;
      });
    },
    postMessage(){
      if (localStorage.getItem("user") == null){
        if (this.verify() == "serbian"){
          alert("Niste ulogovani.");
        }
        else {
          alert("You are not logged in.");
        }
        return;
      }
      let id = 0;
      let messages = JSON.parse(localStorage.getItem("messages"));
      for (let i = 0; i < messages.length; i++) {
        if (messages[i].id > id) {
          id = messages[i].id;
        }
      }
      let newMessage = {
        id: id + 1,
        username: this.user,
        idArtist: this.other.idArtist,
        artist: this.other.artist,
        text: this.message
      };
      messages.push(newMessage);
      localStorage.setItem("messages", JSON.stringify(messages));
      this.messages = JSON.parse(localStorage.getItem("messages"));
      let other = this.other;
      this.messages = this.messages.filter(function (elem) {
        return elem.artist == other.artist;
      });

    },
    verify(){
    return JSON.parse(localStorage.getItem('language'));
  }
  },
};
</script>