const models = require('../models/user');
const {verifyOtp}=require('../utils/otp')
const {ResponseBody} = require('../utils/response')
async function verify(req,res)
{
    if (verifyOtp(req.body.otp,req.body.email)) {
        const User = await user.findOne({where:{email:req.body.email}});
        User.update({verified:true})
        const response = new ResponseBody(true, "You has been successfully registered", {});
        res.send(response);
    }
    else {
        const response = new ResponseBody(false, 'otp is incorrect', {});
        res.send(response);
    }

}
 module.exports={verify}