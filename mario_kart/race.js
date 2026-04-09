import { rollDice, getRandomBlock, logRollResult } from "./utils.js";
import { getRandomItem, applyItemEffects } from "./items.js";

export async function playRaceEngine(p1, p2) {
  for (let round = 1; round <= 5; round++) {
    console.log("\n=================================");
    console.log(`🏁 Rodada ${round}`);
    console.log("=================================");

    const block = getRandomBlock();
    console.log(`📍 Tipo de pista: ${block}`);

    const dice1 = rollDice();
    const dice2 = rollDice();

    let total1 = 0;
    let total2 = 0;

    if (block === "RETA") {
      total1 = dice1 + p1.VELOCIDADE;
      total2 = dice2 + p2.VELOCIDADE;

      logRollResult(p1.NOME, "velocidade", dice1, p1.VELOCIDADE);
      logRollResult(p2.NOME, "velocidade", dice2, p2.VELOCIDADE);
    }

    if (block === "CURVA") {
      total1 = dice1 + p1.MANOBRABILIDADE;
      total2 = dice2 + p2.MANOBRABILIDADE;

      logRollResult(p1.NOME, "manobrabilidade", dice1, p1.MANOBRABILIDADE);
      logRollResult(p2.NOME, "manobrabilidade", dice2, p2.MANOBRABILIDADE);
    }

    if (block === "CONFRONTO") {
      console.log(`🥊 ${p1.NOME} vs ${p2.NOME}`);

      total1 = dice1 + p1.PODER;
      total2 = dice2 + p2.PODER;

      logRollResult(p1.NOME, "poder", dice1, p1.PODER);
      logRollResult(p2.NOME, "poder", dice2, p2.PODER);
    }

    // 🎁 Itens
    const item1 = getRandomItem();
    const item2 = getRandomItem();

    console.log(`${p1.NOME} pegou: ${item1}`);
    console.log(`${p2.NOME} pegou: ${item2}`);

    total1 += applyItemEffects(item1, p1, p2);
    total2 += applyItemEffects(item2, p2, p1);

    // 🏆 Resultado da rodada
    if (total1 > total2) {
      p1.PONTOS++;
      console.log(`✅ ${p1.NOME} venceu a rodada!`);
    } else if (total2 > total1) {
      p2.PONTOS++;
      console.log(`✅ ${p2.NOME} venceu a rodada!`);
    } else {
      console.log("🤝 Empate!");
    }
  }
}

export function declareWinner(p1, p2) {
  console.log("\n🏆 RESULTADO FINAL 🏆");
  console.log(`${p1.NOME}: ${p1.PONTOS}`);
  console.log(`${p2.NOME}: ${p2.PONTOS}`);

  if (p1.PONTOS > p2.PONTOS)
    console.log(`\n🎉 ${p1.NOME} venceu!`);
  else if (p2.PONTOS > p1.PONTOS)
    console.log(`\n🎉 ${p2.NOME} venceu!`);
  else console.log("\n🤝 Empate!");
}
