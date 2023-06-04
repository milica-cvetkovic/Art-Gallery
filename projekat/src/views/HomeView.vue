<template>
  <div v-if="verify() == 'serbian'" id="home" class="container-fluid">
    <div class="row">
      <div class="col-sm-12"  id="title">   
          <p>Fine Art Co pruža posetiocima mogućnost da istraže i saznaju više o umetničkim delima iz kolekcije galerije, kao i da postave svoje ponude i komentare. Korisnici mogu pregledati slike, skulpture i ostale umetnine i saznati više o autorima i istoriji umetnosti iz perioda renesanse.</p>
      </div>
    </div>
    <NewestOffersView></NewestOffersView>
  </div>
  <div v-else id="home" class="container-fluid">
    <div class="row">
      <div class="col-sm-12"  id="title">   
          <p>Fine Art Co features a wide variety of art styles, including paintings, sculptures, drawings and other forms of art. We aim to provide an immersive experience for art enthusiasts and collectors, allowing them to browse, purchase and bid on artworks from the comfort of their own homes. We aspire to promote the appreciation of renaissance art.</p>
      </div>
    </div>
    <NewestOffersView></NewestOffersView>
  </div>
</template>

<style scoped>
#home{
   background:rgba(1,1,1,0.7);
     text-align: center;
}

#home p {
  color: white;
  width: 50%;
  margin: 0 auto;
  padding-top: 50px;
  font-size: 16pt;
  font-weight: bold;
  padding-bottom: 50px;
  text-align: justify;
}

#title{
  background:rgba(1,1,1,0.5) ;
  width: 100%;
}

</style>

<script>
import $ from "jquery";
import NewestOffersView from "../components/NewestOffersView.vue";

export default {
  components: { NewestOffersView },
  name: "HomeView",
  mounted() {
    if (this.verify() == "serbian") {
      $(document).prop("title", "Fine Art Co Početna");
    } else {
      $(document).prop("title", "Fine Art Co Home");
    }
  },
  methods:{
    verify(){
    return JSON.parse(localStorage.getItem('language'));
  }
  }
};
</script>