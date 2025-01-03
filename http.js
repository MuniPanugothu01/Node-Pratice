const http = require("http")
const url = require("url")
// create the surver
const server = http.createServer((req, res) => {
    res.write("server created!")
    res.write(req.url)
    console.log(req.url);
    res.end()

})
server.listen(3001, () => {
    console.log("port is running");

})
