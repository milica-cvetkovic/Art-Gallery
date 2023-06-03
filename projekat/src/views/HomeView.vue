<template>
  <div id="home" class="container-fluid">
    <div class="row">
      <div class="col-sm-12"  id="title">   
          <p>Fine Art Co pruža posetiocima mogućnost da istraže i saznaju više o umetničkim delima iz kolekcije galerije, kao i da postave svoje ponude i komentare. Korisnici mogu pregledati slike, skulpture i ostale umetnine i saznati više o autorima i istoriji umetnosti iz perioda renesanse.</p>
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
    $(document).prop("title", "Fine Art Co Home");
  },
};
</script>