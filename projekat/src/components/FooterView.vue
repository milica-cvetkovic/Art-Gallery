<template>
  <div>
    <div class="footer">
      <h6>
        <i>
          Copyright 2023, Милица Цветковић и Жељко Урошевић, Одсек за софтверско
          инжењерство Електротехничког факултета Универзитета у Београду
        </i>
      </h6>
    </div>
  </div>
</template>

<style scoped>
.footer {
  position:fixed;
  left: 0;
  bottom: 0;
  color: white;
  text-align: center;
  background-color: black;
  width: 100%;
  height: 40px;
}

h6 {
  padding-top: 10px;
}
</style>

<script>
export default {
  name: "FooterView",
};
</script>