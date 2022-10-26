const express = require('express');
const userRouter = require('./user.router');
const loginRouter = require('./login.router');
const catgoriesRouter = require('./categories.router');

const routes = express.Router();

routes.use(userRouter);
routes.use(loginRouter);
routes.use(catgoriesRouter);

module.exports = routes;