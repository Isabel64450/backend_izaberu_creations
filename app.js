import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import addressRoutes from "./routes/address.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/addresses", addressRoutes);

app.listen(process.env.port, () => {
  console.log(`Server is running at http://localhost:${process.env.port}`);
});
