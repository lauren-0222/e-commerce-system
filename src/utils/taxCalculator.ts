import Product from "../models/Product";

export function calculateTax(product: Product): number {
  let rate = 0.0475;

  if (product.category.toLowerCase() === "groceries") {
    rate = 0.03;
  }

  let tax = product.price * rate;
  return tax;
}