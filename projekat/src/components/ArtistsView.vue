<template>
  <div>
    <div class="container   " id="allArtists">

    </div>
  </div>
</template>

<script>
import $ from "jquery";
import allArtists from "../data/artists.js";

export default {
    name: "ArtistsVue",
    mounted: function() {
        let row = $("<div></div>").addClass("row");
        $(document).prop("title", "Gallery Artists");

        for (let i = 0; i < allArtists.length * 2; i++){
            if (i % 3 == 0){
                row = $("<div></div>").addClass("row");
                $("#allArtists").append(row);
            }
            let artistData = $("<div></div>").addClass("col-lg-4 col-md-12 card border-0").css({
                "padding-left" : "40px",
                "padding-right" : "40px",
                "margin-top" : "30px",
                "margin-bottom" : "30px"
            }).hover(function(){
                $(this).css({
                    "transform" : "scale(1.05)"
                })
            }, function(){
                $(this).css({
                    "transform" : "scale(1)"
                })
            });
            artistData.append(
                $("<img></img>").addClass("card-img-top").attr("src", "artistImages/artist_" + allArtists[i % 4].id + ".jpg").css({
                "width" : "100%",
                "height" : "300px"
            })
            ).append(
                $("<div></div>").addClass("card-body").append(
                    $("<h4></h4>").addClass("card-title").html(allArtists[i % 4].name + " " + allArtists[i % 4].surname)
                ).append(
                    $("<p></p>").addClass("card-text").html(allArtists[i % 4].biography)
                )
            ).append(
                    $("<a></a>").attr("href", "#").addClass("btn btn-success").html("Sva dela").css({"margin-bottom" : "10px"})
            );
            row.append(artistData);
        }
    } 
}
</script>
