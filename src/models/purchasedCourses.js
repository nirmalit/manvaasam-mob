const { Sequelize } = require('sequelize');
const sequelize = require('../Dbconnection/connection.js');

module.export=purchasedcourses=sequelize.define('purchasedcourses',{
    purchasedcoursesid:{type:Sequelize.INTEGER,autoIncrement:true,primaryKey:true},
    userid:{type:Sequelize.STRING,references:{model:user,key:'userid'}},
    courseid:{type:Sequelize.INTEGER,references:{model:course,key:'courseid'}}},{modelName:"purchasedcourses"})
    
sequelize.sync()

