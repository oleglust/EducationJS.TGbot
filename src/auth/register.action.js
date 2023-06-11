const { User } = require ("../db")

//ДЗ. + подтверждение пароля
// INSERT INTO users
// VALUES (login, password);

/**
 * Регистрация нового пользователя
 * @param {Express.Request} req  
 * @param {Express.Response} res 
 * @returns новый пользователь
 */
async function registerAction(req, res) {
    
    const { newUsername, newUserPassword, repeatNewUserPassword } = req.body;
    
    const isExist = await User.findOne( {where: { email: newUsername } });

    if (isExist) { //проверка на null
        return res.status(404).json({error: "ффффф"});
    }
   
    if ( newUserPassword !== repeatNewUserPassword) {
        return res.status(404).json({error: "sssss"});
    }

    const newUser = await User.create({
        email: newUsername,
        password: newUserPassword
    });

    return res.json(newUser);

}

module.exports = {
    registerAction
}




