<template>
  <section v-if="verify() == 'serbian'" class="exibition-area section-gap" id="exibitions">
    <div class="container" id="newest-offers">
      <div class="row d-flex justify-content-center">
        <div class="menu-content pb-60 col-lg-10">
          <h1 class="mb-10" id="offers-title">Najnovije ponude za umetnine</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4" v-for="o of offers" :key="o.id">
          <router-link :to="o.link" style="text-decoration: none">
            <div class="card">
              <img
                class="card-img-top"
                v-bind:src="'artworks/' + o.photo + '.jpg'"
                alt=""
                style="min-height: 200px; height: 200px"
              />
              <div class="card-body">
                <h4>{{ o.artwork }}</h4>
                <p>
                  <b>Korisnik</b>: {{ o.username }}<br />
                  <b>Iznos</b>: {{ o.bidding }}
                </p>
                <h6 class="date">{{ o.day }}/{{ o.month }}/{{ o.year }}</h6>
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
  <section v-else class="exibition-area section-gap" id="exibitions">
    <div class="container" id="newest-offers">
      <div class="row d-flex justify-content-center">
        <div class="menu-content pb-60 col-lg-10">
          <h1 class="mb-10" id="offers-title">Newest offers for artworks</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4" v-for="o of offers" :key="o.id">
          <router-link :to="o.link" style="text-decoration: none">
            <div class="card">
              <img
                class="card-img-top"
                v-bind:src="'artworks/' + o.photo + '.jpg'"
                alt=""
                style="min-height: 200px; height: 200px"
              />
              <div class="card-body">
                <h4>{{ o.artwork }}</h4>
                <p>
                  <b>User</b>: {{ o.username }}<br />
                  <b>Value</b>: {{ o.bidding }}
                </p>
                <h6 class="date">{{ o.day }}/{{ o.month }}/{{ o.year }}</h6>
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
.section-gap {
  padding: 120px 0;
}

.single-exibition .date {
  color: #222;
  font-weight: 300;
}

.single-exibition > img {
  width: 50px;
  height: 50px;
}

.exibition-area {
  overflow: hidden;
}

#newest-offers {
  margin-bottom: -99999px;
  padding-bottom: 99999px;
  margin-top: -99999px;
  padding-top: 99999px;
  padding-right: 100px;
  padding-left: 100px;

  border-radius: 7px;
}

#offers-title {
  font-weight: bold;
  color: white;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>

<script>
export default {
  name: "NewestOffersView",
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
  methods:{
    verify(){
    return JSON.parse(localStorage.getItem('language'));
  }
  }
};
</script>