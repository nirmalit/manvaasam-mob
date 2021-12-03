const { Sequelize } = require('sequelize');
const sequelize = require('../Dbconnection/connection.js');

module.export =address=sequelize.define('address',{
    addressid:{type:Sequelize.STRING,primaryKey:true},
    userid:{type:Sequelize.STRING,references:{model:user,key:'userid'}},
    Address:{type:Sequelize.TEXT}},{modelName:"address"})


    sequelize.sync()