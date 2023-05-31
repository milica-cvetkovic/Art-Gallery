<template>
  <div>
    <ProfileOffersView></ProfileOffersView>
    <profile-messages-view></profile-messages-view>
  </div>
</template>

<script>
import $ from "jquery";
import ProfileOffersView from '../components/ProfileOffersView.vue';
import ProfileMessagesView from '../components/ProfileMessagesView.vue';

export default {
  name: "ProfileView",
  components: {ProfileOffersView, ProfileMessagesView},
  mounted: function () {
    $(document).prop("title", "Fine Art Co Profile");
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