const express =require('express')
const router =express.Router();
const controller =require('./controller')




router.get('/showproducts'  , controller.ShowProduct)
router.get('/showEventsProducts' , controller.ShowProductevents)
router.get('/oncountProducts' , controller.oneproducts)



module.exports = router