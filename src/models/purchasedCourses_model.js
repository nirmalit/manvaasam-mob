const { Sequelize } = require('sequelize');
const sequelize = require('../Dbconnection/connection.js');

module.export=purchasedcourses=sequelize.define('purchasedcourses',{
    purchasedcoursesid:{type:Sequelize.STRING,primaryKey:true},
    userid:{type:Sequelize.STRING,references:{model:user,key:'userid'}},
    courseid:{type:Sequelize.STRING,references:{model:course,key:'courseid'}}},{modelName:"purchasedcourses"})
    
sequelize.sync()

