<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark">
      <div class="container">
        <a href="#" class="navbar-brand">
          Galerija umetnina
        </a>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a href="#" class="nav-link">Početna</a>
          </li>
          <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Umetnine</a>
              <div class="dropdown-menu">
                <a href="#" class="dropdown-item">Slike</a>
                <a href="#" class="dropdown-item">Skuplture</a>
                <a href="#" class="dropdown-item">Ostalo</a>
       
              </div>
              
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Umetnici</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Moj nalog</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">O nama</a>
          </li>
        </ul>
      </div>
    </nav>
    <section class="hdr-bg">
        <img class="bg-img" src="../assets/images/header-bg.jpg" alt="">
    </section>
  </header>
</template>

<style scoped>

.bg-img {
  height: 100vh;
  widows: 100vw;
  object-fit: cover;
  filter: brightness(0.6);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}


</style>