// var http=require("http")
function myFunc(request, response){
    console.log("____________________myFunc function get called_____")
    console.log(request)
    // response.write("Hello faraz")
    // response.end()
    response.send("Hello Rahul")
}
// http.createServer(myFunc).listen(8080)

var express=require("express")
server=express()
server.get("/",myFunc)
server.listen(8080)