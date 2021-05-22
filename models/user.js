const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/immercryto",{ useNewUrlParser: true, useUnifiedTopology: true  })
.then(()=>console.log("connected to user database..."))
.catch(err=>console.error(err.message))
const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        minlength:3
    },
    lastname:{
       type:String,
       required:true,
       minlength:3 
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phonenumber:{
        type:Number,
        required:true,
        min:11
    },
    country:{
        type:String,
        required:true,
        
    },
    pasword:{
        type:String,
        required:true,
        minlength:8
    }
})

const User=mongoose.model("user",userSchema)
module.exports=User