
let Age = null; //создал переменную нулл


// ПРОВЕРКА ВОЗРАСТА ПРОСТАЯ
// function AgeCheck(req, res) {

    
//     const { UserAge } = req.body; // не менял с прошлого кода, UserAge парсится из инсомнии
    
//     Age = UserAge; //приравнял UserAge и нулл.
//     if (Age  < 18 ) {
//         return res.json({
//             AgeCheck: "18+"
//         })
//     } else  {
//         return res.json({
//             AgeCheck: "welcome to the club buddy"
//         })

//         // return res.status(401).json({
//         //     auth: false
//         // }) потом буду модифицировать
//     }
// }

async function AgeCheck(req, res) {
//функция, чтобы отложить выполнение
    const { UserAge } = req.body; // не менял с прошлого кода, UserAge парсится из инсомнии
    
    Age = UserAge; //приравнял UserAge и нулл.
    if (Age  > 18 ) {
        return res.json({
            AgeCheck: "Nice bro"
        })
    } else  {
        // return res.json({
        //     AgeCheck: "welcome to the club buddy"
        // })

        return res.status(401).json({
            auth: false
        }) 
    }
    
}

module.exports = {
    AgeCheck
}