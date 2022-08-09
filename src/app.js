import express from "express";
import "dotenv/config";

import categoryRouters from "./routers/category.routes";
import productRouters from "./routers/product.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoryRouters);
app.use("/products", productRouters);

export default app.listen(3333, () => console.log("Server running"));
