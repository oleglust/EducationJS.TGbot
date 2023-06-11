const { DataTypes } = require('sequelize');
const { dbManager } = require("../db");

const User = dbManager.define('User', {
  // Model attributes are defined here
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  tableName: 'users'
});

// User.sync({
//   force: false
// })

// `sequelize.define` also returns the model
// console.log(User === dbManager.models.User); // true


module.exports = {
    User
}