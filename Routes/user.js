var express=require('express');
const router= express.Router();
const user=require('../controllers/user')

router.get('/registeruser',user.registeruser);

module.exports=router;