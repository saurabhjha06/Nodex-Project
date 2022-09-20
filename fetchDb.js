const express = require('express');
const MongoClient = require('mongodb').MongoClient;
var user=require('./model/user.js');
const app = express();
app.use(express.json());
var database;
app.get('/',(req,res)=>{
    res.send("Welcome to mongo");
// Contents for home page 

})
// Contents for redirect pages
app.get('/api/users',(req,res)=>{
  database.collection('users').find({}.toArray((err,result)=>{
        if (err) throw err
        res.send(result);
   
   
    }))   
})

app.listen(3000,()=>{
    MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true},(err,result)=>{
        if (err) throw err
        database=result.db('userdb')
    
	console.log("listening server on 3000");
})
})