const expressValidator =require('express-validator')
const check =expressValidator.check

module.exports= new (class{

    createProduct(){
return [
    check('name').not().isEmpty().withMessage('name is invalid') ,
    check('size').not().isEmpty().withMessage('size cant be empty') ,
    check('about').not().isEmpty().withMessage('about cant be empty') ,
    check('imge').not().isEmpty().withMessage('image cant be empty') ,
    check('events').not().isEmpty().withMessage('events cant be empty') ,
    check('processor').not().isEmpty().withMessage('processor cant be empty') ,
    check('count').not().isEmpty().withMessage('count cant be empty') ,
    check('value').not().isEmpty().withMessage('value cant be empty')   

]
}





})