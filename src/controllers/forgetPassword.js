const models = require('../models/user');
bcrypt=require('bcrypt');
const saltRounds=10;
const {generateOtp}=require('../utils/otp')
const {sendmail}=require('../utils/sendEmail')
const {verifyOtp}=require('../utils/otp');
const jwt = require('jsonwebtoken');

async function forgetPassword(req,res)
{
    const User=await user.findOne({where:{email:req.body.email}});
    const otp=generateOtp(req.body.email)
    var mailOptions = {
        to: req.body.email,
        subject: "Otp for resetpassword is: ",
        html: "<h3>OTP for resetpassword is </h3>" + "<h1 style='font-weight:bold;'>" + otp + "</h1>" // html body
    };
    sendmail(mailOptions)
    res.send('Otp has been sent to registerd email')

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
              res.send({
                success:true,data:{"Token":token},msg:"otp has been verified"});
        }
        else{
            res.send("User has no account")
        }
    }
    else {
        res.send({ msg: 'otp is incorrect' });
    }

}

async function resetPassword(req,res)
{
    const User = await user.findOne({where:{email:req.body.email}});
    const password = await bcrypt.hash(req.body.password, saltRounds);
    User.update({password:password})
    res.send("Password has been reseted successfully")
}

module.exports={forgetPassword,verify,resetPassword}




