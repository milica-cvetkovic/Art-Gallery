<template>
    <div>
        <h1 style="background-color: black">aaa</h1>
        <OffersView></OffersView>
    </div>
</template>

<script>
import OffersView from '../components/OffersView.vue';

export default {
  name: "ProfileView",
  components: {OffersView}, 
  data() {
    return {
      user: "",
      myOffers: [],
    };
  },
  created() {
    if (localStorage.getItem("user") == null) {
      localStorage.setItem("user", "elonmusk123"); // ulogovan user
    }
    this.user = localStorage.getItem("user");
    
  },
};
</script>