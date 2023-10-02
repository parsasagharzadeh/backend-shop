const expressValidator =require('express-validator')
const check =expressValidator.check

module.exports= new (class{



setorder(){
    return [
        check('email').isEmail().withMessage('email is invalid') ,
        check('username').not().isEmpty().withMessage('username cant be empty') ,
        check('tellnumber').not().isEmpty().withMessage('tellnumber cant be empty') ,
        check('price').not().isEmpty().withMessage('price cant be empty') ,
        check('product').not().isEmpty().withMessage('product cant be empty') ,
        check('count').not().isEmpty().withMessage('count cant be empty') ,
        check('address').not().isEmpty().withMessage('address cant be empty') ,
    
    ]
    }



})