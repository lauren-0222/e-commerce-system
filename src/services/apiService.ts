import Product from "../models/Product";
import { CustomAppError } from "../utils/errorHandler";

export async function fetchProduct(): Promise <Product>
{
    try{
const response = await fetch('https://dummyjson.com/products/1');
if (!response.ok){
    throw new CustomAppError(`failed fetching ${response.status}`, response.status)
}
const data = await response.json();
return data
    }
catch(error){
    throw error
}
//console.log("Return data", data)



}