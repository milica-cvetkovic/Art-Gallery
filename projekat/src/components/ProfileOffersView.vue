<template>
  <div v-if="verify() == 'serbian'" class="container">
    
    <div class="row" style="margin-top: 20px">
      <div class="card border-0" style="background-color: rgba(255, 255, 255, 0.8); margin: auto">
        <div class="card-body" style="display: flex; justify-content: left">
          <h3 class="card-title">Moje ponude ({{myOffers.length}})</h3>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 20px; display: flex; justify-content: center">
      <div class="col-lg-4 col-sm-6 col-12" v-for="offer of myOffers" :key="offer.artwork">
        <div class="card border-0" style="background-color: rgba(255, 255, 255, 0.8); margin-bottom: 20px;">
          <img v-bind:src="'artworks/' + offer.photo + '.jpg'" alt="image" style="height: 280px;
                                                                            margin-top: 10px;
                                                                            margin-left: 10px;
                                                                            margin-right: 10px;"/>
          <div class="card-body">
            <h5 class="card-title">{{ offer.artwork }}</h5>
            <p class="card-text">Iznos: {{ offer.bidding }}
                <br> Datum: {{offer.day}}.{{offer.month}}.{{offer.year}}
            </p>
            <button class="btn" @click="eraseOffer(offer.artwork)" style="font-weight: bold">
              Obriši ponudu
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container">
    
    <div class="row" style="margin-top: 20px">
      <div class="card border-0" style="background-color: rgba(255, 255, 255, 0.8); margin: auto">
        <div class="card-body" style="display: flex; justify-content: left">
          <h3 class="card-title">My offers ({{myOffers.length}})</h3>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 20px; display: flex; justify-content: center">
      <div class="col-lg-4 col-sm-6 col-12" v-for="offer of myOffers" :key="offer.artwork">
        <div class="card border-0" style="background-color: rgba(255, 255, 255, 0.8); margin-bottom: 20px;">
          <img v-bind:src="'artworks/' + offer.photo + '.jpg'" alt="image" style="height: 280px;
                                                                            margin-top: 10px;
                                                                            margin-left: 10px;
                                                                            margin-right: 10px;"/>
          <div class="card-body">
            <h5 class="card-title">{{ offer.artwork }}</h5>
            <p class="card-text">Value: {{ offer.bidding }}
                <br> Date: {{offer.day}}.{{offer.month}}.{{offer.year}}
            </p>
            <button class="btn" @click="eraseOffer(offer.artwork)" style="font-weight: bold">
              Delete offer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.extraClass{
    color: darkgreen
}

::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
  width: initial !important;
}
.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>

<script>

export default {
  name: "MyOffersView",
  data() {
    return {
      myOffers: [],
    };
  },
  created() {
    let user = JSON.parse(localStorage.getItem("user"));
    let offers = JSON.parse(localStorage.getItem("offers"));
    let paintings = JSON.parse(localStorage.getItem("paintings"));
    let sculptures = JSON.parse(localStorage.getItem("sculptures"));
    let others = JSON.parse(localStorage.getItem("others"));
    for (let i = 0; i < offers.length; i++) {
      if (offers[i].username == user) {
        this.myOffers.push(offers[i]);
        let painting = paintings.find(
          (element) => element.name == offers[i].artwork
        );
        let sculpture = sculptures.find(
          (element) => element.name == offers[i].artwork
        );
        let other = others.find(
          (element) => element.name == offers[i].artwork
        );
        if (painting != null) {
          this.myOffers[this.myOffers.length - 1].photo = painting.photo;
        }
        else if (sculpture != null){
          this.myOffers[this.myOffers.length - 1].photo = sculpture.photo;
        }
        else if (other != null){
          this.myOffers[this.myOffers.length - 1].photo = other.photo;
        }
        this.myOffers[this.myOffers.length - 1].day = (new Date(offers[i].date)).getDate();
        this.myOffers[this.myOffers.length - 1].month = (new Date(offers[i].date)).getMonth() + 1;
        this.myOffers[this.myOffers.length - 1].year = (new Date(offers[i].date)).getYear() + 1900;
      }
    }
  },
  methods: { 
      eraseOffer(artwork) {
      if (!confirm("Da li ste sigurni da želite da obrišete ponudu?")) {
        return;
      }
      let user = JSON.parse(localStorage.getItem("user"));
      let offers = JSON.parse(localStorage.getItem("offers"));
      let newOffers = offers.filter(function (offer) {
        return (
          offer.username != user ||
          (offer.username == user && offer.artwork != artwork)
        );
      });
      this.myOffers = this.myOffers.filter(function (offer) {
        return (
          offer.username != user ||
          (offer.username == user && offer.artwork != artwork)
        );
      });
      localStorage.setItem("offers", JSON.stringify(newOffers));
    },
    verify() {
      return JSON.parse(localStorage.getItem("language"));
    },
  },
};
</script>