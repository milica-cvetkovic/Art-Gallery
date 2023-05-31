<template>
  <div>
    <div class="container" id="allArtists"></div>
  </div>
</template>

<script>
import $ from "jquery";
import artists from "../data/artists.js";

export default {
    name: "ArtistsVue",
    mounted: function() {
        let row = $("<div></div>").addClass("row");
        $(document).prop("title", "Gallery Artists");

        for (let i = 0; i < artists.length * 2; i++){
            if (i % 3 == 0){
                row = $("<div></div>").addClass("row").css({
                    "margin-top" : "20px"
                });
                $("#allArtists").append(row);
            }
            let outerArtistData = $("<div></div>").addClass("col-lg-4 col-sm-12").css({
                "float": "none",
                "display": "table-cell",
                "vertical-align": "top"
            });
            let artistData = $("<div></div>").addClass("card border-0").css({
                "background-color" : "rgba(255, 255, 255, 0.8)"
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
                $("<img></img>").addClass("card-img-top").attr("src", "artistImages/artist_" + artists[i % 4].id + ".jpg").css({
                    "height" : "350px"
            })
            ).append(
                $("<div></div>").addClass("card-body").append(
                    $("<h4></h4>").addClass("card-title").html(artists[i % 4].name + " " + artists[i % 4].surname).css({
                        "color" : "black"
                    })
                ).append( $("<div></div>").css({"height": "350px"}).append(
                    $("<p></p>").addClass("card-text").html(artists[i % 4].biography).css({
                        "color" : "black"
                    }))
                )
            ).append(
                    $("<a></a>").attr("href", "#").addClass("btn btn-success").html("Sva dela").css({
                        "margin" : "10px 10px 10px 10px"
                    })
            );
            outerArtistData.append(artistData);
            row.append(outerArtistData);
        }
    } 
}
</script>
