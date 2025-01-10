const http = require("http");
// import the files
const { Add, Sub, Mul, Div } = require("./export");
console.log(Add(10, 20)); // 30
console.log(Sub(20, 10)); // 10
console.log(Mul(2, 5)); // 10
console.log(Div(20, 5)); // 4
const server = http.createServer((req, res) => {
  res.write("here sendiing the data to server to display in broweser!");
});

server.listen(3001, () => {
  console.log(`Here port is! ${3001} Running`);
});
