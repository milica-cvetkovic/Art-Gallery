<template>
  <div class="container-fluid" id="sculptures">
    <div class="row" style="display: flex; justify-content: center">
      <div class="nput-group mt-2 mx-2" >
        <div class="dropdown" style="float:right;">
          <a
          type="button"
            class="btn btn-dark text-decoration-none"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sortiranje
          </a>
          <ul
            class="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton1"
            style="background-color: rgba(0, 0, 0, 0.9)"
            onclick="event.stopPropagation()"
          >
            <li>
              <input
                type="radio"
                name="nameSort"
                v-model="nameSort"
                id="nameSortAsc"
                value="nameSortAsc"
                style="margin-left: 20px"
              /><label for="nameSortAsc" style="margin-left: 20px"
                >Po nazivu rastuće</label
              >
            </li>
            <li>
              <input
                type="radio"
                name="nameSort"
                v-model="nameSort"
                id="nameSortDesc"
                value="nameSortDesc"
                style="margin-left: 20px"
              /><label for="nameSortDesc" style="margin-left: 20px"
                >Po nazivu opadajuće</label
              >
            </li>
            <li>
              <input
                type="radio"
                name="artistSort"
                v-model="artistSort"
                id="artistSortAsc"
                value="artistSortAsc"
                style="margin-left: 20px"
              /><label for="artistSortAsc" style="margin-left: 20px"
                >Po umetniku rastuće</label
              >
            </li>
            <li>
              <input
                type="radio"
                name="artistSort"
                v-model="artistSort"
                id="artistSortDesc"
                value="artistSortDesc"
                style="margin-left: 20px"
              /><label for="artistSortDesc" style="margin-left: 20px"
                >Po umetniku opadajuće</label
              >
            </li>
            <li style="text-align: center">
              <button class="btn btn-dark" @click="sort()">Sortiraj</button>
            </li>
          </ul>
        </div>
        <div class="form-outline w-auto" style="float:right;">
          <input
            type="search"
            id="form1"
            class="form-control-dropdown"
            v-model="searchWord"
          /> &nbsp;
          <button class="btn btn-dark" for="form1" @click="search()">
            Pretrazi
          </button>
        </div>
        
      </div>
    </div>
    <div
      class="row"
      id="sculptures-display"
      style="margin-top: 20px; display: flex; justify-content: center"
    >
      <div class="col-xl-4 col-lg-6 col-12 sculpture-single" v-for="s of sculptures" :key="s.id">
        <router-link
          style="text-decoration: none; color: inherit"
          :to="/sculptures/ + s.id"
        >
          <div
            class="card border-0"
            style="background-color: rgba(255, 255, 255, 0.8); margin: auto; height: 750px; margin-top: 30px"
          >
            <img
              v-bind:src="'artworks/' + s.photo"
              alt="image"
              style="
                min-height: 280px;
                height: 280px;
                margin-top: 10px;
                margin-left: 10px;
                margin-right: 10px;
              "
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ s.name }}</h5>
              <p class="card-text">
                {{ s.description }}
              </p>
              <a href="#" class="btn mt-auto" @click="viewSculpture()">Više</a>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  --bs-gutter-x: unset;
}

.card:hover {
  transform: scale(1.05);
}

#sculptures {
  background: rgba(255, 255, 255, 0.8);
  /* margin-bottom: -99999px; */
  padding-bottom: 200px;
}

#sculptures-display {
  width: 80%;
  margin: auto;
}

.form-outline {
  padding-right: 5px;
}

.form-outline button {
  padding-left: 5px;
}

.sculpture-single{
  padding-right: 30px;
}
</style>

<script>
import $ from "jquery";
import sculptures from '../data/sculptures.js';

export default {
    mounted: function () {
    $(document).prop("title", "Fine Art Co Scultpures");
  },
name: "SculpturesView",
  data() {
    return {
      sculptures: [],
      nameSort: "",
      artistSort: "",
      searchWord: "",
    };
  },
  created() {
    $(document).prop("title", "Fine Art Co Paintings");
    $(document).on("click", ".dropdown .dropdown-menu", function (e) {
      e.stopPropagation();
    });
    this.sculptures = sculptures;
  },
  methods: {
    sort() {
      let comparingFunction = null;
      if (this.nameSort == "" && this.artistSort == "") {
        return;
      } else if (this.nameSort != "" && this.artistSort == "") {
        if (this.nameSort == "nameSortAsc") {
          comparingFunction = function (a, b) {
            if (a.name < b.name) {
              return -1;
            } else if (a.name > b.name) {
              return 1;
            } else {
              return 0;
            }
          };
        } else {
          comparingFunction = function (a, b) {
            if (a.name > b.name) {
              return -1;
            } else if (a.name < b.name) {
              return 1;
            } else {
              return 0;
            }
          };
        }
      } else if (this.nameSort == "" && this.artistSort != "") {
        if (this.artistSort == "artistSortAsc") {
          comparingFunction = function (a, b) {
            if (a.artist < b.artist) {
              return -1;
            } else if (a.artist > b.artist) {
              return 1;
            } else {
              return 0;
            }
          };
        } else if (this.artistSort == "artistSortDesc") {
          comparingFunction = function (a, b) {
            if (a.artist > b.artist) {
              return -1;
            } else if (a.artist < b.artist) {
              return 1;
            } else {
              return 0;
            }
          };
        }
      } else {
        if (
          this.nameSort == "nameSortAsc" &&
          this.artistSort == "artistSortAsc"
        ) {
          comparingFunction = function (a, b) {
            if (a.name < b.name) {
              return -1;
            } else if (a.name > b.name) {
              return 1;
            } else {
              if (a.artist < b.artist) {
                return -1;
              } else if (a.artist > b.artist) {
                return 1;
              } else {
                return 0;
              }
            }
          };
        } else if (
          this.nameSort == "nameSortAsc" &&
          this.artistSort == "artistSortDesc"
        ) {
          comparingFunction = function (a, b) {
            if (a.name < b.name) {
              return -1;
            } else if (a.name > b.name) {
              return 1;
            } else {
              if (a.artist > b.artist) {
                return -1;
              } else if (a.artist < b.artist) {
                return 1;
              } else {
                return 0;
              }
            }
          };
        } else if (
          this.nameSort == "nameSortDesc" &&
          this.artistSort == "artistSortAsc"
        ) {
          comparingFunction = function (a, b) {
            if (a.name > b.name) {
              return -1;
            } else if (a.name < b.name) {
              return 1;
            } else {
              if (a.artist < b.artist) {
                return -1;
              } else if (a.artist > b.artist) {
                return 1;
              } else {
                return 0;
              }
            }
          };
        } else if (
          this.nameSort == "nameSortDesc" &&
          this.artistSort == "artistSortDesc"
        ) {
          comparingFunction = function (a, b) {
            if (a.name > b.name) {
              return -1;
            } else if (a.name < b.name) {
              return 1;
            } else {
              if (a.artist > b.artist) {
                return -1;
              } else if (a.artist < b.artist) {
                return 1;
              } else {
                return 0;
              }
            }
          };
        }
      }
      this.sculptures.sort(comparingFunction);
    },
    search() {
      this.sculptures = JSON.parse(localStorage.getItem("sculptures"));
      if (this.searchWord == "") {
        return;
      }
      let searchWordLower = this.searchWord.toLowerCase();
      this.sculptures = this.sculptures.filter(function (elem) {
        if (
          elem.name.toLowerCase().includes(searchWordLower) ||
          elem.artist.toLowerCase().includes(searchWordLower)
        ) {
          return true;
        } else {
          return false;
        }
      });
    },
  },
}
</script>