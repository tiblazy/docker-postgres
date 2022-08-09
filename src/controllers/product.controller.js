import {
  createProductService,
  listProductService,
  filterProductService,
  updateProductService,
  deleteProductService,
  filterProductCategoryService,
} from "../services/product.service";

const createProductController = async (req, res) => {
  const { name, price, category_id } = req.body;

  try {
    const createProduct = await createProductService(name, price, category_id);

    return res.status(201).json(createProduct);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const listProductController = async (req, res) => {
  try {
    const listProduct = await listProductService();

    return res.status(200).json(listProduct);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const filterProductController = async (req, res) => {
  const { id } = req.params;

  try {
    const filterProduct = await filterProductService(id);

    return res.status(200).json(filterProduct);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const updateProductController = async (req, res) => {
  const { id } = req.params;
  const { name, price, category_id } = req.body;

  try {
    const updateProduct = await updateProductService(
      id,
      name,
      price,
      category_id
    );

    return res.status(200).json(updateProduct);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const deleteProductController = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteProduct = await deleteProductService(id);

    return res.status(200).json(deleteProduct);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const filterProductCategoryController = async (req, res) => {
  const { category_id } = req.params;

  try {
    const filterProductCategory = await filterProductCategoryService(
      category_id
    );

    return res.status(200).json(filterProductCategory);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

export {
  createProductController,
  listProductController,
  filterProductController,
  updateProductController,
  deleteProductController,
  filterProductCategoryController,
};
