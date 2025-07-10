import Category from "./categories.modele.js";
const createCategory = async(categoryData) =>{
    const newCategory= new Category(categoryData)
    return await newCategory.save()
}
export{createCategory}