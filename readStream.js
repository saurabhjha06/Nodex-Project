var fs= require('fs')
var stream=fs.createReadStream('note.txt',{encoding:'utf8'})
console.log(stream)