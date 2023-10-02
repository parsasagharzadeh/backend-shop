const express =require('express')
const router =express.Router();
const controller =require('./controller')
const validator =require('./validator') 




router.post('/createProduct' , validator.createProduct() ,controller.validate , controller.createProduct)
router.put('/updateProduct' , validator.createProduct() ,controller.validate , controller.updateProducts)
router.delete('/deleteProduct' , controller.deleteProducts )



module.exports = router