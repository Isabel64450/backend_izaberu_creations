import Product from "./products.modele.js";
const createProduct = async (productData) =>{
    const newProduct = new Product(productData)
    return await newProduct.save()
} 
export{createProduct}