<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/artists">Artists</router-link>
  </div>
</template>

<style>
    #nav{
        padding: 30px;
        background-color: lightgray;
    }

    #nav a{
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active{
        color: #42b983;
    }
</style>

<script>
export default {
    name: "NavigationMain"
}
</script>