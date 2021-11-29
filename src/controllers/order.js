const models = require('../models/order');
var express=require('express');
const router= express.Router();
const app=express()

function errorinuser(fn,err)
{
    console.log("error at",fn)
    console.log("error is",err)

}

async function addorder(req,res){
    try{
    const User=await user.findOne({where:{email:req.body.email}});
    orders.create({userid:User.userid,productid:parseInt(req.body.productid)})
    res.send('orderplaced')}
    catch(e){
        errorinuser('addorder',e)
    }

    }

async function myorders(req,res){
    try{
    const User=await user.findOne({where:{email:req.body.email}});
    const myorders=await orders.findAll({where:{userid:User.userid}})
    res.send(myorders)}
    catch(e){
        errorinuser('addorder',e)
    }

    }
module.exports={addorder,myorders}

   