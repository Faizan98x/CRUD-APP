import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectionDB } from "./config/db.js";

import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json());

app.use("/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectionDB();
  console.log("Server is running on port" + PORT);
});
