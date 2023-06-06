<template>
  <section v-if="verify() == 'serbian'" class="artworks-area section-gap" id="artworks">
    <div class="container" id="newest-artworks">
      <div class="row d-flex justify-content-center">
        <div class="menu-content pb-60 col-lg-10">
          <h1 class="mb-10" id="artworks-title">Najnovije umetnine</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 single-artwork" v-for="a of artworks" :key="a.id" style="margin-top: 20px">
          <router-link :to="a.link" style="text-decoration: none">
            <div class="card">
              <img
                class="card-img-top"
                v-bind:src="'artworks/' + a.photo + '.jpg'"
                alt=""
                style="min-height: 200px; height: 200px"
              />
              <div class="card-body">
                <h4>{{ a.ime }}</h4>
                <p>
                  <b>Umetnik</b>: {{ a.umetnik }}<br />
                  <b>Vrednost</b>: {{ a.vrednost }}
                </p>
              </div>
            </div>
            </router-link>
        </div>
      </div>
      <div class="row">
        <br />
      </div>
    </div>
  </section>
  <section v-else class="artworks-area section-gap" id="artworks">
    <div class="container" id="newest-artworks">
      <div class="row d-flex justify-content-center">
        <div class="menu-content pb-60 col-lg-10">
          <h1 class="mb-10" id="artworks-title">Newest artworks</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4 single-artwork" v-for="a of artworks" :key="a.id">
          <router-link :to="a.link" style="text-decoration: none">
            <div class="card">
              <img
                class="card-img-top"
                v-bind:src="'artworks/' + a.photo + '.jpg'"
                alt=""
                style="min-height: 200px; height: 200px"
              />
              <div class="card-body">
                <h4>{{ a.name }}</h4>
                <p>
                  <b>Artist</b>: {{ a.artist }}<br />
                  <b>Value</b>: {{ a.value }}
                </p>
              </div>
            </div>
            </router-link>
        </div>
      </div>
      <div class="row">
        <br />
      </div>
    </div>
  </section>
</template>

<style scoped>

.card-img-top{
    object-fit: cover;
    object-position: 20% 20%;
}

.section-gap {
  padding: 120px 0;
}

.single-artwork:hover {
  transform: scale(1.05);
}

.single-exibition .date {
  color: #222;
  font-weight: 300;
}

.single-exibition > img {
  width: 50px;
  height: 50px;
}

.artworks-area {
  overflow: hidden;
}

#newest-artworks {
  margin-bottom: -99999px;
  padding-bottom: 99999px;
  margin-top: -99999px;
  padding-top: 99999px;
  padding-right: 100px;
  padding-left: 100px;

  border-radius: 7px;
}

#artworks-title {
  font-weight: bold;
  color: white;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>

<script>

export default {
  name: "NewestArtworkComponent",
  data() {
    return {
      offers: [],
      artworks: []
    };
  },
  created() {
    this.offers = JSON.parse(localStorage.getItem("offers"));
    this.offers.sort(function (a, b) {
      if (new Date(a.date) < new Date(b.date)) {
        return 1;
      } else if (new Date(a.date) > new Date(b.date)) {
        return -1;
      } else {
        return 0;
      }
    });
    let paintings = JSON.parse(localStorage.getItem("paintings"));
    let sculptures = JSON.parse(localStorage.getItem("sculptures"));
    let others = JSON.parse(localStorage.getItem("others"));
    this.offers = this.offers.splice(0, 3);
    for (let i = 0; i < this.offers.length; i++) {
      let painting = paintings.find(
        (elem) => elem.name == this.offers[i].artwork
      );
      let sculpture = sculptures.find(
        (elem) => elem.name == this.offers[i].artwork
      );
      let other = others.find((elem) => elem.name == this.offers[i].artwork);
      if (painting != null) {
        this.offers[i].photo = painting.photo;
        this.offers[i].link = "/paintings/" + painting.id;
      } else if (sculpture != null) {
        this.offers[i].photo = sculpture.photo;
        this.offers[i].link = "/sculptures/" + sculpture.id;
      } else if (other != null) {
        this.offers[i].photo = other.photo;
        this.offers[i].link = "/others/" + other.id;
      }
      this.offers[i].day = new Date(this.offers[i].date).getDate();
      this.offers[i].month = new Date(this.offers[i].date).getMonth() + 1;
      this.offers[i].year = new Date(this.offers[i].date).getYear() + 1900;
    }

    this.artworks[0] = paintings[paintings.length - 1];
    this.artworks[0].link = "/paintings/" + paintings[paintings.length - 1].id;
    this.artworks[1] = sculptures[sculptures.length - 1];
    this.artworks[1].link = "/sculptures/" + sculptures[sculptures.length - 1].id;
    this.artworks[2] = others[others.length - 1];
    this.artworks[2].link = "/others/" + others[others.length - 1].id;
  },
  methods:{
    verify(){
    return JSON.parse(localStorage.getItem('language'));
  }
  }
};
</script>