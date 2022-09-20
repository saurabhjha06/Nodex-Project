var fs=require('fs');

//displaying file stats from selected files
// fs.stat('note.txt',function(err,stats){
//     if(err){
//     console.log('Error');
//     return;
//     }
//     console.log('Size:'+stats.size);
//     console.log('IsFile?:'+stats.isFile());
//     console.log('IsDir:'+stats.isDirectory());
//     });


    //Writing data to a file
    fs.writeFile('note.txt',"This is line no 2 in the file",function(err){
        if (err){
            console.log("Unable to write data on note.txt");
        }
        console.log("data inserted successfully")

    })

    // fs.writeFile('note.txt',"Added  line 2 to the file",function(err){
    //     if (err){
    //         console.log("Unable to write data on note.txt");
    //     }
        

    // })

    // 
    // fs.readdir('.',function(err,files){
    //     //Printoutthestatsforeachofthesefiles
    //     for(FileList) {
    //     console.log('filename'+files[i]);
    //     fs.stat(files[i],function(err,stats){
    //     console.log('IsFile?'+stats.size());
    //     });
    
    
    // }});