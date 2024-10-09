import express from "express";
import dotenv from "dotenv";
import { connectionDB } from "./config/db.js";

import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/products", productRoutes);

app.listen(PORT, () => {
  connectionDB();
  console.log("Server is running on port" + PORT);
});
