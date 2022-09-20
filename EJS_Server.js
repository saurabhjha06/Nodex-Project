var express = require('express');
var app = new express();
app.set('view engine','ejs');
var users =[{name:'Saira',Age:25},{name:'Saurabh',age:26},{name:'Vishwas',age:27}]
app.get('/',(req,res)=>{
  
     res.render('index',{username:'Saurabh',userArray:users});
     
})
app.listen(8000,()=>{
  console.log("listening to server at 8000");
});