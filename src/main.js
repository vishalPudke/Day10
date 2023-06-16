import { MongoClient } from "mongodb";

async function main() {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  let db = client.db("vishal");
  let message = db.collection("message");
  let jsonDocument = { message: "Thank You God" };
  await message.insertOne(jsonDocument);
  await client.close();
  console.log("Record inserted Successfully");
}
main();