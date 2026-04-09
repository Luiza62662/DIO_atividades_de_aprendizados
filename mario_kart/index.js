import { player1, player2 } from "./players.js";
import { playRaceEngine, declareWinner } from "./race.js";

(async function main() {
  console.log(
    `🏁 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`
  );

  await playRaceEngine(player1, player2);
  declareWinner(player1, player2);
})();
