function createData(){
    if(FileSystem.existSync('Data'))
    FileSystem.rmdir('Data');
    FileSystem.mkdir('Data');
    
}