var express=require('express');
const router= express.Router();
const views=require('../controllers/order')



router.get('/addorder',views.addorder)

module.exports=router