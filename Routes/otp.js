var express=require('express');
const router= express.Router();
const resend=require('../controllers/resendOtp')
const verify=require('../controllers/verifyUser')



router.get('/verifyotp',verify.verify)
router.get('/resendotp',resend.resendOtp)

module.exports=router