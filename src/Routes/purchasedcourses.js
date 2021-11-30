var express=require('express');
const router= express.Router();
const views=require('../controllers/purchasedcourses')
const verify=require('../Middleware/middleware')

router.post('/addpurchasedcourses',verify.authenticateToken,views.addpurchasedcourses)

module.exports=router