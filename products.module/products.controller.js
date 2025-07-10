import { createProduct } from "./products.service.js";
const createProductController = async (req, res)=>{
    try{
        const product = await createProduct(req.body);
        res.status(201).json({message: "Produit enregistre", product})
    } catch (error){
        console.error("Erreur los de la creation:", error);
        res.status(500).json({error: "Erreur serveur"})
    }
}
export{createProductController}