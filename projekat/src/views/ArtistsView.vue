<template>
  <div v-if="verify() == 'serbian'" class="container-fluid" id="artists">

    <div class="row">
      <div class="col-sm-12 nput-group mt-2" style="margin-top: 20px">
        <router-link to="/" style="text-decoration: none; color: gray">
          Početna
        </router-link>
        / Umetnici
      </div>
    </div>
    <div
      class="row"
      id="artists-display"
      style="display: flex; justify-content: center"
    >
      <div
        class="col-xl-4 col-lg-6 col-12 artist-single"
        v-for="a of artists"
        :key="a.id"
      >
        <div
          class="card border-0"
          style="
            background-color: rgba(255, 255, 255, 0.8);
            margin: auto;
            height: 100%;
            margin-top: 30px;
          "
        >
          <img
            v-bind:src="'artistImages/' + a.photo"
            alt="image"
            style="
              min-height: 280px;
              height: 280px;
              margin-top: 10px;
              margin-left: 10px;
              margin-right: 10px;
              object-fit: cover;
    object-position: 20% 20%;
            "
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ a.ime }}</h5>
            <p class="card-text">
              {{ a.opis }}
            </p>
            <a v-bind:href="'/spisakdela/'+ a.listArtworks" class="btn mt-auto" @click="viewSculpture()"
              >Sva dela</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container-fluid" id="artists">

    <div class="row">
      <div class="col-sm-12 nput-group mt-2" style="margin-top: 20px">
        <router-link to="/" style="text-decoration: none; color: gray">
          Home
        </router-link>
        / Artists
      </div>
    </div>
    <div
      class="row"
      id="artists-display"
      style="display: flex; justify-content: center"
    >
      <div
        class="col-xl-4 col-lg-6 col-12 artist-single"
        v-for="a of artists"
        :key="a.id"
      >
        <div
          class="card border-0"
          style="
            background-color: rgba(255, 255, 255, 0.8);
            margin: auto;
            height: 100%;
            margin-top: 30px;
          "
        >
          <img
            v-bind:src="'artistImages/' + a.photo"
            alt="image"
            style="
              min-height: 280px;
              height: 280px;
              margin-top: 10px;
              margin-left: 10px;
              margin-right: 10px;
            "
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ a.name }}</h5>
            <p class="card-text">
              {{ a.biography }}
            </p>
            <a v-bind:href="'/spisakdela/'+ a.listArtworks" class="btn mt-auto" @click="viewSculpture()"
              >All artworks</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  --bs-gutter-x: unset;
}

.card:hover {
  transform: scale(1.05);
}

#artists {
  background: rgba(255, 255, 255, 0.8);
  /* margin-bottom: -99999px; */
  padding-bottom: 200px;
  min-height: 100vh;
}

#artists-display {
  width: 80%;
  margin: auto;
}

.form-outline {
  padding-right: 5px;
}

.form-outline button {
  padding-left: 5px;
}

.artist-single {
  padding-right: 30px;
    margin-bottom: 30px;
}


</style>

<script>
import $ from "jquery";

export default {
  name: "ArtistsVue",
  data() {
    return {
      artists: [],
    };
  },
  mounted() {
    this.artists = JSON.parse(localStorage.getItem("artists"));
    if (this.verify() == "serbian") {
      $(document).prop("title", "Fine Art Co Umetnici");
    } else {
      $(document).prop("title", "Fine Art Co Artists");
    }
  },
  methods: {
    verify() {
      return JSON.parse(localStorage.getItem("language"));
    },
  },
};
</script>
