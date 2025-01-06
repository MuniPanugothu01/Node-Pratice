const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    res.write("another sections")
    res.end()


    fs.writeFile("http.txt", "data", (err, data) => {
        if (err) {
            res.write(`error in file ${err}`)
        }
        else {
            res.write(`There is no error in file ${data}`)
        }
        res.end()
    })



})

server.listen(3002, () => {
    console.log(`port is running is! ${3002}`);

})