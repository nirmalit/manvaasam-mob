const models = require('../models/order');
var express=require('express');
const router= express.Router();
const app=express()

function errorinuser(fn,err)
{
    console.log("error at",fn)
    console.log("error is",err)

}

function addorder(req,res){
    try{
    var userid=req.body.userid
    var productid=req.body.productid
    orders.create({userid:userid,productid:productid})
    res.send('orderplaced')}
    catch(e){
        errorinuser('addorder',e)
    }

    }
module.exports={addorder}

   