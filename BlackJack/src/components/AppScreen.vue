<template>
  <v-app class="App">
    <v-img class="Bild1"
      src="https://img.freepik.com/fotos-premium/ein-schwarzer-hintergrund-mit-vielen-spielkarten-die-in-der-luft-fliegen_9493-1023.jpg"
    ></v-img>
<v-img
src="https://michael-weis.com/wp-content/uploads/2023/01/Vogel.gif"
 class="Bild2">
</v-img>
 <v-img
src="https://michael-weis.com/wp-content/uploads/2023/01/Vogel.gif"
 class="Bild3">


</v-img>
     
    <v-container>
      <h1 class="TITEL">
        BlackJack
      </h1>
    </v-container>
    <div class="BtnContainer">
      <v-btn class="Btn" variant="outlined">
        PLAY
      </v-btn>
    <v-btn class="Btn2" >
    How to Play
  </v-btn>

<v-btn class="Btn3" @click="redirectToHowToPlay">
      How to Play

    </v-btn>
    </div>
  </v-app>
</template>

<script setup>
    import { useRouter } from 'vue-router';

  const router = useRouter();

  const redirectToHowToPlay = () => {
    router.push({ name: 'HowToPlay' });
  };
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

.BtnContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; /* You can adjust this margin as needed */
}

.Btn {
  margin-bottom: 20px;
  border-color: white;
  color: white;
}

.Btn:hover 
{
  background-color: white;
}
.Bild2
{
width: 400px;
height: 400px;
position: absolute;
top: 200px;

}


.Bild3
{
width: 400px;
height: 400px;
position: absolute;
top: 200px;

left: 1500px;

}

.Btn2
{
    position: absolute;
  border-color: white;

  top: 700px;
  left: 800px;

}
.Btn3
{
    position: absolute;
  border-color: white;
 
  top: 700px;
  right: 800px;

}
</style>
