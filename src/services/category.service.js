import database from "../database";

const createCategoryService = async (name) => {
  try {
    const newCategory = await database.query(
      `INSERT INTO 
        categories (name) 
      VALUES 
        ($1) 
      RETURNING *`,
      [name]
    );

    return newCategory.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

const listCategoryService = async () => {
  try {
    const listCategory = await database.query(`SELECT * FROM categories`);

    const mapedCategory = listCategory.rows.map((category) => {
      const { id, name } = category;
      return {
        id,
        name,
      };
    });

    return mapedCategory;
  } catch (err) {
    throw new Error(err);
  }
};

const filterCategoryService = async (id) => {
  try {
    const filterCategory = await database.query(
      `SELECT * FROM 
        categories 
      WHERE 
        id = $1`,
      [id]
    );

    if (filterCategory.rows.length === 0) {
      throw `Category not found`;
    }

    return filterCategory.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

const updateCategoryService = async (id, name) => {
  try {
    const updateCategory = await database.query(
      `UPDATE 
        categories 
      SET 
        name = $2 
      WHERE 
        id = $1 
      RETURNING *`,
      [id, name]
    );

    if (updateCategory.rows.length === 0) {
      throw `Category not found`;
    }

    return updateCategory.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

const deleteCategoryService = async (id) => {
  try {
    const deleteCategory = await database.query(
      `DELETE FROM 
        categories 
      WHERE 
        id = $1 
      RETURNING *`,
      [id]
    );

    if (deleteCategory.rows.length === 0) {
      throw `Category not Found`;
    }

    return deleteCategory.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export {
  createCategoryService,
  listCategoryService,
  filterCategoryService,
  updateCategoryService,
  deleteCategoryService,
};
