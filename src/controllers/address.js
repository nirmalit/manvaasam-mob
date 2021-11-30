const models = require('../models/address');
var express=require('express');
const router= express.Router();
const app=express()
const {ResponseBody} = require('../utils/response')

function errorinuser(fn,err)
{
    console.log("error at",fn)
    console.log("error is",err)

}

async function addaddress(req,res){
    try{
    const User=await user.findOne({where:{email:req.body.email}});
    var address=req.body.address
    if(User){
        const newAddress = address.create({userid:User.userid,address:address})
        const response = new ResponseBody(true, "address added successfull", {});
        res.send(response);
    }
    else{
        const response = new ResponseBody(false, "User not found", {});
        res.send(response);
    }
    }
    catch(e){
        errorinuser('addaddress',e)
    }

    }


module.exports={addaddress}