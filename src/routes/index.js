const express = require('express');
const userRouter = require('./user.router');
const loginRouter = require('./login.router');

const routes = express.Router();

routes.use(userRouter);
routes.use(loginRouter);  

module.exports = routes;