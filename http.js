const http = require("http");
const fs = require("fs");
// create the surver
const server = http.createServer((req, res) => {
    console.log(req.headers);
    
    const Data = `${Date.now()} data recervied\n`
    fs.appendFile("today.txt", Data, (err, data) => {
        if (req.url == "/") {
            res.write("home section")
        }
        else if (req.url == "/about") {
            res.write("About section!")
        }
        else if (req.url == "/contact-us") {
            res.write("contact us section")
        }
        else {
            res.write("data not found!")
            res.end()
        }
        res.end()
    })


})
server.listen(3001, () => {
    console.log("port is running");

})
