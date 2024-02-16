<template>
  <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-btn class="Tut" v-bind="props" text="Open Book"> </v-btn>
      <v-img class="Buch" src="../assets/Buch.png"> </v-img>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="How To Play">
        <v-card-text>
          Ziel des Spiels: Das Ziel von Blackjack ist es, eine Hand mit einem
          höheren Kartenwert als der des Dealers zu haben, ohne dabei 21 Punkte
          zu überschreiten. Kartendeck: Blackjack wird mit 1 bis 8 Decks von 52
          Karten gespielt. Die Karten haben den jeweiligen Wert, außer
          Bildkarten (König, Dame, Bube), die jeweils 10 Punkte wert sind, und
          das Ass, das entweder 1 oder 11 Punkte wert sein kann, je nachdem, was
          besser für die Hand ist. Spielablauf: Jeder Spieler und der Dealer
          erhalten zu Beginn zwei Karten. Die Spielerkarten sind offen, während
          eine Dealerkarte verdeckt bleibt. Der Spieler entscheidet, ob er eine
          weitere Karte ("Hit") nehmen möchte, um seinen Kartenwert zu erhöhen,
          oder ob er keine weiteren Karten mehr wünscht ("Stand"). Das Ziel ist
          es, so nah wie möglich an 21 Punkte zu kommen, ohne diese zu
          überschreiten. Wenn ein Spieler mehr als 21 Punkte hat, verliert er
          automatisch ("Bust"). Nachdem alle Spieler ihre Entscheidungen
          getroffen haben, deckt der Dealer seine verdeckte Karte auf. Der
          Dealer zieht Karten, bis sein Wert 17 oder höher ist. Einige Casinos
          haben unterschiedliche Regeln für den Dealer, also überprüfe dies im
          Voraus. Der Spieler gewinnt, wenn seine Hand einen höheren Wert als
          die des Dealers hat, ohne 21 zu überschreiten. Bei einem Gleichstand
          ("Push") behält der Spieler seinen Einsatz. Blackjack (ein Ass und
          eine 10-Wert-Karte) ist die stärkste Hand und gewinnt normalerweise
          1,5-fach den Einsatz. Sonderregeln: Double Down: Ein Spieler kann
          seinen Einsatz verdoppeln und nur eine zusätzliche Karte erhalten.
          Split: Wenn die ersten beiden Karten gleich sind, kann ein Spieler sie
          aufteilen und zwei separate Hände spielen.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<style scoped>
.Tut {
  position: absolute;
  top: 600px;
  color: white;
  background-color: darkgray;
  left: 890px;
}

.Buch {
  position: absolute;
  width: 300px;
  height: 500px;
  left: 800px;
  top: 100px;
}
</style>