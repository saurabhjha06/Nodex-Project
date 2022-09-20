//Buffering technique to read data from note.txt
var fs=require('fs');
fs.readFile('note.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data);
})



//using Stream Reader method to readFiles


