import { saveCart, loadCart } from "./storage.js";

let cart = loadCart();

export function getCart() {
  return cart;
}

export function addItem(item) {
  const existing = cart.find(p => p.name === item.name);

  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  saveCart(cart);
  console.log(`✅ ${item.name} adicionado!`);
}

export function removeItem(name) {
  cart = cart.filter(item => item.name !== name);
  saveCart(cart);
  console.log(`❌ ${name} removido!`);
}

export function updateItem(name, quantity) {
  if (quantity <= 0) {
    console.log("⚠️ Quantidade inválida!");
    return;
  }

  const item = cart.find(p => p.name === name);

  if (item) {
    item.quantity = quantity;
    saveCart(cart);
    console.log(`🔄 ${name} atualizado!`);
  }
}

export function calculateTotal() {
  return cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

export function displayCart() {
  console.log("\n===============================");
  console.log("🛒 SEU CARRINHO");
  console.log("===============================");

  if (cart.length === 0) {
    console.log("Carrinho vazio 😢");
    return;
  }

  cart.forEach(item => {
    console.log(
      `${item.name} | R$ ${item.price} | Qtd: ${item.quantity}`
    );
  });

  console.log("-------------------------------");
  console.log(`💰 Total: R$ ${calculateTotal().toFixed(2)}\n`);
}
