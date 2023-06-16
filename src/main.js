import { MongoClient } from "mongodb";
import express from "express";
const app = express();

async function main(req, res) {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);
  const db = client.db("vishal");
  const message = db.collection("message");

  let inputDocument = { message: "Hello thank you GOD" };
  await message.insertOne(inputDocument);
  await client.close();
  res.send("Record Added");
}

async function findAllMessage(req, res) {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("vishal");
  const message = db.collection("message");

  // let inputDocument = {message : "Hello GOD..Thank you so much for this life and give me chance to learn a technology"};
  // await message.insertOne(inputDocument);
  let list = await message.find().toArray();
  await client.close();
  res.send(list);
}

app.get("/main", main);
app.get("/findAllMessage", findAllMessage);

app.listen(4000);
