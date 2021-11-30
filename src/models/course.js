const { Sequelize } = require('sequelize');
const sequelize = require('../Dbconnection/connection.js');

module.export=course=sequelize.define('courses',{
    courseid:{type:Sequelize.INTEGER,autoIncrement:true,primaryKey:true,unique:true,allowNull:false},
    name:{type:Sequelize.STRING,allownull:false},
    instructor:{type:Sequelize.STRING,allowNull:true}},{modelName:"courses"})

sequelize.sync()