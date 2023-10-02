const expressValidator =require('express-validator')
const check =expressValidator.check

module.exports= new (class{

registerValidator(){
return [
    check('email').isEmail().withMessage('email is invalid') ,
    check('username').not().isEmpty().withMessage('username cant be empty') ,
    check('tellnumber').not().isEmpty().withMessage('tellnumber cant be empty') ,
    check('isadmin').not().isEmpty().withMessage('isadmin cant be empty') ,
    check('password').not().isEmpty().withMessage('password cant be empty') ,

]
}

loginValidator(){

    return [
        check('username').not().isEmpty().withMessage('username is invalid') ,
        check('password').not().isEmpty().withMessage('password cant be empty') ,
    
    ]
}

})