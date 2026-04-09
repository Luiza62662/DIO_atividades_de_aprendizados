import fs from "fs";

const path = "./data/cart.json";

export function loadCart() {
  if (!fs.existsSync(path)) return [];

  const data = fs.readFileSync(path);
  return JSON.parse(data);
}

export function saveCart(cart) {
  fs.writeFileSync(path, JSON.stringify(cart, null, 2));
}
