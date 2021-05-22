
const fetch=require("isomorphic-fetch")

// const registeruser=async(firstname,lastname,email,phonenumber,country,pasword)=>{
// const response=await fetch('http://localhost:3000/api/registeruser',{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//    body:JSON.stringify({
// firstname,
// lastname,
// email,
// phonenumber,
// country,
// pasword
//    })
// })
// const result=await response.text()
// console.log(result)
// }

// registeruser('sabinus',"nwoka","email9@gmail.com",7989783,"nigeria","pasworder")








loginuser=async(email,pasword)=>{
  const response= await fetch("http://localhost:3000/api/login",{
   method:"POST",
   headers:{"content-type":"application/json"},
   body:JSON.stringify({
     email,
     pasword 
   })
  })
const result=await response.text()
console.log(result)
}
loginuser("email9@gmail.com","pasworder")