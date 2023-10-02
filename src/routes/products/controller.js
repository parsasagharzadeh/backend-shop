const controller = require('./../controller')
const _ =require('lodash')
const bcrypt =require('bcrypt');
const config =require('config')
const jwt =require('jsonwebtoken');



module.exports= new (class extends controller {

async ShowProduct(req ,res){
const products =  await   this.Produce.find({}).toArray()
res.status(200).json({
    data:products ,
    message:'user was sent'
})



}

async ShowProductevents(req ,res){
    const products =  await  this.Produce.find({events:!null}).toArray()
    res.status(200).json({
        data:products ,
        message:'user was sent'
    }) 
}

async oneproducts(req ,res){
    const products =  await  this.Produce.find({count:1}).toArray()
    res.status(200).json({
        data:products ,
        message:'user was sent'
    }) 
}

  




    })();