const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller');
const validateNewUser = require('../middlewares/validateNewUser');
const validateJWT = require('../middlewares/validateJWT');

router.post('/user', validateNewUser, userController.createUser);
router.get('/user', validateJWT, userController.AllUsers);
router.get('/user/:id', userController.getUserById);

module.exports = router; 