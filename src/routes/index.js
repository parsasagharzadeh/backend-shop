const express =require('express')
const router =express.Router();
const authRouter =require('./auth/index')
const productsRouter =require('./products/index')
const userRouter =require('./user/index')
const adminRouter =require('./admin/index')
const {isLoggined , isAdmin} =require("./../middlewares/auth")
const errors = require('./../middlewares/errors')


router.use('/auth' , authRouter);
router.use('/products' , productsRouter);
router.use('/user' ,isLoggined , userRouter); //isLogin is for protect the some routs that need  token 
router.use('/admin' ,isLoggined ,isAdmin, adminRouter); //isLogin is for protect the some routs that need  token &&  isAdmin show that the user can use admin panel or not and let them


router.use(errors)

module.exports=router