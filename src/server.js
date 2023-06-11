// npm run dev
// ДЗ гитигнор, переименовать модели(таблицы), описать все таблицы и связи в драш ю/c4/ связи моделей, получить/создать/удалиь модель пользователя вместе с балансом
const express = require('express');
const axios = require("axios");
const { dbManager } = require("./db"); 
const { loginAction, registerAction } = require("./auth"); 
const {createNewOrder,addingSSHonOrder,userRecieveSSH,deleteUselessOrder} = require("./orders")
const {User,OrderVPN,BalanceModel} = require("./db")
async function main(){
    const app = express()
    app.use(express.static('public'));

    app.use(express.json()) 

    app.post("/auth/login", loginAction)
    app.post("/auth/register", registerAction)
    app.post("/orders/create", createNewOrder)
    app.post("/orders/add", addingSSHonOrder)
    app.post("/orders/res", userRecieveSSH)
    app.post("/orders/del", deleteUselessOrder)

    // GET - получение , POST - создание , PUT - , PATCH - , DELETE - удаление 

    // app.get("/orders", ...); // Написать обработчик для получения заказов
    // // http://localhost:3000/orders - выдаю впн
    // // ttp://localhost:3000/orders/ID - выдаю впн
    

    // app.post("/orders", ...); //создание заказов, закажет впн
    // app.delete("/orders", ...); // detlete


    try {
        await dbManager.authenticate();
        console.log('Connection has been established successfully.');

        User.sync({
            force: false
          })
        OrderVPN.sync({
            force: false //запуск таблицы!
        })  
        BalanceModel.sync({ 
            force: false
        })

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    app.listen(3000)
}

main()
