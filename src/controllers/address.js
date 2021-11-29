const models = require('../models/address');
var express=require('express');
const router= express.Router();
const app=express()

function errorinuser(fn,err)
{
    console.log("error at",fn)
    console.log("error is",err)

}

function addaddress(req,res){
    try{
    var userid=req.body.userid
    var address=req.body.address
    address.create({userid:userid,address:address})
      
    res.send('addressadded')}
    catch(e){
        errorinuser('addaddress',e)
    }

    }


module.exports={addaddress}