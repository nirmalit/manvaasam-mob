const models = require('../models/user');
var express=require('express');
const router= express.Router();
const app=express()
bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');
require("dotenv").config();


function errorinuser(fn,err)
{
    console.log("error at",fn)
    console.log("error is",err)

}

async function login(req,res)
{
    try{
        const User = await user.findOne({where:{email:req.body.email}});
        
        if(User)
        {
            if(User.verified){
            const cmp = await bcrypt.compare(req.body.password, User.password);
                if (cmp) {
                    const token = jwt.sign(
                        { userid:User.userid },process.env.JWT_KEY,
                        {expiresIn: "10h",}
                      );
                      
                    res.send({
                        success:true,data:{"Token":token},msg:"loginsuccess"});
                } else {
                    res.send({
                        success:false,data:[],msg:"Wrong username or password."});
                }
            }
            else{
                res.send("you need to verify your email")
            }
        } 
        else {
            res.send("Wrong username or password.");
        }
    }
    catch(e){
        errorinuser('login',e)
    }
}

    
module.exports={login}