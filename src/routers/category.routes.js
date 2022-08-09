import { Router } from "express";

import {
  createCategoryController,
  listCategoryController,
  filterCategoryController,
  updateCategoryController,
  deleteCategoryController,
} from "../controllers/category.controller";

const router = Router();

router.post("", createCategoryController);
router.get("", listCategoryController);
router.get("/:id", filterCategoryController);
router.patch("/:id", updateCategoryController);
router.delete("/:id", deleteCategoryController);

export default router;
