<template>
  <div>
    <OffersView></OffersView>
    <messages-view></messages-view>
  </div>
</template>

<script>
import $ from "jquery";
import OffersView from '../components/OffersView.vue';
import MessagesView from '../components/MessagesView.vue';

export default {
  name: "ProfileView",
  components: {OffersView, MessagesView},
  mounted: function () {
    $("h1").css({
      "display" : "bold"
    });
  },
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