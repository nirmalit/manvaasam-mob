const { Sequelize } = require('sequelize');
const sequelize = require('../Dbconnection/connection.js');

module.export=orders=sequelize.define('orders',{
    orderid:{type:Sequelize.INTEGER,autoIncrement:true,primaryKey:true},
    userid:{type:Sequelize.STRING,references:{model:user,key:'userid'}},
    productid:{type:Sequelize.INTEGER,references:{model:product,key:'productid'}}},{modelName:"orders"});


    sequelize.sync()