const userService = require('../service/user.service');
const { createToken } = require('../utils/jwt.utils');
const { validateBodyLogin } = require('../helpers/validateLogin');
const getUserService = require('../service/user.service');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const user = await userService.getUser({ email });

    if (user) return res.status(409).json({ message: 'User already registered' });

    const newUser = await userService.createUser(displayName, email, password, image);
    const token = createToken(newUser.dataValues);
    return res.status(201).json({ token });
};

const AllUsers = async (req, res) => {
    const allUsers = await userService.getAllUsers();
    return res.status(200).json(allUsers);
};

const login = async (req, res) => {
        const { body } = req; 
        const { error } = validateBodyLogin(body);
        
        if (error) return res.status(400).json({ message: 'Some required fields are missing' });

        const { email, password } = req.body;
        const user = await getUserService.getUser({ email });

        if (!user || user.password !== password) {
          return res.status(400).json({ message: 'Invalid fields' });
        }
        
        const { dataValues } = user;
        const token = createToken(dataValues);
        return res.status(200).json({ token });
};

module.exports = {
    createUser,
    login,
    AllUsers,
};