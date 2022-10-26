const express = require('express');
const userRouter = require('./user.router');
const loginRouter = require('./login.router');
const catgoriesRouter = require('./categories.router');
const postRouter = require('./post.router');

const routes = express.Router();

routes.use(userRouter);
routes.use(loginRouter);
routes.use(catgoriesRouter);
routes.use(postRouter);

module.exports = routes;