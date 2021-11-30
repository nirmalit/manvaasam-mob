var express=require('express');
const router= express.Router();
const resend=require('../controllers/resendOtp')
const verify=require('../controllers/verifyUser')



router.post('/verifyotp',verify.verify)
router.post('/resendotp',resend.resendOtp)

module.exports=router