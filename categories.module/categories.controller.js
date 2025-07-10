import { createCategory } from "./categories.services.js";
const createCategoryController = async (req, res)=>{
    try{
        const category_name = await createCategory(req.body);
        res.status(201).json({message: "Category enregistre", category_name})
    } catch (error){
        console.error("Erreur los de la creation:", error);
        res.status(500).json({error: "Erreur serveur"})
    }
}

export {createCategoryController}