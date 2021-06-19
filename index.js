import express from 'express'
import userRoutes from "./router/user.js"
import bodyParser from 'body-parser'
// import mongoose from 'mongoose'
import db from './model/index.js'
const Role=db.role
var dbURL="mongodb://localhost:27017/testdb"
db.mongoose.connect(dbURL,{useNewUrlParser:true, useUnifiedTopology:true})
        .then((result)=>{
            //any line of code 
            console.log("Successfully connected to DB")
            intializeDB()
            server.listen(8080, ()=>{console.log("Backend Server started")})
            // console.log(result)
        })
        .catch((err)=>{

            console.log("Error occured while connecting to Mongo DB")
        })

function intializeDB(){
    console.log("In intializeDB")
    Role.estimatedDocumentCount((err, count)=>{
        console.log("In estimateDocumentCount")
        if(!err && count===0){
            console.log("going to role records")
            new Role({
                name:"admin"
            }).save(err=>{
                if(err){
                    console.log(err.message)
                }else{
                    console.log("admin got added")
                }
            })
            new Role({
                name:"moderator"
            }).save(err=>{
                if(err){
                    console.log(err.message)
                }else{
                    console.log("moderator got added")
                }
            })
            new Role({
                name:"user"
            }).save(err=>{
                if(err){
                    console.log(err.message)
                }else{
                    console.log("user got added")
                }
            })
        }else{
            if(err){
                console.log(err)
            }
        }
    }).then(result=>{
        console.log("In intializeDB")
        console.log(result)
    })
    console.log("IntializeDB completed")
}


function myFunc(request, response){
    console.log("____________________myFunc function get called_____")
    console.log(request)
    response.send("Hello Rahul")
}
var server=express()
server.use(bodyParser.json())
server.use("/user", userRoutes)

server.get("/",myFunc)
// server.listen(8080, ()=>{console.log("Backend Server started")})