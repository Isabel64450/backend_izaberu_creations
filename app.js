import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import addressRoutes from "./routes/address.routes.js";

import productRouter from "./products.router.js"
import categoryRouter from "./categories.router.js"
import ordersRouter from "./orders.router.js"
import dotenv from "dotenv";
dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/addresses", addressRoutes);
app.use('/category', categoryRouter)
app.use('/products', productRouter)
app.use('/orders', ordersRouter)

app.listen(process.env.port, () => {
  console.log(`Server is running at http://localhost:${process.env.port}`);
});

