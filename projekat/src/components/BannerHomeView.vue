<template>
  <div
    class="container-fluid"
    id="banner"
    style="jusify-content: center; min-width: 100vw; margin-left: -30px"
  >
    <div class="row">
      <div class="col-12">
        <h1>Partneri</h1>
      </div>
    </div>
    <div
      class="row"
      style="
        width: 100%;
        display: flex;
        justify-content: center;
        margin-left: 10px;
      "
    >
      <div class="col-md-4 col-12">
        <a href="https://www.narodnimuzej.rs/posetite-nas/?lang=en"><div class="card border-0 banner-card">
          <img
            class="card-img-top"
            src="/museums/national-museum-belgrade.jpg"
            alt=""
            style="min-height: 200px; height: 200px"
          />
          <div class="card-body">
            <h4>Narodni muzej Srbije</h4>
          </div>
        </div>
        </a>
      </div>
      <div class="col-md-4 col-12">
        <a href="https://www.museodelprado.es/en"><div class="card border-0 banner-card">
          <img
            class="card-img-top"
            src="/museums/museum-prado.jpg"
            alt=""
            style="min-height: 200px; height: 200px"
          />
          <div class="card-body">
            <h4>Muzej Prado</h4>
          </div>
        </div>
        </a>
      </div>
      <div class="col-md-4 col-12">
        <a href="https://www.louvre.fr/en"><div class="card border-0 banner-card">
          <img
            class="card-img-top"
            src="/museums/louvre.jpg"
            alt=""
            style="min-height: 200px; height: 200px"
          />
          <div class="card-body">
            <h4>Muzej Luvr</h4>
          </div>
        </div></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#banner {
  background: rgba(1, 1, 1, 0.6);
  text-align: center;
}

h1,
h4 {
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
}

.banner-card {
  background-color: rgba(1, 1, 1, 0);
  margin-bottom: 50px;
}

.banner-card:hover {
  transform: scale(1.05);
}
</style>

<script>
export default {
  name: "BannerHomeView",
  data() {
    return {
      offers: [],
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
    let sculputres = JSON.parse(localStorage.getItem("sculptures"));
    let others = JSON.parse(localStorage.getItem("others"));
    this.offers = this.offers.splice(0, 3);
    for (let i = 0; i < this.offers.length; i++) {
      let painting = paintings.find(
        (elem) => elem.name == this.offers[i].artwork
      );
      let sculpture = sculputres.find(
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
  },
  methods: {
    verify() {
      return JSON.parse(localStorage.getItem("language"));
    },
  },
};
</script>