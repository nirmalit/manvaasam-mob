var express=require('express');
const router= express.Router();
const views=require('../controllers/address')


router.post('/addaddress',views.addaddress)

module.exports=router