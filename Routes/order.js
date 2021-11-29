var express=require('express');
const router= express.Router();
const views=require('../controllers/order')
const verify=require('../Middleware/middleware')


router.post('/addorder',verify.authenticateToken,views.addorder)
router.post('/myorders',verify.authenticateToken,views.myorders)

module.exports=router