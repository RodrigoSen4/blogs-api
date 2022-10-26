const express = require('express');
const userController = require('./controllers/user.controller');
const validateNewUser = require('./middlewares/validateNewUser');

// ...

const app = express();

app.use(express.json());

// ...

app.post('/login', userController.login);
app.post('/user', validateNewUser, userController.createUser);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
