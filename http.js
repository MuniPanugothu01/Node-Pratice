const http = require("http");
const fs = require("fs");
const url = require("url");
// create the surver
const server = http.createServer((req, res) => {
    console.log(req.headers);

    const Data = `${Date.now()}: ${req.url} data recervied\n`;
    const myurl = url.parse(req.url,true)
    console.log(myurl);

    fs.appendFile("today.txt", Data, (err, data) => {
        if (req.url == "/") {
            res.write("home sections")
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
