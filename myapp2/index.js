import express from 'express'
import userRoutes from "./router/user.js"
import bodyParser from 'body-parser'
// var http=require("http")
function myFunc(request, response){
    console.log("____________________myFunc function get called_____")
    console.log(request)
    // response.write("Hello faraz")
    // response.end()
    response.send("Hello Rahul")
}
// http.createServer(myFunc).listen(8080)

// var express=require("express")
var server=express()
server.use("/user", userRoutes)
server.use(bodyParser.json())
server.get("/",myFunc)
server.listen(8080)