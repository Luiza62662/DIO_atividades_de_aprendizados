export function createProduct(name, price, quantity = 1) {
  return {
    name,
    price,
    quantity,
  };
}
