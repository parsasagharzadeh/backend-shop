
const express =require('express')
const app =express()
const mongoose =require("mongoose")
const debug = require("debug")("app:main")
const config =require('config')
const router =require("./src/routes/index")
const winston =require('winston')
const Db = require('./startup/db')
const db = new Db()

require('./startup/config')(app ,express);



db.connectDb()
require('./startup/login')();





app.use('/api' ,router )

const port = process.env.PORT || 4000 ; 
app.listen(port , ()=>{console.log(`connected to port ${port}`)} )