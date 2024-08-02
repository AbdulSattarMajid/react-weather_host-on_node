const mongose=require('mongoose');

mongose.connect("mongodb://127.0.0.1:27017/practicekaro");

const userschema=new mongose.Schema({
  age:Number,
  name:String,
  username:String,
})

module.exports=mongose.model("users",userschema)

