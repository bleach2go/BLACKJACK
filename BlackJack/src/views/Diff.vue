  <template>
  <v-btn class="btn1" variant="outlined">PLAY</v-btn>
  <h1 class="Titel">CHOOSE DIFFICULTIE</h1>
  <p class="Text">
    Adjusting this slider will affect the difficulty of the AI you will play against.
  </p>
  <v-img class="img1" src="https://img.freepik.com/fotos-premium/ein-schwarzer-hintergrund-mit-vielen-spielkarten-die-in-der-luft-fliegen_9493-1023.jpg"></v-img>
  <v-row class="diff">
    <v-col class="pa-12">
      <v-range-slider
        :ticks="seasons"
        :model-value="[0, 1]"
        min="0"
        max="3"
        :step="1"
        show-ticks="always"
        thumb-label="always"
        tick-size="4"
      >
        <template v-slot:thumb-label="{ modelValue }">
          <v-icon theme="dark" :icon="season(modelValue)"></v-icon>
        </template>
      </v-range-slider>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data: () => ({
      seasons: {
        0: 'Beginner',
        1: 'Intermediate',
        2: 'Advanced',
        3: 'Master',
      },
      icons: [
        'mdi-check-circle',
        'mdi-plus',
        'mdi-information',
        'mdi-alert',
      ],
    }),

    methods: {
      season (val) {
        return this.icons[val]
      },
    },
  }
</script>
<style scoped>
.diff{
    position: absolute;
    top: 200px;
    width: 100%;
    color:white;
}
.Titel{
    position: absolute;
    color: white;
    top: 100px;
    left: 20px;
}

.img1{
    width: 30%;
  height: 30%;
  margin-left: 720px;
}

.Text{
    position: absolute;
    color: white;
    left: 1400px;
    top: 400px;
    font-size: 26px;
    width: 300px;
}
.btn1{
    position: absolute;
    left: 60px;
    color: white;
    width: 200px;
    height: 150px;
    font-size: 50px;
    top: 400px;
}
</style>
