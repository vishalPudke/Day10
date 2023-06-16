//Connect to DATABASE :: MongoDB
import { MongoClient } from "mongodb";

async function insertRecord() {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);
  //Selecting DATABASE
  const db = client.db("vishal");
  //Selecting Collection or Table from DATABASE Vishal
  const message = db.collection("message");
  //Ifunction nserting One Message into the database
  /**INSERTONE is a non-blocking so We are suing await to get response from that function and make main function async  */
  let jsonDocument = {
    message: "Thank YOu GOD ",
    SentBy: "Vishal",
    to: "GOD",
    from: "Vishal",
  };

  await message.insertOne(jsonDocument);

  await client.close();
  console.log("Record Added");
}

async function main() {
  await insertRecord();
}
main();
