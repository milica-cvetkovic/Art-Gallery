<template>
    <div class="container" style="margin-top: 20px">
        <div class="row" style="display: flex; justify-content: center">
            <div class="col-md-6">
                <div class="card border-0" style="background-color: rgba(255, 255, 255, 0.8); margin-bottom: 20px; height: 450px">
                    <img src="about-photo.jpg" alt="image" style="height: 280px;
                                                                            margin-top: 10px;
                                                                            margin-left: 10px;
                                                                            margin-right: 10px;"/>
          <div class="card-body">
            <h5 class="card-title">Galerija (insert ime)</h5>
            <p class="card-text">
                (insert random info) - ako predje visinu onda treba da se prilagodi visina mape da budu jednaki :)
            </p>
            <div>
                <img src="telephone.png" alt="image"> +381 63 123 4567
            </div>
          </div>
        </div>
            </div>
            <div class="col-sm-6">
                <map-view></map-view>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
import MapView from "../components/MapView.vue";

export default {
    name: "AboutView",
    components: {MapView},
    mounted(){
        $(document).prop("title", "Gallery About");
    }
}
</script>