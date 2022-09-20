//using stream method to access note.txt
/*var fs = require('fs');
var stream = fs.createReadStream('note.txt');

stream.pipe(res);

*/
//Applying piping to render fs object using http module
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
const stream = fs.createReadStream('note.txt')
stream.pipe(res)
})
server.listen(3000,()=>{
    console.log("listening on port 3000");
})


/*stream.on('data', function(dataChunk){
    console.log('Chunk Starts ******');
    console.log(dataChunk);
    console.log('Chunk Ends *******');
    })
    */