<template>
  <div
    v-if="verify() == 'serbian'"
    class="container-fluid"
    id="painting-container"
  >
    <div class="row">
      <div class="col-sm-12" style="float: left" id="breadcrumbs">
        <router-link to="/" style="text-decoration: none; color: gray">
          Početna
        </router-link>
        / <span style="color: gray"> Umetnine </span> /
        <router-link to="/paintings" style="text-decoration: none; color: gray">
          Slike
        </router-link>
        / {{ painting.ime }}
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <img
          id="main-photo"
          v-bind:src="'/artworks/' + painting.photo + '.jpg'"
          alt="painting"
          style="border-radius: 8px; margin-top: 20px; margin-bottom: 20px"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <h3 id="painting-name">{{ painting.ime }}</h3>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm-12">
        <h4>{{ painting.umetnik }}</h4>
        <div id="about-artist">
          <p>{{ painting.oUmetniku }}</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm">
        <h5><strong>Procenjena vrednost</strong>: {{ painting.vrednost }}</h5>
        <h5><strong>Procenjena starost</strong>: {{ painting.starost }}</h5>
      </div>
    </div>
    <hr />
    <div class="row wrapper-outer">
      <div>
        <br />
        <h2><strong>Galerija slika</strong></h2>
        <br />
      </div>
      <div id="wrapper">
        <div
          id="painting-gallery"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#painting-gallery"
              data-bs-slide-to="0"
              class="active"
            ></button>
            <button
              type="button"
              data-bs-target="#painting-gallery"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#painting-gallery"
              data-bs-slide-to="2"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="gallery"
                v-bind:src="'/artworks/' + painting.photo + '-1.jpg'"
                alt=""
              />
            </div>
            <div class="carousel-item">
              <img
                class="gallery"
                v-bind:src="'/artworks/' + painting.photo + '-2.jpg'"
                alt=""
              />
            </div>
            <div class="carousel-item">
              <img
                class="gallery"
                v-bind:src="'/artworks/' + painting.photo + '-3.jpg'"
                alt=""
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#painting-gallery"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#painting-gallery"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div>
        <br />
        <h2><strong>Galerija video</strong></h2>
        <br />
      </div>
      <div class="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/1aNAjH7xgAE"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <br />
    <div class="row" style="margin-top: 100px">
      <hr />
      <div class="col-sm-6">
        <h4 style="text-align: center">Ponude za ovu umetninu</h4>
        <div class="row">
          <div class="col-sm-6 single" v-for="o of offers" :key="o.id">
            <div class="left-label" style="margin-bottom: 5px">
              <b>Korisnik:</b> {{ o.username }}
            </div>
            <div class="left-label"><b>Iznos:</b> {{ o.bidding }}</div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <h4 style="text-align: center">Poruke za umetnika</h4>
        <div class="row" style="text-align: left">
          <div class="col-sm-12 single" v-for="m of messages" :key="m.id">
            <div style="margin-bottom: 5px">
              <b>Korisnik:</b> {{ m.username }}
            </div>
            <div><b>Tekst poruke:</b> {{ m.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="row" style="margin-bottom: 200px; margin-top: 100px">
      <div class="col-sm-6 offers-bottom-left" style="margin-top: 20px">
        <h4 style="text-align: center; margin-bottom: 30px">
          Postavite ponudu
        </h4>
        Iznos:
        <input type="text" v-model="bidding" id="biddingInput" /> <br />
        <button
          class="btn btn-dark"
          style="margin-top: 10px"
          @click="postOffer()"
          for="biddingInput"
        >
          Postavi ponudu
        </button>
      </div>
      <div class="col-sm-6 offers-bottom-right" style="margin-top: 20px">
        <h4 style="text-align: center; margin-bottom: 30px">
          Ostavite poruku za umetnika
        </h4>
        Tekst poruke:
        <input type="text" v-model="message" /> <br />
        <button
          class="btn btn-dark"
          style="margin-top: 10px"
          @click="postMessage()"
        >
          Ostavi poruku
        </button>
      </div>
    </div>
  </div>
  <div v-else class="container-fluid" id="painting-container">
    <div class="row">
      <div class="col-sm-12" style="float: left" id="breadcrumbs">
        <router-link to="/" style="text-decoration: none; color: gray">
          Home
        </router-link>
        / <span style="color: gray"> Art </span> /
        <router-link to="/paintings" style="text-decoration: none; color: gray">
          Painting
        </router-link>
        / {{ painting.name }}
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <img
          id="main-photo"
          v-bind:src="'/artworks/' + painting.photo + '.jpg'"
          alt="painting"
          style="border-radius: 8px; margin-top: 20px; margin-bottom: 20px"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <h3 id="painting-name">{{ painting.name }}</h3>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm-12">
        <h4>{{ painting.artist }}</h4>
        <div id="about-artist">
          <p>{{ painting.aboutArtist }}</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm">
        <h5><strong>Estimated value</strong>: {{ painting.value }}</h5>
        <h5><strong>Estimated age</strong>: {{ painting.aged }}</h5>
      </div>
    </div>
    <hr />
    <div class="row wrapper-outer">
      <div>
        <br />
        <h2><strong>Photo gallery</strong></h2>
        <br />
      </div>
      <div id="wrapper">
        <div
          id="painting-gallery"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#painting-gallery"
              data-bs-slide-to="0"
              class="active"
            ></button>
            <button
              type="button"
              data-bs-target="#painting-gallery"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#painting-gallery"
              data-bs-slide-to="2"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="gallery"
                v-bind:src="'/artworks/' + painting.photo + '-1.jpg'"
                alt=""
              />
            </div>
            <div class="carousel-item">
              <img
                class="gallery"
                v-bind:src="'/artworks/' + painting.photo + '-2.jpg'"
                alt=""
              />
            </div>
            <div class="carousel-item">
              <img
                class="gallery"
                v-bind:src="'/artworks/' + painting.photo + '-3.jpg'"
                alt=""
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#painting-gallery"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#painting-gallery"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div>
        <br />
        <h2><strong>Video gallery</strong></h2>
        <br />
      </div>
      <div class="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/1aNAjH7xgAE"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <br />
    <div class="row" style="margin-top: 100px">
      <hr />
      <div class="col-sm-6">
        <h4 style="text-align: center">Offers for this artwork</h4>
        <div class="row">
          <div class="col-sm-6 single" v-for="o of offers" :key="o.id">
            <div class="left-label" style="margin-bottom: 5px">
              <b>User:</b> {{ o.username }}
            </div>
            <div class="left-label"><b>Value:</b> {{ o.bidding }}</div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <h4 style="text-align: center">Message for artist</h4>
        <div class="row" style="text-align: left">
          <div class="col-sm-12 single" v-for="m of messages" :key="m.id">
            <div style="margin-bottom: 5px"><b>User:</b> {{ m.username }}</div>
            <div><b>Message:</b> {{ m.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="row" style="margin-bottom: 200px; margin-top: 100px">
      <div class="col-sm-6 offers-bottom-left" style="margin-top: 20px">
        <h4 style="text-align: center; margin-bottom: 30px">Leave an offer</h4>
        Value:
        <input type="text" v-model="bidding" id="biddingInput" /> <br />
        <button
          class="btn btn-dark"
          style="margin-top: 10px"
          @click="postOffer()"
          for="biddingInput"
        >
          Post offer
        </button>
      </div>
      <div class="col-sm-6 offers-bottom-right" style="margin-top: 20px">
        <h4 style="text-align: center; margin-bottom: 30px">
          Leave a message for the artist
        </h4>
        Message:
        <input type="text" v-model="message" /> <br />
        <button
          class="btn btn-dark"
          style="margin-top: 10px"
          @click="postMessage()"
        >
          Leave message
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#painting-container {
  background-color: rgba(255, 255, 255, 0.8);
  padding-right: 100px;
  padding-left: 100px;
  padding-bottom: 1px;
  min-height: 100vh;
}

#painting-name {
  font-weight: bold;
  font-size: 24pt;
}

h3,
h5,
p {
  text-align: left;
}

h5 {
  font-size: 16pt;
}

p {
  font-size: 14pt;
}

p {
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

#painting-gallery {
  width: 70%;
  margin: auto;
}

#wrapper {
  background-color: rgba(255, 255, 255, 0.7);
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
}

#main-photo {
  width: 70%;
}

