<template>
  <div v-if="verify() == 'serbian'" class="container aboutus" style="padding-top: 40px" id="about">
    <div class="row" >
      <div class="col-lg-6 col-sm-12">
        <div
          class="card border-0"
          style="
            background-color: rgba(255, 255, 255, 0.8);
            margin-bottom: 20px;
            height: 450px;
          "
        >
          <img
            src="about-photo.jpg"
            alt="image"
            style="
              height: 280px;
              margin-top: 10px;
              margin-left: 10px;
              margin-right: 10px;
                  object-fit: cover;
    object-position: 20% 20%;
            "
          />
          <div class="card-body">
            <h5 class="card-title">Galerija Fine Art Co</h5>
            <p class="card-text">
              Pažljivo odabrana dela najboljih umetnika čine našu kolekciju uzbudljivom, fascinantnom i primamljivom. Jednostavan za korišćenje, pretragu umetnina i postavljanje novih ponuda.
            </p>
            <div><img src="telephone.png" alt="image" /> +381 63 123 4567</div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12">
        <map-view></map-view>
      </div>
    </div>
    <hr>
    <div>
        <br>
        <h2><strong>Osvojene nagrade</strong></h2>
        <br>
    </div>
    <div class="row d-flex justify-content-around bottom">
      <div class="col-sm-12 col-lg-4">
        <div class="card mx-auto" style="width: 400px; height: 300px;">
          <div class="card-body">
            <h5 class="card-title">PLEINAIR SALON ART COMPETITION</h5>
            <h6 class="card-subtitle mb-2 text-muted">First place</h6>
            <p class="card-text" style="text-align: justify;">
              PleinAir magazine hosts monthly painting competitions that award
              artists across a variety of painting mediums. The winners of the
              monthly competitions will be entered into the annual competition
              with a chance to win $15,000.
            </p>
            <a href="https://pleinairsalon.com/" class="card-link" style="text-decoration: none; color:black;">Pogledaj</a>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-4">
        <div class="card mx-auto" style="width: 400px; height: 300px;">
          <div class="card-body">
            <h5 class="card-title">WATERMEDIA SHOWCASE</h5>
            <h6 class="card-subtitle mb-2 text-muted">Second place</h6>
            <p class="card-text" style="text-align: justify;">
              The Watermedia Showcase awards original art created primarily with
              water-based media (watercolor, acrylic, casein, gouache, or egg
              tempera) on a surface created for water media. Judged by the
              editors of Watercolor Artist, all winners, and honorable mentions
              will have their work featured in the magazine.
            </p>
            <a
              href="https://www.artistsnetwork.com/art-competitions/watermedia-showcase/"
              class="card-link" style="text-decoration: none; color:black;"
              >Pogledaj</a
            >
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-4">
        <div class="card mx-auto" style="width: 400px; height: 300px;">
          <div class="card-body">
            <h5 class="card-title">JACKSON'S PAINTING PRIZE</h5>
            <h6 class="card-subtitle mb-2 text-muted">First place</h6>
            <p class="card-text" style="text-align: justify;">
              Jackson's Painting Prize was created to reward excellence in
              two-dimensional works of fine art. Both painting and drawing media
              are accepted and in addition to the main prize, there are also
              awards for emerging artists, best watercolor, and people's choice.
              Entries open December 1, 2022 and close March 1, 2023.
            </p>
            <a
              href="https://www.jacksonsart.com/paintingprize/"
              class="card-link" style="text-decoration: none; color:black;"
              >Pogledaj</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
   <div v-else class="container aboutus" style="padding-top: 40px" id="about">
    <div class="row" >
      <div class="col-lg-6 col-sm-12">
        <div
          class="card border-0"
          style="
            background-color: rgba(255, 255, 255, 0.8);
            margin-bottom: 20px;
            height: 450px;
          "
        >
          <img
            src="about-photo.jpg"
            alt="image"
            style="
              height: 280px;
              margin-top: 10px;
              margin-left: 10px;
              margin-right: 10px;
                  object-fit: cover;
    object-position: 20% 20%;
            "
          />
          <div class="card-body">
            <h5 class="card-title">Fine Art Co Gallery</h5>
            <p class="card-text">
              Carefully curated pieces from best artists in the world ensure that our collection is always fresh and exciting. Easy to use, navigate and find exactly what you're looking for.
            </p>
            <div><img src="telephone.png" alt="image" /> +381 63 123 4567</div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12">
        <map-view></map-view>
      </div>
    </div>
    <hr>
    <div>
        <br>
        <h2><strong>Awards won</strong></h2>
        <br>
    </div>
    <div class="row d-flex justify-content-around bottom">
      <div class="col-sm-12 col-lg-4">
        <div class="card mx-auto" style="width: 400px; height: 300px;">
          <div class="card-body">
            <h5 class="card-title">PLEINAIR SALON ART COMPETITION</h5>
            <h6 class="card-subtitle mb-2 text-muted">First place</h6>
            <p class="card-text" style="text-align: justify;">
              PleinAir magazine hosts monthly painting competitions that award
              artists across a variety of painting mediums. The winners of the
              monthly competitions will be entered into the annual competition
              with a chance to win $15,000.
            </p>
            <a href="https://pleinairsalon.com/" class="card-link" style="text-decoration: none; color:black;">View</a>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-4">
        <div class="card mx-auto" style="width: 400px; height: 300px;">
          <div class="card-body">
            <h5 class="card-title">WATERMEDIA SHOWCASE</h5>
            <h6 class="card-subtitle mb-2 text-muted">Second place</h6>
            <p class="card-text" style="text-align: justify;">
              The Watermedia Showcase awards original art created primarily with
              water-based media (watercolor, acrylic, casein, gouache, or egg
              tempera) on a surface created for water media. Judged by the
              editors of Watercolor Artist, all winners, and honorable mentions
              will have their work featured in the magazine.
            </p>
            <a
              href="https://www.artistsnetwork.com/art-competitions/watermedia-showcase/"
              class="card-link" style="text-decoration: none; color:black;"
              >View</a
            >
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-4">
        <div class="card mx-auto" style="width: 400px; height: 300px;">
          <div class="card-body">
            <h5 class="card-title">JACKSON'S PAINTING PRIZE</h5>
            <h6 class="card-subtitle mb-2 text-muted">First place</h6>
            <p class="card-text" style="text-align: justify;">
              Jackson's Painting Prize was created to reward excellence in
              two-dimensional works of fine art. Both painting and drawing media
              are accepted and in addition to the main prize, there are also
              awards for emerging artists, best watercolor, and people's choice.
              Entries open December 1, 2022 and close March 1, 2023.
            </p>
            <a
              href="https://www.jacksonsart.com/paintingprize/"
              class="card-link" style="text-decoration: none; color:black;"
              >View</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

hr, h2 {
    color: white;
}

.aboutus{
      min-height: 100vh;
      background: rgba(1, 1, 1, 0.7);
        margin:auto;
        text-align: center;
         padding-right: 0px;
    max-width: none;
}

.bottom {
    padding-bottom: 40px;
}

.col-lg-6{
    padding-left: 4%;
}

</style>

<script>
import $ from "jquery";
import MapView from "../components/MapView.vue";

export default {
  name: "AboutView",
  components: { MapView },
  mounted() {
    if (this.verify() == "serbian") {
      $(document).prop("title", "Fine Art Co O nama");
    } else {
      $(document).prop("title", "Fine Art Co About us");
    }
  },
  methods: {
    verify() {
      return JSON.parse(localStorage.getItem("language"));
    },
  },
};
</script>