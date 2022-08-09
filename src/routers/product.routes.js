import { Router } from "express";

import {
  createProductController,
  listProductController,
  filterProductController,
  updateProductController,
  deleteProductController,
  filterProductCategoryController,
} from "../controllers/product.controller";

const router = Router();

router.post("", createProductController);
router.get("", listProductController);
router.get("/:id", filterProductController);
router.patch("/:id", updateProductController);
router.delete("/:id", deleteProductController);

router.get("/category/:category_id", filterProductCategoryController);

export default router;
