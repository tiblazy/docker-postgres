import {
  createCategoryService,
  listCategoryService,
  filterCategoryService,
  updateCategoryService,
  deleteCategoryService,
} from "../services/category.service";

const createCategoryController = async (req, res) => {
  const { name } = req.body;

  try {
    const newCategory = await createCategoryService(name);

    return res.status(201).json(newCategory);
  } catch (err) {
    return res.status(401).json(err.message);
  }
};

const listCategoryController = async (req, res) => {
  try {
    const listCategory = await listCategoryService();

    return res.status(200).json(listCategory);
  } catch (err) {
    return res.status(401).json(err.message);
  }
};

const filterCategoryController = async (req, res) => {
  const { id } = req.params;

  try {
    const filterCategory = await filterCategoryService(id);

    return res.status(200).json(filterCategory);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const updateCategoryController = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updateCategory = await updateCategoryService(id, name);

    return res.status(200).json(updateCategory);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const deleteCategoryController = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteCategory = await deleteCategoryService(id);

    return res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

export {
  createCategoryController,
  listCategoryController,
  filterCategoryController,
  updateCategoryController,
  deleteCategoryController,
};
