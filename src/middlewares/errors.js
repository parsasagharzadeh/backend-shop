const winston =require('winston')


module.exports= (err , req,res, next)=>{
winston.error(err.message , err)

   res.status(500).json({data:null , message:'(server errors) something faild '})

}