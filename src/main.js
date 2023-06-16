//Connect to DATABASE :: MongoDB
import { MongoClient } from "mongodb";

async function insertMessage(jsonDocument) {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("vishal");

  const message = db.collection("message");

  await message.insertOne(jsonDocument);

  await client.close();
  console.log("Record Added");
}

async function readMessage() {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  //LOGIC OF READ
  let db = client.db("vishal");
  let message = db.collection("message");

  let list = await message.find().toArray();
  console.log(list);
  await client.close();
}

async function main() {
  let jsonDocument = {
    message: "Thank YOU GOD ",
    SentBy: "Vishal",
    to: "GOD",
    from: "Vishal",
  };
  //await insertMesaage(jsonDocument);
  readMessage();
}
main();
