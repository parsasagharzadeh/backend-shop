const controller = require('./../controller')
const _ =require('lodash')
const bcrypt =require('bcrypt');
const config =require('config')
const jwt =require('jsonwebtoken');  


module.exports= new (class extends controller {

    async register(req , res){
  let user = await this.User.findOne({email :req.body.email})

if(user){
    return this.response({
        res , code:400 , message:'user has already registred' 
    })
}


// const salt = await bcrypt.genSalt(10)
// user.password = await bcrypt.hash(user.password , salt)
 user = await this.User.insertOne(_.pick(req.body  ,[  "username" ,"email" , "password" , "tellnumber" ,"isadmin"   ]))
console.log(user)


this.response({
    res ,message:'user registred' ,
    data : _.pick(req.body  ,[  "username" ,"email"  , "tellnumber" ,"isadmin"   ]) , user
})
    }

    async login(req , res){
        const user = await this.User.findOne({email:req.body.email})
        if(!user){
            return this.response({
        res , message:'invalid email or password' ,
        code: 400
            })
        }
        //  const isvalid =await bcrypt.compare(req.body.password , user.password)
        //  if(!isvalid){
        //     return this.response({
        //         res , message:'invalid email or password' ,
        //         code: 400
        //             })
                    
        //  }
         // make users token that make just for a special user
         console.log(user._id)
         const token =jwt.sign({_id:user._id} , config.get("jwt_key"))
         this.response({
            res , message:'login successfuly'  , data: {token}
            
                })
     
            } 




    })();