var express=require('express');
const router= express.Router();
const auth=require('../controllers/auth')



router.get('/login',auth.login);

module.exports=router;