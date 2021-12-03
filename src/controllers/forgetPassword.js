const models = require('../models/user_model');
bcrypt=require('bcrypt');
const saltRounds=10;
const {generateOtp}=require('../utils/otp')
const {sendmail}=require('../utils/sendEmail')
const {verifyOtp}=require('../utils/otp');
const jwt = require('jsonwebtoken');
const {ResponseBody} = require('../utils/response')

async function forgetPassword(req,res)
{
    const User=await user.findOne({where:{userid:req.body.email}});
    const otp=generateOtp(req.body.email)
    var mailOptions = {
        to: req.body.email,
        subject: "Otp for resetpassword is: ",
        html: "<h3>OTP for resetpassword is </h3>" + "<h1 style='font-weight:bold;'>" + otp + "</h1>" // html body
    };
    sendmail(mailOptions)
    const response = new ResponseBody(true, "Otp has been sent to registerd email", {});
    res.send(response)

}


async function verify(req,res)
{
    if (verifyOtp(req.body.otp,req.body.email)) {
        const User = await user.findOne({where:{email:req.body.email}});
        if(User){
            const token = jwt.sign(
                { userid:User.userid },process.env.JWT_KEY,
                {expiresIn: "10h",}
              );
              const response = new ResponseBody(true, "otp has been verified", {"Token":token});
              res.send(response)
        }
        else{
            const response = new ResponseBody(false, "User has no account", {});
            res.send(response)
        }
    }
    else {
        const response = new ResponseBody(false, "otp is incorrect", {});
        res.send(response)

    }

}

async function resetPassword(req,res)
{
    const User = await user.findOne({where:{email:req.body.email}});
    const password = await bcrypt.hash(req.body.password, saltRounds);
    User.update({password:password})
    const response = new ResponseBody(true, "Password has been reseted successfully", {});
    res.send(response)
}

module.exports={forgetPassword,verify,resetPassword}




