var express = require('express');
var app = new express();
app.get('/',(req,res)=>{
  // res.send("welcome to the home page of express application");
    res.sendFile(__dirname + '/public/index.html');
     //Another method to stream pipe
     
})
function getProducts(req,res,next){
    var products =['Sports car','Smatphones','Desktops']; //Database Calls
    req.products = products; //Pass data to the next handler
    next(); //Next Handler in line
}

app.get('/products',getProducts,(req,res,next)=>{
    res.send("Products info for "+req.query.productsproducts); //Search the record in database for id =32
})

app.post('/products',(req,res)=>{
    res.send("Added the new product ");

})

//Below Code must be placed at the last part of routing table
app.use((req,res,next)=>{
    res.status(404).send("PATH NOT FOUND");

})
app.listen(8000,()=>{
    console.log("listening to server at 8000");
});
