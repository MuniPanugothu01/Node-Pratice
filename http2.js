const http = require("http");

const server = http.createServer((res, req) => {
    res.write("home sections")
    res.end()
    
})

server.listen(3001, () => {
    console.log(`port is running is! ${3001}`);

})