const { Sequelize } = require('sequelize');

const dbManager = new Sequelize({
    storage: "./sqlite3.db",
    dialect: "sqlite",
}) //менеджер подключений, через него будут создаваться таблицы



module.exports = {
    dbManager
}