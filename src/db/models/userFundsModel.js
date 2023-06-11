const { DataTypes } = require('sequelize');
const { dbManager } = require("../db");

const BalanceModel = dbManager.define('BalanceModel', {

   
    Balance: {
      type: DataTypes.NUMBER,
      allowNull: false,
      default : 0 
    }, //возник вопрос: сейчас при добавлении средств будет  currentbalance будет = moneyAdd, а надо именно прибавить их к текущему балансу, я примерно понимаю, как это реализовать, но не понимаю, на каком этапе, в каком файле
  }, {
    tableName: 'Balance'
  });


console.log(BalanceModel === dbManager.models.BalanceModel);
module.exports = {BalanceModel}