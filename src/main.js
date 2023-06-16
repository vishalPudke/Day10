import express from "express";
const app = express();

function App(req, res) {
  res.send("Vishal");
}
app.get("/App",App);
app.get("/first", (req, res) => {
  res.send("World");
});
app.listen(4000);
