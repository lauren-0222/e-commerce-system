import Product from "./models/Product";
import { fetchProduct } from "./services/apiService";
import { calculateDiscount } from "./utils/discountCalculator";
import { handleError } from "./utils/errorHandler";
import { calculateTax } from "./utils/taxCalculator";

async function main(): Promise<void> {
try {
 const productData = await fetchProduct()
 //console.log(productData)
 
 const product= new Product(productData.id, productData.title, productData.description, productData.category, productData.price, productData.discountPercentage)

 console.log(product.displayDetails())
 console.log(product.getPriceWithDiscount())
 console.log(calculateDiscount(product))
 console.log(calculateTax(product))
}
catch (error) {
   handleError(error)
}
}
main()