var express=require('express');
const password=require('../controllers/forgetPassword')
const auth=require('../Middleware/middleware')
const router= express.Router();

router.post('/forgetPassword',password.forgetPassword);
router.post('/verify',password.verify);
router.post('/resetPassword',auth.authenticateToken,password.resetPassword);

module.exports=router;