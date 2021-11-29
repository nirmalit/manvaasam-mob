var express=require('express');
const router= express.Router();
const views=require('../controllers/product')
const verify=require('../Middleware/middleware')


router.post('/addproduct',verify.authenticateToken,views.addproduct)
router.get('/getallproducts',views.getallproducts)

module.exports=router