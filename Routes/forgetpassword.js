var express=require('express');
const password=require('../controllers/forgetPassword')
const auth=require('../Middleware/middleware')
const router= express.Router();

router.get('/forgetPassword',password.forgetPassword);
router.get('/verify',password.verify);
router.get('/resetPassword',auth.authenticateToken,password.resetPassword);

module.exports=router;