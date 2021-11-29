const models = require('../models/product');
var express=require('express');
const router= express.Router();
const app=express()
const {ResponseBody} = require('../utils/response')

function errorinuser(fn,err)
{
    console.log("error at",fn)
    console.log("error is",err)

}

function addproduct(req,res){
    try{
    var productname=req.body.productname
    var price=req.body.price
    var description=req.body.description
    product.create({name:productname,price:price,description:description})
    const response = new ResponseBody(true, "product added successfully", {name:productname});
    res.send(response)
    }
    catch(e){
        errorinuser('addproduct',e)
    }

    }

async function getallproducts(req,res){
    try{
    var products=await product.findAll()
    console.log(products)
    const response = new ResponseBody(true, "product fetched successfully", products);
    res.send(response)
    }
    catch(e){
        errorinuser('getallproducts',e)
    }

    }
    
    
module.exports={addproduct,getallproducts}

   