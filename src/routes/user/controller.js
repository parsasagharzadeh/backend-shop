const controller = require('./../controller')
const _ =require('lodash')
const bcrypt =require('bcrypt');
const config =require('config')
const jwt =require('jsonwebtoken')


module.exports= new (class extends controller {


    async dashboard(req , res){
      this.response({res, data:_.pick(req.user )})

    }
    


         async setorder(req, res){
const isValiduser = await this.User.find({_id:req.body.user._id})
const isValidProduct = await this.Produce.find({_id:req.body.product._id})
if(!isValidProduct) {return res.status(404).json({ data:null , massage:'this product is not valid'})}
if(isValidProduct.count>= isValiduser.order ){
if(isValiduser.value >= isValidProduct.value * isValiduser.count){
  const orderSave = {
    usename : req.body.user.username ,
    count :req.body.user.count , 
    address : req.body.user.address ,
    tellnumber : req.body.user.tellnumber ,
    email : req.body.user.email ,
    product : req.body.product.name ,
    price :req.body.product.value
  }
  const result = await this.Order.insertOne(_.pick(orderSave  ,[  "username" , "count", "address", "tellnumber","email"   ,"product" ,"price"   ]))

  res.status(200).json({
    data : result , 
    massage:"order is send to database"
  })
}else{
  res.status(400).json({
    data:null ,
    massage:'mojodi kif pool kafi nist'
  })
}
}else{
  res.status(400).json({
    data:null ,
    massage:'mojodi anbar kafi nist'
  })
}
}





    })();