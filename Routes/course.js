var express=require('express');
const router= express.Router();
const views=require('../controllers/course')
const verify=require('../Middleware/middleware')

router.post('/addcourse',verify.authenticateToken,views.addcourse)
router.get('/getallcourses',views.getallcourses)

module.exports=router