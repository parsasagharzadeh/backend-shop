const express =require('express')
const router =express.Router();
const controller =require('./controller')
const validator =require('./validator')



router.get('/dashboard'  , controller.dashboard)
router.post('/setorder' , validator.setorder() ,controller.validate, controller.setorder )


module.exports = router