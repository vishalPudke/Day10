//Connect to DATABASE :: MongoDB

import { insertMessage, readMessage } from "./mydb.js";

async function main() {

    //INSERT 
  let jsonDocument = {
    message: "Thank YOU GOD ",
    SentBy: "Vishal",
    to: "GOD",
    from: "Vishal",
  };
  await insertMessage(jsonDocument);
  //READ.....
  let list = await readMessage();
  console.log(list);
  //await readMessage();
}
main();
