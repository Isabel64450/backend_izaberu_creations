import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import productRouter from "./products.router.js"
import categoryRouter from "./categories.router.js"
import ordersRouter from "./orders.router.js"
const app = express()
app.use(express.json())
const port= 3000
const dataBase ="izaberuDb"
const connectDB = async() => {
    try{
        await mongoose.connect(`mongodb://localhost:27017/${dataBase}`)
        console.log("Mongo connected")
    } catch(err){
        console.error("mongo connection error",err)
    }
}
connectDB()
app.use('/category', categoryRouter)
app.use('/products', productRouter)
app.use('/orders', ordersRouter)

app.listen(port,()=>{
    console.log(`Server is runnung at http://localhost:${port}`)
})