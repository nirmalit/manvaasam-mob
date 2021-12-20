const models = require('../models/purchasedCourses_model');
var express=require('express');
const router= express.Router();
const app=express()
const {v4}=require('uuid');
const {ResponseBody} = require('../utils/response')

function errorinuser(fn,err)
{
    console.log("error at",fn)
    console.log("error is",err)

}

function addpurchasedcourses(req,res){
    try{
    var userid=req.body.userid
    var courseid=req.body.courseid
    var purchasedcoursesid=v4()
    purchasedcourses.create({purchasedcoursesid:purchasedcoursesid,userid:userid,courseid:courseid})
    const response = new ResponseBody(true, "course purchased successfully", {});
    res.send(response)
    }
    catch(e){
        errorinuser('addpurchasedcourses',e)
    }

    }
module.exports={addpurchasedcourses};


   