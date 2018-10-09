let http= require("http");
let fs = require('fs');

console.log(process.argv[2])
let filename = process.argv[3];
console.log(filename);

server = http.createServer(function(request, response, error) {
    fs.createReadStream(filename).pipe(response);
    fs.writeFile(__dirname+'/text.txt', filename);
});

if (!module.parent) {
    server.listen(process.argv[2], () => {
        console.log(`Node started on port ${process.argv[2]}`);
    });

  }

//node
//app.js - file containing the code process.argv[1]
//8000 - port number -process.argv[2]
//tutorial_suitable_age_5.jpeg - Readable fileStream - process.argv[3]

//!Run with this command
//*node app.js 8000 tutorial_suitable_age_5.jpeg