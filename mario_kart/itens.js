export function getRandomItem() {
  const items = ["CASCO", "BANANA", "TURBO", "NADA"];
  return items[Math.floor(Math.random() * items.length)];
}

export function applyItemEffects(item, player, opponent) {
  switch (item) {
    case "TURBO":
      console.log(`${player.NOME} usou TURBO! +2 🚀`);
      return 2;

    case "CASCO":
      if (opponent.PONTOS > 0) {
        opponent.PONTOS--;
        console.log(`${player.NOME} acertou um CASCO! 🐢`);
      }
      return 0;

    case "BANANA":
      if (player.PONTOS > 0) {
        player.PONTOS--;
        console.log(`${player.NOME} escorregou na BANANA! 🍌`);
      }
      return 0;

    default:
      return 0;
  }
}
