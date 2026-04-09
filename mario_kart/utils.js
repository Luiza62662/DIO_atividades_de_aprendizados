export function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

export function getRandomBlock() {
  const random = Math.random();

  if (random < 0.33) return "RETA";
  if (random < 0.66) return "CURVA";
  return "CONFRONTO";
}

export function logRollResult(name, type, dice, attribute) {
  console.log(
    `${name} 🎲 rolou ${type}: ${dice} + ${attribute} = ${dice + attribute}`
  );
}
