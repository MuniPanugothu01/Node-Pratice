const http = require("http");
const fs = require("fs");
const url = require("url")


const server = http.createServer((req, res) => {
    console.log(req.url);
    res.write("another sections")
    res.end()
    let Data = `${Date.now()} new data recervised\n `
    fs.appendFile("http.txt", Data,(err, data) => {
        if (err) {
            // res.writeHead(500, { "Content-Type": "text/plain" });
            res.write(`Error writing to file: ${err.message}`);
        }
        else {
            // res.writeHead(200, { "Content-Type": "text/plain" });
            res.write("Data written to file successfully!");
        }
        res.end()
    })

    



})

server.listen(3002, () => {
    console.log(`port is running is! ${3002}`);

})