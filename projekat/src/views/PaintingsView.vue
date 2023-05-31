<template>
  <div class="container">
    <div class="row" style="display: flex; justify-content: center">
        <div class="nput-group mt-2 mx-2">
          <div class="form-outline w-auto">
            <input type="search" id="form1" class="form-control-dropdown" v-model="searchWord"/>
            <button class="btn btn-dark" for="form1" @click="search()">Pretrazi</button>
          </div>
        <div class="dropdown">
                <button
                  class="btn btn-dark text-decoration-none"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >Sortiranje</button
                >
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton1"
                  style="background-color: rgba(0, 0, 0, 0.9)"
                  onclick="event.stopPropagation()"
                > 
                  <li><input type="radio" name="nameSort" v-model="nameSort" id="nameSortAsc" value="nameSortAsc" style="margin-left: 20px"><label for="nameSortAsc" style="margin-left: 20px">Po nazivu rastuće</label></li>
                  <li><input type="radio" name="nameSort" v-model="nameSort" id="nameSortDesc" value="nameSortDesc" style="margin-left: 20px"><label for="nameSortDesc" style="margin-left: 20px">Po nazivu opadajuće</label></li>
                  <li><input type="radio" name="artistSort" v-model="artistSort" id="artistSortAsc" value="artistSortAsc" style="margin-left: 20px"><label for="artistSortAsc" style="margin-left: 20px">Po umetniku rastuće</label></li>
                  <li><input type="radio" name="artistSort" v-model="artistSort" id="artistSortDesc" value="artistSortDesc" style="margin-left: 20px"><label for="artistSortDesc" style="margin-left: 20px">Po umetniku opadajuće</label></li>
                  <li style="text-align: center"><button class="btn btn-dark" @click="sort()">Sortiraj</button></li>
                
                </ul>
              </div>
      </div>
    </div>
    <div class="row" style="margin-top: 20px; display: flex; justify-content: center">
      <div class="col-lg-4 col-sm-6 col-12" v-for="p of paintings" :key="p.name">
        <div class="card border-0" style="background-color : rgba(255, 255, 255, 0.8); margin: auto;">
        <img v-bind:src="'artworks/' + p.photo" alt="image" style="height: 280px; margin-top: 10px; margin-left: 10px; margin-right: 10px"/>
        <div class="card-body">
          <h5 class="card-title">{{ p.name }}</h5>
          <p class="card-text">
            {{ p.description }}
          </p>
          <a href="#" class="btn">Više</a>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  --bs-gutter-x: unset;
}

.card:hover{
  transform: scale(1.05)
}
</style>

<script>
import $ from "jquery";

export default {
  name: "PaintingsView",
  data() {
    return {
      paintings: [],
      nameSort: "",
      artistSort: "",
      searchWord: ""
    };
  },
  created() {
    $(document).prop("title", "Gallery Paintings");
    $(document).on('click', '.dropdown .dropdown-menu', function (e) {
      e.stopPropagation();
    });
    if (localStorage.getItem("paintings") == null) {
      this.paintings = [
        {
          name: "The Last Supper",
          description: "Short description",
          artist: "Leonardo da Vinci",
          value: 10000,
          age: 500,
          photo: 'painting1.jpg',
          idArtist: 1
        },
        {
          name: "The Creation od Adam",
          description: "Short description",
          artist: "Michaelangelo Buonarotti",
          value: 7000,
          age: 500,
          photo: "painting2.jpg",
          idArtist: 2
        },
        {
          name: "The Birth of Venus",
          description: "Short description",
          artist: "Sandro Botticelli",
          value: 5000,
          age: 500,
          photo: "painting3.jpg",
          idArtist: 4
        },
      ];
      localStorage.setItem("paintings", JSON.stringify(this.paintings));
    } else {
      this.paintings = JSON.parse(localStorage.getItem("paintings"));
    }
  },
  methods: {
    sort(){
      let comparingFunction = null;
      if (this.nameSort == "" && this.artistSort == ""){
        return;
      }
      else if (this.nameSort != "" && this.artistSort == ""){
        if (this.nameSort == "nameSortAsc"){
          comparingFunction = function(a, b){
            if (a.name < b.name) {
              return -1;
            }
            else if (a.name > b.name) {
              return 1;
            }
            else {
              return 0;
            }
          }
        }
        else {
          comparingFunction = function(a, b){
            if (a.name > b.name) {
              return -1;
            }
            else if (a.name < b.name) {
              return 1;
            }
            else {
              return 0;
            }
          }
        }
      }
      else if (this.nameSort == "" && this.artistSort != ""){
        if (this.artistSort == "artistSortAsc"){
          comparingFunction = function(a, b){
            if (a.artist < b.artist){
              return -1;
            }
            else if (a.artist > b.artist){
              return 1;
            }
            else {
              return 0;
            }
          }
        }
        else if (this.artistSort == "artistSortDesc"){
          comparingFunction = function(a, b){
            if (a.artist > b.artist){
              return -1;
            }
            else if (a.artist < b.artist){
              return 1;
            }
            else {
              return 0;
            }
          }
        }
      }
      else {
        if (this.nameSort == "nameSortAsc" && this.artistSort == "artistSortAsc"){
          comparingFunction = function(a, b){
            if (a.name < b.name) {
              return -1;
            }
            else if (a.name > b.name){
              return 1;
            }
            else {
              if (a.artist < b.artist){
                return -1;
              }
              else if (a.artist > b.artist){
                return 1;
              }
              else {
                return 0;
              }
            }
          }
        }
        else if (this.nameSort == "nameSortAsc" && this.artistSort == "artistSortDesc") {
          comparingFunction = function(a, b){
            if (a.name < b.name) {
              return -1;
            }
            else if (a.name > b.name){
              return 1;
            }
            else {
              if (a.artist > b.artist){
                return -1;
              }
              else if (a.artist < b.artist){
                return 1;
              }
              else {
                return 0;
              }
            }
          }
        }
        else if (this.nameSort == "nameSortDesc" && this.artistSort == "artistSortAsc") {
          comparingFunction = function(a, b){
            if (a.name > b.name) {
              return -1;
            }
            else if (a.name < b.name){
              return 1;
            }
            else {
              if (a.artist < b.artist){
                return -1;
              }
              else if (a.artist > b.artist){
                return 1;
              }
              else {
                return 0;
              }
            }
          }
        }
        else if (this.nameSort == "nameSortDesc" && this.artistSort == "artistSortDesc"){
          comparingFunction = function(a, b){
            if (a.name > b.name) {
              return -1;
            }
            else if (a.name < b.name){
              return 1;
            }
            else {
              if (a.artist > b.artist){
                return -1;
              }
              else if (a.artist < b.artist){
                return 1;
              }
              else {
                return 0;
              }
            }
          }
        }
      }
      this.paintings.sort(comparingFunction);
    },
    search(){
      this.paintings = JSON.parse(localStorage.getItem("paintings"));
      if (this.searchWord == ""){
        return;
      }
      let searchWordLower = this.searchWord.toLowerCase();
      this.paintings = this.paintings.filter(function(elem){
        if (elem.name.toLowerCase().includes(searchWordLower) || elem.artist.toLowerCase().includes(searchWordLower)){
          return true;
        }
        else {
          return false;
        }
      })
    }
  }
};
</script>