#breadcrumbs {
  padding-top: 9px;
}

.single {
  margin-top: 20px;
  margin-bottom: 20px;
}

.left-label {
  text-align: left;
}
</style>

<script>
import $ from "jquery";
import paintings from "../data/paintings.js";

export default {
  name: "PaintingView",
  data() {
    return {
      paintings: paintings,
      painting: {},
      offers: [],
      user: "",
      messages: [],
      bidding: "",
      message: "",
    };
  },
  created() {
    let paintingId = Number(this.$route.params.id);
    this.painting = this.paintings.find(
      (painting) => painting.id == paintingId
    );

    this.user = localStorage.getItem("user");
    this.offers = JSON.parse(localStorage.getItem("offers"));
    let painting = this.painting;
    this.offers = this.offers.filter(function (elem) {
      return elem.artwork == painting.name;
    });

    this.messages = JSON.parse(localStorage.getItem("messages"));
    this.messages = this.messages.filter(function (elem) {
      return elem.artist == painting.artist;
    });

    if (this.verify() == "serbian") {
      $(document).prop("title", "Fine Art Co Slike");
    } else {
      $(document).prop("title", "Fine Art Co Paintings");
    }
  },
  methods: {
    postOffer() {
      if (localStorage.getItem("user") == null) {
        if (this.verify() == "serbian") {
          alert("Niste ulogovani.");
        } else {
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
        artwork: this.painting.name,
        bidding: this.bidding,
        date: new Date(),
      };
      offers.push(newOffer);
      localStorage.setItem("offers", JSON.stringify(offers));
      this.offers = JSON.parse(localStorage.getItem("offers"));
      let painting = this.painting;
      this.offers = this.offers.filter(function (elem) {
        return elem.artwork == painting.name;
      });
    },
    postMessage() {
      if (localStorage.getItem("user") == null) {
        if (this.verify() == "serbian") {
          alert("Niste ulogovani.");
        } else {
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
        idArtist: this.painting.idArtist,
        artist: this.painting.artist,
        text: this.message,
      };
      messages.push(newMessage);
      localStorage.setItem("messages", JSON.stringify(messages));
      this.messages = JSON.parse(localStorage.getItem("messages"));
      let painting = this.painting;
      this.messages = this.messages.filter(function (elem) {
        return elem.artist == painting.artist;
      });
    },
    verify() {
      return JSON.parse(localStorage.getItem("language"));
    },
  },
};
</script>