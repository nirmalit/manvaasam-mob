var express=require('express');
const router= express.Router();
const views=require('../controllers/purchasedcourses')


router.get('/addpurchasedcourses',views.addpurchasedcourses)

module.exports=router