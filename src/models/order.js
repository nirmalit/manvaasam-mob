const { Sequelize } = require('sequelize');
const sequelize = require('../Dbconnection/connection.js');

module.export=orders=sequelize.define('orders',{
    orderid:{type:Sequelize.INTEGER,autoIncrement:true,primaryKey:true},
    userid:{type:Sequelize.STRING,references:{model:user,key:'userid'}},
    productid:{type:Sequelize.INTEGER,allowNull:false},
    count:{type:Sequelize.INTEGER,allowNull:false},
    amount:{type:Sequelize.INTEGER,allowNull:false}},{modelName:"orders"});
    


sequelize.sync()