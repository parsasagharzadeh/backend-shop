const controller = require('./../controller')
const _ =require('lodash')
const bcrypt =require('bcrypt');
const config =require('config')
const jwt =require('jsonwebtoken');


module.exports= new (class extends controller {


    async deleteProducts(req ,res){
        const result = await this.Produce.findByIdAndRemove(req.body.id)
       
       res.status(200).json({
           data:result , 
           message:'product is being deleted'
       })
       
           }


    async createProduct (req , res){
    const  product = await  this.Produce.insertOne(_.pick(req.body  ,[  "name" ,"value" , "about" , "processor" ,  "count" ,"events" , "size"  ,"imge"   ]))  
    console.log('create shod')
res.status(200).json({
    data :product ,
    message:'product is being added'
})


    }




    async updateProducts(req,res){
const result = await this.Produce.findByIdAndUpdate(req.body.id , {$set:{
name:req.body.name ,
size:req.body.size ,
events:req.body.events ,
imge:req.body.imge ,
processor:req.body.processor ,
value:req.body.value ,
count:req.body.count ,
about:req.body.about 


}}, {new:true}) 
await result.save()
res.status(200).json({
    data:result ,
    message:'product updated'
})

    }
    
  




    })();