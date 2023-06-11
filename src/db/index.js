
const { dbManager } = require("./db"); //деструктуризация, обязательна для экспорта через module.exports
const { User } = require("./models/usersModel");
const {OrderVPN} = require("./models/OrdersModel");
const {BalanceModel} = require("./models/userFundsModel");

User.hasOne(BalanceModel);
BalanceModel.belongsTo(User);

module.exports = {
    dbManager, 
    User,
    OrderVPN,
    BalanceModel
}