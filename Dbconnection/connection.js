const { pool } = require('mssql');
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize("manvaasm", "root", 
"Saidhoni@888", {
host: "localhost",
  port: "3306",  
  dialect: "mysql",
  options:{
    trustServerCertificate: true
    },
  pool:{
    max:5,
    min:0,
    acquire:30000,
    idle:10000
  },
  logging:false
}); 

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports =sequelize;