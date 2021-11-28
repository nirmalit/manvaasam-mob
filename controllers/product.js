const models = require('../models/product');
var express=require('express');
const router= express.Router();
const app=express()

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
    res.send('productadded')}
    catch(e){
        errorinuser('addproduct',e)
    }

    }

async function getallproducts(req,res){
    try{
    var products=await product.findAll()
    console.log(products)
    res.send(products)}
    catch(e){
        errorinuser('getallproducts',e)
    }

    }
    
    
module.exports={addproduct,getallproducts}

   