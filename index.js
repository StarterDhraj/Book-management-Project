const express= require("express")
const mongoose= require("mongoose")
const bodyParser= require("body-Parser")
const route= require("./route/route.js")
const aws = require("aws-sdk")
const multer = require("multer")

const app= express()
app.use(bodyParser.json())
app.use(multer().any())

mongoose.connect("mongodb+srv://dhiraj1222:Kmt4R9zWqORvLGLj@cluster0.jlph9m0.mongodb.net/Bookmanagement",{
    useNewUrlParser:true
})
.then(()=>console.log("mongodb is connected"))
.catch(err => console.log(err))

app.use("/",route)

app.use(function (req, res) {
    var err = new Error("Not Found.");
    err.status = 404;
    return res.status(404).send({ status:false, message: "Path not Found"});
  });

app.listen(process.env.PORT || 3000 ,function(){
    console.log("express app is running on this port "+ (process.env.PORT || 3000))
})