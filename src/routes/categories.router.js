const express = require('express');

const router = express.Router();

const validateJWT = require('../middlewares/validateJWT');
const categoriesController = require('../controllers/categories.controller');

router.post('/categories', validateJWT, categoriesController.createCategory);

module.exports = router; 