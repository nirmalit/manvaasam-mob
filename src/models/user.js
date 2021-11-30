const { Sequelize } = require('sequelize');
const sequelize = require('../Dbconnection/connection.js');

module.export=user=sequelize.define('users',{
                userid:{type:Sequelize.STRING,primaryKey:true,unique:true,allowNull:false},
                name:{type:Sequelize.STRING,allownull:false},
                email:{type:Sequelize.STRING,allowNull:false,unique:true},
                mobile:{type:Sequelize.STRING,allowNull:true,unique:true},
                password:{type:Sequelize.STRING,allowNull:false},
                verified:{type:Sequelize.BOOLEAN,allowNull:false}},{
                    modelName:"user"
                });
sequelize.sync()