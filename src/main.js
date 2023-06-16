import express from "express";
const app = express();

function main(req, res) {
  res.send("Hello World");
}
function happy(req, res) {
  res.send("I am Happy");
}

//http://localhost:4000/main
app.get("/main", main);
app.get("/happy", happy);
//http://localhost:4000/main
app.listen(4000);
