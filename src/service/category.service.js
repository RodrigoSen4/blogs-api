const { Category } = require('../models');

const createCategory = async (name) => {
    const newCategory = await Category.create({ name });

    return newCategory;
};

const getCategoryByName = async (name) => {
    const user = await Category.findOne({ where: { name } });
  
    return user;
  };

const getAll = async () => {
    const categories = await Category.findAll();
    
      return categories;
};

module.exports = {
    createCategory,
    getCategoryByName,
    getAll,
};