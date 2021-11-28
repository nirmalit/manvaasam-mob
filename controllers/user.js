const models = require('../models/user');
bcrypt=require('bcrypt')
const saltRounds=10
const {generateOtp}=require('../utils/otp')
const {v4}=require('uuid');
const {sendmail}=require('../utils/sendEmail')

function errorinuser(fn,err)
{
    console.log("error at",fn)
    console.log("error is",err)
}
async function registeruser(req,res){
    try{
    const userId = v4();
    var name=req.body.name
    var email=req.body.email
    var mobile=req.body.mobile
    var userpassword=req.body.password
    if (!(email && userpassword && name && email)) {
        res.status(400).send("All input is required");
    }
    const oldUser = await user.findOne({where:{email:req.body.email}});

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    else{
        const otp=generateOtp(req.body.email)
        var mailOptions = {
            to: req.body.email,
            subject: "Otp for manvaasm application registration is: ",
            html: "<h3>OTP for  manvaasm account verification is </h3>" + "<h1 style='font-weight:bold;'>" + otp + "</h1>" // html body
        };
        sendmail(mailOptions)
        
        const password = await bcrypt.hash(req.body.password, saltRounds)
        user.create({userid:userId,name:name,email:email,mobile:mobile,password:password,verified:false})
        
        res.send("otp sented sucessfully")}}
    catch(e){
        errorinuser('userregistration',e)
    }

    }


module.exports={registeruser}