const jwt=require("jsonwebtoken")
const createtoken=(id)=>{
   const token=  jwt.sign({id},"jwtprivatekey")
   return token
}
module.exports=createtoken