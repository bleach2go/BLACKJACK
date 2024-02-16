<template>


  <v-app class="App">
    <v-img
      class="Bild1"
      src="https://img.freepik.com/fotos-premium/ein-schwarzer-hintergrund-mit-vielen-spielkarten-die-in-der-luft-fliegen_9493-1023.jpg"
    ></v-img>
    <v-img
      src="https://michael-weis.com/wp-content/uploads/2023/01/Vogel.gif"
      class="Bild2"
    >
    </v-img>
    <v-img
      src="https://michael-weis.com/wp-content/uploads/2023/01/Vogel.gif"
      class="Bild3"
    >
    </v-img>

    <v-container>
    
    </v-container>
  </v-app>
</template>

<script setup>
</script>

<style scoped>
.TITEL {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  font-size: 69px;
  color: white;
  margin-bottom: 20px;
}

.Bild1 {
  width: 40%;
  height: 40%;
  margin-left: 650px;
}


.Bild2 {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 200px;
}

.Bild3 {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 200px;

  left: 1500px;
}

.Play{
     position: absolute;
  top: 750px;
  left: 940px;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  padding: 5px;
  text-decoration: none;
}
</style>
