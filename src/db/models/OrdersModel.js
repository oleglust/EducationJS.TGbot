const { DataTypes } = require('sequelize');
const { dbManager } = require("../db");

const OrderVPN = dbManager.define('OrderVPN', {
    // Model attributes are defined here
    // orderID: {
    //   type: DataTypes.NUMBER,
    //   allowNull: false
    //   // allowNull defaults to true
    // },
    country: {
      type: DataTypes.STRING,
      allowNull: false
      // allowNull defaults to true
    },
    period: {
      type: DataTypes.NUMBER,
      allowNull: false
      // allowNull defaults to true
    },
    SSHpass:{
      type: DataTypes.STRING,
      allowNull: true,
      // allowNull defaults to true
      default: null
    } 
  }, {
    tableName: 'OrderVPN'
  });


console.log(OrderVPN === dbManager.models.OrderVPN);
module.exports = {OrderVPN}