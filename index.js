const express=require('express')
const registeruser=require("./routes/registration")
const loginuser=require('./routes/login')
const app=express()
app.use('/',express.static('btc2'))

app.use(express.json())
app.use('/api/registeruser',registeruser)
app.use("/api/login",loginuser)

app.get('/a',(req,res)=>{
    res.send("hello  running!!")
})


const port=process.env.PORT||3000
app.listen(port,()=>console.log(`running on port ${port}`))
