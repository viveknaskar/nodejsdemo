//using fs we can also create or remove directory

var fs = require('fs');

// mkdir creates directory asynchronously

fs.mkdir('Stuff',function(){
    fs.readFile('readfile.txt', 'utf8', function(err, data){
        fs.writeFile('./Stuff/writeFile.txt', data);
    });
})
