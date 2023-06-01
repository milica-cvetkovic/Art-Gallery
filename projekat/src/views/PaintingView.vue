<template>
  <div class="container-fluid" id="painting-container">
    <breadcrumb-component></breadcrumb-component>
    <div class="row">
      <div class="col-sm-12">
        <!--<img v-bind:src="'artworks/' + painting.photo" alt="painting">-->
        <img src="../../public/artworks/painting1.jpg" alt="" style="border-radius: 8px; margin-top: 20px; margin-bottom: 20px" />
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
    <div class="row">
      <div>
        <h2>Galerija slika</h2>
      </div>
      <div id="painting-gallery" class="carousel slide" data-bs-ride="carousel">
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
              src="../../public/artworks/painting1-1.jpeg"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              class="gallery"
              src="../../public/artworks/painting1-2.jpg"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              class="gallery"
              src="../../public/artworks/painting1-3.jpg"
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
    <div class="row">
      <div
        id="painting-video"
        class="carousel slide carousel-fade"
        data-mdb-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#painting-video"
            data-mdb-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-mdb-target="#painting-video"
            data-mdb-slide-to="1"
          ></button>
          <button
            type="button"
            data-mdb-target="#painting-video"
            data-mdb-slide-to="2"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <video class="img-fluid" autoplay loop muted>
              <source
                src="https://www.youtube.com/watch?v=J5t91VaiBYY"
                type="video/mp4"
              />
            </video>
          </div>
          <div class="carousel-item">
            <video class="img-fluid" autoplay loop muted>
              <source
                src="https://www.youtube.com/watch?v=J5t91VaiBYY"
                type="video/mp4"
              />
            </video>
          </div>
          <div class="carousel-item">
            <video class="img-fluid" autoplay loop muted>
              <source
                src="https://www.youtube.com/watch?v=J5t91VaiBYY"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-mdb-target="#painting-video"
          data-mdb-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-mdb-target="#painting-video"
          data-mdb-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
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
#painting-container {
  background-color: rgba(255, 255, 255, 0.8);
  padding-right: 100px;
  padding-left: 100px;
  padding-bottom: 1px;
}

#painting-name {
  font-weight: bold;
  font-size: 30pt;
}

h3,
h5, p {
  text-align: left;
}

h5, p{
    font-size: 16pt;
}

p{
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
}

h4 {
  text-align: left;
  font-size: 22pt;
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

#painting-gallery{
  background-color: rgba(255, 255, 255, 0.9);
}
</style>

<script>

import paintings from "../data/paintings.js";

export default {
  name: "PaintingView",
  data() {
    return {
      paintings: paintings,
      painting: {},
      offers: [],
      user: ""
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
    this.offers = this.offers.filter(function(elem) {
      return elem.artwork == painting.name
    });
  },
};
</script>