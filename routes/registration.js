const express=require('express')
const router=express.Router()
const validateRegistration=require('../validations/validateuser')
const User=require("../models/user")
const newtoken=require('../validations/newtoken')

router.post('/',async(req,res)=>{

 const isvalid=validateRegistration (req.body.firstname,req.body.lastname,req.body.email,parseInt(req.body.phonenumber),req.body.country,req.body.pasword)
 if(isvalid===true){
   
try{
const user=await User.findOne({email:req.body.email})
if(user){
res.status(400).json({errMessage:"user already exist please login",error:true})
}else{
    
   const user= await new User({
       firstname:req.body.firstname,
       lastname:req.body.lastname,
       email:req.body.email,
       phonenumber:parseInt(req.body.phonenumber),
       country:req.body.country,
       pasword:req.body.pasword
   })
  const result= await user.save()
  const token= newtoken(result._id)
  res.status(200)  .json({message:`success registerd a user account for ${result.firstname} ${result.lastname}`,
  user:{
    firstname:result.firstname,
    lastname:result.lastname ,
     email:result.email ,
      phonenumber:result.phonenumber,
       country:result.country
  },
  token:token,error:false})
// res.status(200).header({token})

}


}catch(err){
res.status(400).json({errMessage:err.message,error:true})
}




 }else{
     res.json({errMessage:isvalid, error:true})
 }

})

module.exports=router



