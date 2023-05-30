<template>
  <div class="container">
    <div class="row" style="margin-top: 20px; display: flex; justify-content: center">
      <div class="col-lg-4 col-sm-6 col-12" v-for="p of paintings" :key="p.name">
        <div class="card border-0" style="background-color : rgba(255, 255, 255, 0.8); margin: auto;">
        <img v-bind:src="'paintings/' + p.photo" alt="image" style="height: 280px; margin-top: 10px; margin-left: 10px; margin-right: 10px"/>
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
export default {
  name: "PaintingsView",
  data() {
    return {
      paintings: [],
    };
  },
  created() {
    if (localStorage.getItem("paintings") == null) {
      this.paintings = [
        {
          name: "The Last Supper",
          description: "Short description",
          artist: "Leonardo da Vinci",
          value: 10000,
          age: 500,
          photo: 'painting1.jpg',
        },
        {
          name: "The Creation od Adam",
          description: "Short description",
          artist: "Michaelangelo Buonarotti",
          value: 7000,
          age: 500,
          photo: "painting2.jpg",
        },
        {
          name: "The Birth of Venus",
          description: "Short description",
          artist: "Sandro Botticelli",
          value: 5000,
          age: 500,
          photo: "painting3.jpg",
        },
      ];
      localStorage.setItem("paintings", JSON.stringify(this.paintings));
    } else {
      this.paintings = JSON.parse(localStorage.getItem("paintings"));
    }
  },
};
</script>
