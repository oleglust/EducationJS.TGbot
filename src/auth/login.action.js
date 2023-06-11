const { User } = require ("../db")    // {
//     login: String,
//     password: String
// }

async function loginAction(req, res) { //req - то, что пришло от клиента(напр стр авторизации), res - обработка ответа.)
    const { login, pass } = req.body; // переменные возьмутся из JSON, (типа их клиент вписал)
    
    const temporaryUser = await User.findOne( {where: { email: login } }); // сверяем значения, введенные пользователем с данными с таблице

    // SELECT *
    // FROM users
    // WHERE users.email=login



    if (temporaryUser === null) {
        return res.status(401).json({ error: ' нет такого юзера' })
    } 
    
    if (!temporaryUser.password===pass) {
        return res.status(401).json({ error: ' неправильный пароль' })
    }

    return res.json(temporaryUser); //положительный результат возвращаем в последнюю очередь

}


module.exports = {
    loginAction
}