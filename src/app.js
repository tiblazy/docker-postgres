import express from "express";
import "dotenv/config";

import categoryRouters from "./routers/category.routes";
import productRouters from "./routers/product.routes";
import { startDatabase } from "./database";

const app = express();
app.use(express.json());

app.use("/categories", categoryRouters);
app.use("/products", productRouters);

export default app.listen(process.env.PORT || 3333, () => startDatabase());
