const { validateBodyLogin } = require('../helpers/validateLogin');
const getUserService = require('../service/getUser.service');
const { createToken } = require('../utils/jwt.utils');

const login = async (req, res) => {
   try { 
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
   } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Error' });
    }
};

module.exports = {
    login,
};