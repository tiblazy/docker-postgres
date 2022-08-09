import database from "../database";

const createProductService = async (name, price, category_id) => {
  try {
    const newProduct = await database.query(
      "INSERT INTO products (name, price, category_id) VALUES ($1, $2, $3 RETURNING *",
      [name, price, category_id]
    );

    return newProduct;
  } catch (err) {
    throw new Error(err);
  }
};

const listProductService = async () => {
  try {
    const listProduct = await database.query("SELECT * FROM products");

    return listProduct.rows;
  } catch (err) {
    throw new Error(err);
  }
};

const filterProductService = async (id) => {
  try {
    const filterProduct = await database.query(
      "SELECT * FROM products WHERE id = $1",
      [id]
    );

    if (filterProduct.rows.length === 0) {
      throw "Product not found";
    }

    return filterProduct;
  } catch (err) {
    throw new Error(err);
  }
};

const updateProductService = async (id, name, price, category_id) => {
  try {
    const updateProduct = await database.query(
      "UPDATE products SET name = $2, price = $3, category_id = $4 WHERE id = $1 RETURNING *",
      [id, name, price, category_id]
    );

    if (updateProduct.rows.length === 0) {
      throw "Product not found";
    }

    return updateProduct;
  } catch (err) {
    throw new Error(err);
  }
};

const deleteProductService = async (id) => {
  try {
    const deleteProduct = await database.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );

    if (deleteProduct.rows.length === 0) {
      throw "Product not Found";
    }

    return "Product deleted";
  } catch (err) {
    throw new Error(err);
  }
};

const filterProductCategoryService = async (category_id) => {
  try {
    const filterProductCategory = await database.query(
      "SELECT * FROM products WHERE category_id = $1",
      [category_id]
    );

    if (filterProductCategory.rows.length === 0) {
      throw "Category not found";
    }

    return filterProductCategory;
  } catch (err) {
    throw new Error(err);
  }
};

export {
  createProductService,
  listProductService,
  filterProductService,
  updateProductService,
  deleteProductService,
  filterProductCategoryService,
};