const { request, response } = require('express');
var http = require('http');
var Server = http.createServer(function(request,response){
    //Response from the server
 
 if(request.url =='/' ){
    response.write("Welcome to server home page");
    response.end();
 }
 if(request.url=='/products'){
    response.write("Welcome to Products page");
    response.end();

}
});

 
//Listen to server

Server.listen(8000,()=>{
    console.log("listening to server at 8000");
})