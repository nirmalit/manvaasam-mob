const models = require('../models/course');
var express=require('express');
const router= express.Router();
const app=express()
const {ResponseBody} = require('../utils/response')

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
    const response = new ResponseBody(true, "course added successfully", {"name":coursename});
    res.send(response)
    }
    catch(e){
        errorinuser('addcourse',e)
    }

    }
async function getallcourses(req,res){  
    try{
    var courses=await course.findAll()
    const response = new ResponseBody(true, "course fetched successfully",courses);
    res.send(response)
    }
    catch(e){
        errorinuser('getallcourses',e)
    }

    }

const deleteCourse = async(req,res) => {
    try{
        const find = await course.findOne({where:{courseid:parseInt(req.body.courseid)}});
        if(find){
            const courses = course.destroy({where:{courseid:parseInt(req.body.courseid)}})
            const response = new ResponseBody(true, "course deleted successfully",courses);
            res.send(response)
        }
        else{
            const response = new ResponseBody(false, "course not found",{});
            res.send(response)
        }
        
    }
    catch(e){
        errorinuser('getallcourses',e)
    }
}

module.exports={addcourse,getallcourses,deleteCourse}
   