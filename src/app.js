const connection= require('./Dbconnection/connection');
const sequelize = require('./Dbconnection/connection');

const user=require('./Routes/user');
const address=require('./Routes/address');
const course=require('./Routes/course');
const product=require('./Routes/product');
const purchasedcourses=require('./Routes/purchasedcourses');
const auth=require('./Routes/auth');
const order=require('./Routes/order');
const otp=require('./Routes/otp');
const password=require('./Routes/forgetpassword');
var express=require('express');
const bp=require('body-parser')
const app=express()

app.use(bp.json())
app.use('/user',user)
app.use('/address',address)
app.use('/course',course)
app.use('/product',product)
app.use('/purchasedcourses',purchasedcourses)
app.use('/order',order)
app.use('/auth',auth)
app.use('/otp',otp)
app.use('/password',password)

app.listen(9000,function(err)
{
    console.log('connected')
})