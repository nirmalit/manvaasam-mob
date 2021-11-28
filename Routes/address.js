var express=require('express');
const router= express.Router();
const views=require('../controllers/address')


router.get('/addaddress',views.addaddress)

module.exports=router