<template>
  <v-app class="App">
    <router-view />
   <div class="main">
    <router-link class="BLACK" to="/Diff"> BlackJack </router-link>
    <router-link class="btn" to="/HowTo"> HOW TO PLAY </router-link>
    <router-link class="btn1" to="/home"> Home </router-link>
    </div>
  </v-app>
</template>

<script setup>
import AppScreen from "./components/AppScreen.vue";
</script>
<style>
.App {
  background-color: black;
}
.btn {
  position: absolute;
  top: 700px;
  left: 795px;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  padding: 5px;
  text-decoration: none;
}
.btn1 {
  position: absolute;
  top: 700px;
  left: 1050px;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  padding: 5px;
  text-decoration: none;
}
.BLACK{
   position: absolute;
  font-weight: bolder;
  top: 800px;
  left: 800px;
 text-decoration: none;
  font-size: 69px;
  color: white;
  
}

</style>

