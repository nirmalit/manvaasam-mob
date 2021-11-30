var express=require('express');
const router= express.Router();
const views=require('../controllers/address')
const verify=require('../Middleware/middleware')

router.post('/addaddress',verify.authenticateToken,views.addaddress)



module.exports=router