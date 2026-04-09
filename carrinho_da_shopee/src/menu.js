import readline from "readline";
import { createProduct } from "./product.js";
import {
  addItem,
  removeItem,
  updateItem,
  displayCart,
} from "./cart.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function startMenu() {
  console.log("\n🛍️ Shopee Cart Simulator");

  console.log(`
1 - Adicionar produto
2 - Remover produto
3 - Atualizar quantidade
4 - Ver carrinho
0 - Sair
`);

  rl.question("Escolha uma opção: ", option => {
    switch (option) {
      case "1":
        rl.question("Nome: ", name => {
          rl.question("Preço: ", price => {
            const product = createProduct(name, Number(price));
            addItem(product);
            startMenu();
          });
        });
        break;

      case "2":
        rl.question("Nome do produto: ", name => {
          removeItem(name);
          startMenu();
        });
        break;

      case "3":
        rl.question("Nome: ", name => {
          rl.question("Quantidade: ", qty => {
            updateItem(name, Number(qty));
            startMenu();
          });
        });
        break;

      case "4":
        displayCart();
        startMenu();
        break;

      case "0":
        console.log("👋 Saindo...");
        rl.close();
        break;

      default:
        console.log("❌ Opção inválida!");
        startMenu();
    }
  });
}
