import database from "../database";

const createProductService = async (name, price, category_id) => {
  try {
    const newProduct = await database.query(
      `INSERT INTO 
        products (name, price, category_id) 
      VALUES 
        ($1, $2, $3) 
      RETURNING *`,
      [name, price, category_id]
    );

    return newProduct.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

const listProductService = async () => {
  try {
    const listProduct = await database.query(`SELECT * FROM products`);

    return listProduct.rows;
  } catch (err) {
    throw new Error(err);
  }
};

const filterProductService = async (id) => {
  try {
    const filterProduct = await database.query(
      `SELECT * FROM 
        products 
      WHERE 
        id = $1`,
      [id]
    );

    if (filterProduct.rowCount === 0) {
      throw new Error(`Product not found`);
    }

    return filterProduct.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

const updateProductService = async (id, name, price, category_id) => {
  try {
    const findProduct = await database.query(
      `SELECT * FROM 
        products 
      WHERE 
        id = $1`,
      [id]
    );

    if (findProduct.rowCount === 0) {
      throw new Error(`Product not found`);
    }

    const updateProduct = await database.query(
      `UPDATE 
        products 
      SET 
        name = $2, price = $3, category_id = $4 
      WHERE 
        id = $1 
      RETURNING *`,
      [
        id,
        name ? name : findProduct.rows[0].name,
        price ? price : findProduct.rows[0].price,
        category_id ? category_id : findProduct.rows[0].category_id,
      ]
    );

    return updateProduct.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

const deleteProductService = async (id) => {
  try {
    const findProduct = await database.query(
      `SELECT * FROM 
        products
      WHERE
        id = $1`,
      [id]
    );

    if (findProduct.rowCount === 0) {
      throw new Error(`Products not Found`);
    }

    const deleteProduct = await database.query(
      `DELETE FROM 
        products 
      WHERE 
        id = $1
      RETURNING *`,
      [findProduct.rows[0].id]
    );

    return deleteProduct.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

const filterProductCategoryService = async (category_id) => {
  try {
    const filterProductCategory = await database.query(
      `SELECT 
        products.name AS name, products.price AS price, categories.name AS category 
      FROM 
        products 
      JOIN 
        categories 
      ON 
        categories.id = $1`,
      [category_id]
    );

    if (filterProductCategory.rowCount === 0) {
      throw new Error(`Category not found`);
    }

    return filterProductCategory.rows;
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
