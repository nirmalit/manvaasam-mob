const models = require('../models/user');
const {verifyOtp}=require('../utils/otp')
async function verify(req,res)
{
    if (verifyOtp(req.body.otp,req.body.email)) {
        const User = await user.findOne({where:{email:req.body.email}});
        console.log(User)
        User.update({verified:true})
        res.send("You has been successfully registered");
    }
    else {
        res.send({ msg: 'otp is incorrect' });
    }

}
 module.exports={verify}