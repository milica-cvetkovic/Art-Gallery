<template>
  <div class="container-fluid" id="sculpture-container">
    <div class="row">
     <div class="col-sm-12" style="float:left;" id="breadcrumbs">
          Početna / Umetnine / Skulpture / {{sculpture.ime}}
      </div>
   </div>
    <div class="row">
      <div class="col-sm-12">
         <img id="main-photo" v-bind:src="'/artworks/' + sculpture.photo + '.jpg'" alt="sculpture" style="border-radius: 8px; margin-top: 20px; margin-bottom: 20px" >
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <h3 id="sculpture-name">{{ sculpture.ime }}</h3>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm-12">
        <h4>{{ sculpture.umetnik }}</h4>
        <div id="about-artist">
          <p>{{ sculpture.oUmetniku }}</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm">
        <h5><strong>Procenjena vrednost</strong>: {{ sculpture.vrednost }}</h5>
        <h5><strong>Procenjena starost</strong>: {{ sculpture.starost }}</h5>
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
      <div id="sculpture-gallery" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#sculpture-gallery"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#sculpture-gallery"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#sculpture-gallery"
            data-bs-slide-to="2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="gallery"
              v-bind:src="'/artworks/' + sculpture.photo + '-1.jpg'"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              class="gallery"
              v-bind:src="'/artworks/' + sculpture.photo + '-2.jpg'"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              class="gallery"
              v-bind:src="'/artworks/' + sculpture.photo + '-3.jpg'"
              alt=""
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#sculpture-gallery"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#sculpture-gallery"
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
#sculpture-container {
  background-color: rgba(255, 255, 255, 0.8);
  padding-right: 100px;
  padding-left: 100px;
  padding-bottom: 1px;
}

#sculpture-name {
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

#sculpture-gallery{
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
  width: 40%;
}

#breadcrumbs {
  padding-top: 9px;
}

</style>

<script>

import sculptures from "../data/sculptures.js";

export default {
  name: "SculptureView",
  data() {
    return {
      sculptures: sculptures,
      sculpture: {},
      offers: [],
      user: ""
    };
  },
  created() {
    let sculptureId = Number(this.$route.params.id);
    this.sculpture = this.sculptures.find(
      (sculpture) => sculpture.id == sculptureId
    );

    this.user = localStorage.getItem("user");
    this.offers = JSON.parse(localStorage.getItem("offers"));
    let sculpture = this.sculpture;
    this.offers = this.offers.filter(function(elem) {
      return elem.artwork == sculpture.name
    });
  },
};
</script>