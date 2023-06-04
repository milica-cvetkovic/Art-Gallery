<template>
  <div v-if="verify() == 'serbian'" class="container">
    
    <div class="row" style="margin-top: 20px">
      <div class="card border-0" style="background-color: rgba(255, 255, 255, 0.8); margin: auto">
        <div class="card-body" style="display: flex; justify-content: left">
          <h3 class="card-title">Moje poruke ({{myMessages.length}})</h3>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 20px; display: flex; justify-content: center">
      <div class="col-lg-4 col-sm-6 col-12" v-for="message of myMessages" :key="message.id">
        <div class="card border-0" style="background-color: rgba(255, 255, 255, 0.8); margin-bottom: 20px;">
          <img v-bind:src="'artistImages/' + message.photo" alt="image" style="height: 280px;
                                                                            margin-top: 10px;
                                                                            margin-left: 10px;
                                                                            margin-right: 10px;"/>
          <div class="card-body">
            <h5 class="card-title">{{ message.artist }}</h5>
            <p class="card-text"><i>{{ message.text }}</i></p>
            <button class="btn" @click="eraseMessage(message.id)" style="font-weight: bold">
              Obriši poruku
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container">
    
    <div class="row" style="margin-top: 20px">
      <div class="card border-0" style="background-color: rgba(255, 255, 255, 0.8); margin: auto">
        <div class="card-body" style="display: flex; justify-content: left">
          <h3 class="card-title">My messages ({{myMessages.length}})</h3>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 20px; display: flex; justify-content: center">
      <div class="col-lg-4 col-sm-6 col-12" v-for="message of myMessages" :key="message.id">
        <div class="card border-0" style="background-color: rgba(255, 255, 255, 0.8); margin-bottom: 20px;">
          <img v-bind:src="'artistImages/' + message.photo" alt="image" style="height: 280px;
                                                                            margin-top: 10px;
                                                                            margin-left: 10px;
                                                                            margin-right: 10px;"/>
          <div class="card-body">
            <h5 class="card-title">{{ message.artist }}</h5>
            <p class="card-text"><i>{{ message.text }}</i></p>
            <button class="btn" @click="eraseMessage(message.id)" style="font-weight: bold">
              Delete message
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.extraClass{
    color: darkgreen
}

::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
  width: initial !important;
}
.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>

<script>

export default {
  name: "MessagesView",
  data() {
    return {
      myMessages: [],
    };
  },
  created() {
    let user = localStorage.getItem("user");
    let messages = JSON.parse(localStorage.getItem("messages"));
    let artists = JSON.parse(localStorage.getItem("artists"));
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].username == user) {
        this.myMessages.push(messages[i]);
        let artist = artists.find(
          (element) => element.id == messages[i].idArtist
        );
        this.myMessages[this.myMessages.length - 1].artist = artist.name + " " + artist.surname;
        this.myMessages[this.myMessages.length - 1].photo = artist.photo;
      }
    }
  },
  methods: { 
      eraseMessage(id) {
      if (!confirm("Da li ste sigurni da želite da obrišete poruku?")) {
        return;
      }
      let messages = JSON.parse(localStorage.getItem("messages"));
      let newMessages = messages.filter(function (message) {
        return message.id != id;
      });
      this.myMessages = this.myMessages.filter(function (message) {
        return message.id != id;
      });
      localStorage.setItem("messages", JSON.stringify(newMessages));
    },
    verify() {
      return JSON.parse(localStorage.getItem("language"));
    },
  },
};
</script>