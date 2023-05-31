<template>
  <div>
    <NewestOffersView></NewestOffersView>
  </div>
</template>

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