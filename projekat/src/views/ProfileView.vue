<template>
<div v-if="logged() == false && registerCheck() == false" class="login">
  <div id="form-div">
    <form @submit="login()"> 
      <span>{{error}}</span>
      <div class="form-outline mb-4">
        <input type="text" id="loginName" class="form-control" v-model="username"/>
        <label class="form-label" for="username">Username</label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" id="loginPassword" class="form-control" v-model="password" />
        <label class="form-label" for="password">Password</label>
      </div>

      <button type="submit" class="btn btn-dark btn-block mb-4 submit" style="margin-right:10px;">Log in</button>
      <button type="button" class="btn btn-dark btn-block mb-4" @click="registerRequest()">Register</button>
    </form>
  </div>
</div>

<div v-else-if="registerCheck()">
<div id="register-div">
    <form @submit="register()">

      <div class="form-outline mb-4">
        <input type="text" id="registerUsername" class="form-control" v-model="Rusername" />
        <label class="form-label" for="registerUsername">Username</label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" id="registerPassword" class="form-control" v-model="Rpassword" />
        <label class="form-label" for="registerPassword">Password</label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" id="registerRepeatPassword" class="form-control" v-model="RrepeatPassword" />
        <label class="form-label" for="registerRepeatPassword">Repeat password</label>
      </div>

      <button type="submit" class="btn btn-dark btn-block mb-3">Sign in</button>
    </form>
</div>
</div>

<div v-else class="rest" style="margin-top: -20px; background: rgba(1, 1, 1, 0.7);">
  <ProfileOffersView></ProfileOffersView>
  <profile-messages-view></profile-messages-view>
  <button type="button" class="btn btn-dark btn-block mb-3" @click="logout()">Log out</button>
</div>
</template>

<style scoped>
.login {
  background: rgba(255, 255, 255, 0.8);
  padding-bottom: 200px;
  padding-top: 150px;
}

.form-control {
  width: 30%;
  margin: auto;
}

#form-div, #register-div {
  background: rgba(255, 255, 255, 0.8);
  padding-top: 30px;
}

#register-div, .rest{
    min-height: 100vh;
}

</style>

<script>
import $ from "jquery";
import ProfileOffersView from "../components/ProfileOffersView.vue";
import ProfileMessagesView from "../components/ProfileMessagesView.vue";
import allUsers from "../data/users.js";

export default {
  name: "ProfileView",
  components: { ProfileOffersView, ProfileMessagesView },
  mounted: function () {
    if (this.verify() == "serbian") {
      $(document).prop("title", "Fine Art Co Profil");
    } else {
      $(document).prop("title", "Fine Art Co Profile");
    }
  },
  data() {
    return {
      user: "",
      myOffers: [],
      username: "",
      password: "",
      users: [],
      Rusername: '',
      Rpassword: '',
      RrepeatPassword: ''
    };
  },
  created() {
    this.user = localStorage.getItem("user");

    if (localStorage.getItem("users") == null) {
      this.users = allUsers;
      localStorage.setItem("users", JSON.stringify(this.users));
    } else {
      this.users = JSON.parse(localStorage.getItem("users"));
    }

    if (this.verify() == "serbian") {
      $(document).prop("title", "Fine Art Co Profil");
    } else {
      $(document).prop("title", "Fine Art Co Profile");
    }
  },
  methods: {
    logged() {
      return localStorage.getItem("user") != null;
    },
    login() {
      let found = false;
      for (let i = 0; i < this.users.length; i++) {
        if (this.username == this.users[i].username) {
          found = true;
          if (this.password == this.users[i].password) {
            localStorage.setItem("user", JSON.stringify(this.username));
            location.reload();
            return;
          } else {
            this.error = "Lozinka nije ispravna";
            return;
          }
        }
      }
      if (found == false) {
        this.error = "Korisnik ne postoji";
        return;
      }
    },
    registerRequest() {
      let found = true;
      localStorage.setItem("registerRequest", JSON.stringify(found));
      location.reload();
    },
    registerCheck() {
      return localStorage.getItem("registerRequest") != null;
    },
    register() {

      for (let i = 0; i < this.users.length; i++) {
        if (this.Rusername == this.users[i].username) {
          return;
        }
      }

      if(this.Rpassword != this.RrepeatPassword){
        return;
      }

      let newUser = {
        username: this.Rusername,
        password: this.Rpassword
      };

      this.users.push(newUser);
      localStorage.setItem("users",JSON.stringify(this.users));

      localStorage.removeItem("registerRequest");
    },
    verify() {
      return JSON.parse(localStorage.getItem("language"));
    },
    logout(){
      localStorage.removeItem("user");
      location.reload();
    }
  },
};
</script>