const models = require('../models/order');
const productmodel = require('../models/product');
var express=require('express');
const router= express.Router();
const app=express()
const {ResponseBody} = require('../utils/response')

function errorinuser(fn,err)
{
    console.log("error at",fn)
    console.log("error is",err)

}

async function addorder(req,res){
    try{
    const User=await user.findOne({where:{email:req.body.email}});
    const orderedproduct=await product.findOne({where:{productid:parseInt(req.body.productid)}})
    const amount=orderedproduct.price * parseInt(req.body.count)
    orders.create({userid:User.userid,productid:parseInt(req.body.productid),count:parseInt(req.body.count),amount:amount})
    const response = new ResponseBody(true, "product ordered successfully", {});
    res.send(response)
}
    catch(e){
        errorinuser('addorder',e)
    }

    }

async function myorders(req,res){
    try{
    const User=await user.findOne({where:{email:req.body.email}});
    const myorders=await orders.findAll({where:{userid:User.userid}})
    const response = new ResponseBody(true, "orders fetched successfully", myorders);
    res.send(response)
    }
    catch(e){
        errorinuser('addorder',e)
    }

    }
module.exports={addorder,myorders}

   