const express=require('express')
const User=require('../models/user')
const router=express.Router()
const validatelogin=require('../validations/validatelogin')
const createtoken=require('../validations/newtoken')

router.post("/",async(req,res)=>{
const isvalid= validatelogin(req.body.email,req.body.pasword)

if(isvalid===true){
const user=await User.findOne({email:req.body.email,pasword:req.body.pasword})
.select('firstname lastname country')
.limit(' 1')
.sort()
if(user){
const token =createtoken(user._id)
res.json({message :`login success`, error:false,token})

}else res.json({errMessage:"invalid username or pasword",error:true})

    }else{res.json({errMessage:isvalid,error:true})}

})

module.exports=router