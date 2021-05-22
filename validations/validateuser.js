const Joi=require("joi")

const validateRegistration=(firstname,lastname,email,phonenumber,country,pasword)=>{
    
    const schema={
        firstname:Joi.string().min(3) .max(50).required(),
        lastname:Joi.string().min(3).max(50).required(),
        email:Joi.string().email().required(),
        phonenumber:Joi.number().min(0).required(),
        country:Joi.string().required(),
       pasword: Joi.string().min(8).max(50).required()

    }

    const result=Joi.validate({firstname,lastname,email,phonenumber,country,pasword},schema)
  
if(result.error) return  result.error.details[0].message
return true
}

module.exports=validateRegistration