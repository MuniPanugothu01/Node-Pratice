const http = require("http");
const fs = require("fs");
const url = require("url");
const { parse } = require("path");


const server = http.createServer((req, res) => {
    console.log(req.url);
    let Data = `${Date.now()} new data recervised\n `;
    const parsed = url.parse(req.url, true);
    fs.appendFile("http.txt", Data, (err, data) => {
        if (parsed.pathname === "/") {
            res.write(`Home section!`);
        }
        else if (parsed.pathname === "/about") {
            const username = parsed.query.myname;
            res.write(`Hai ${username}`);
        }
        else if (parsed.pathname === "/search") {
            const search = parsed.query.userid
            res.write(`user id is! ${search}`)
        }
        else {
            const username = parsed.query.myname
            res.write(`invalid user creditional ${username}`)
        }
        res.end()
    })





})

server.listen(3002, () => {
    console.log(`port is running is! ${3002}`);

})