const categoryService = require('../service/category.service');

const createCategory = async (req, res) => {
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: '"name" is required' });
    
    await categoryService.createCategory(name);
    const getNewCategory = await categoryService.getCategoryByName(name);
    
    return res.status(201).json(getNewCategory);
};

module.exports = {
    createCategory,
};