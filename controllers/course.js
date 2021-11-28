const models = require('../models/course');
var express=require('express');
const router= express.Router();
const app=express()

function errorinuser(fn,err)
{
    console.log("error at",fn)
    console.log("error is",err)

}

function addcourse(req,res){  
    try{
    var coursename=req.body.coursename
    var instructor=req.body.instructor
    course.create({name:coursename,instructor:instructor})
    res.send('courseadded')}
    catch(e){
        errorinuser('addcourse',e)
    }

    }
async function getallcourses(req,res){  
    try{
    var courses=await course.findAll()
    res.send(courses)}
    catch(e){
        errorinuser('getallcourses',e)
    }

    }

module.exports={addcourse,getallcourses}
   