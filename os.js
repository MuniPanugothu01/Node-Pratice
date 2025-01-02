const os = require("os")
const path = require("path")
// console.log("hello");
// console.log(os.type());
// console.log(os.version());
// console.log(os.freemem(),"memory space");
// console.log(os.cpus());

// __dirname
// __filename
// console.log(__dirname,"directory name");
// console.log(__filename,"file name");

console.log(path.dirname(__filename),"directory name");
console.log(path.basename(__filename),"it give only file name!");
console.log(path.extname(__filename),`"it gives the file extension name like .html, .css"`);



