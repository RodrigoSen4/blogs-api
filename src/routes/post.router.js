const express = require('express');

const router = express.Router();

const validateJWT = require('../middlewares/validateJWT');
const postController = require('../controllers/post.controlller');

router.get('/post', validateJWT, postController.getPost);

module.exports = router; 