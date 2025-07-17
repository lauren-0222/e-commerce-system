class Product {
  id: number
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;

  constructor (
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
  )
  {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.category = category;
  }

displayDetails(): void {
    console.log(
        `
        Title: ${this.title}
        Description: ${this.description}
        Price: ${this.price} 
        Discount Percentage: ${this.discountPercentage}
        Category: ${this.category}
        `

    );
    
}
getPriceWithDiscount(): number {
    return this.price * (1 - this.discountPercentage / 100)
    
}
}
export default Product 




