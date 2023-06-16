//Connect to DATABASE :: MongoDB
import { MongoClient } from "mongodb";

async function main() {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);
  //Selecting DATABASE
  const db = client.db("vishal");
  //Selecting Collection or Table from DATABASE Vishal
  const message = db.collection("message");
  //Ifunction nserting One Message into the database
  /**INSERTONE is a non-blocking so We are suing await to get response from that function and make main function async  */
  await message.insertOne({ text: "Thank You GOD" });

  await client.close();
  console.log("Record Added");
}
main();
