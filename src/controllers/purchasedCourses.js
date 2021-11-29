const models = require('../models/purchasedcourses');
var express=require('express');
const router= express.Router();
const app=express()

function errorinuser(fn,err)
{
    console.log("error at",fn)
    console.log("error is",err)

}

function addpurchasedcourses(req,res){
    try{
    var userid=req.body.userid
    var courseid=req.body.courseid
    res.send('coursepurchased')}
    catch(e){
        errorinuser('addpurchasedcourses',e)
    }

    }
module.exports={addpurchasedcourses};


   