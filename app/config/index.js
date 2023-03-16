const dbconfig = require('./db.config')
const mongoose = require('mongoose')
mongoose.Promise=global.Promise
const db={}
db.mongoose=mongoose
db.url=dbconfig.url
db.students=require("../models/student.model")(mongoose)
module.exports=db
