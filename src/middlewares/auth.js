const config =require('config')
const jwt =require('jsonwebtoken')
const { ObjectId } = require('mongodb')
const Controller = require('./../routes/controller')


const controller = new Controller()


async function isLoggined(req ,res ,next){
const token =req.header('x-parsa-token')

if(!token)    res.status(401).send("access denied ")
try {
  // this code catch a info from tokenID that send from frontend API 
 const decoded = jwt.verify(token , config.get("jwt_key"))
 console.log(decoded._id) 
  const user = await controller.User.findOne({_id:ObjectId(decoded._id)})  
console.log(user) 
  req.user =user 
  next() 
} catch (ex) {  
   res.status(400).send("invalid token")  
}
}


async function isAdmin(req ,res ,next){
if(!req.user.isadmin) res.status(403).send("access denied")
next()

}



module.exports={
    isLoggined
    ,isAdmin
}