const pg = require("pg");
require("dotenv").config();
// const messages = [
//   {
//     text: "Hello from John",
//     user: "John",
//     added: new Date(),
//     details: "I just wanted to say hello first",
//     index: 1,
//   },
//   {
//     text: "Hello from Jane",
//     user: "Jane",
//     added: new Date(),
//     details: "I just wanted to say hello second",
//     index: 2,
//   },
// ];

// async function getMessageByIndex(index) {
//   let chosen = messages.find((message) => message.index === index);
//   console.log(chosen);
//   return chosen;
// }

// module.exports = { messages, getMessageByIndex };
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const query = async (text, params) => {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  console.log("executed query", { text, duration, rows: res.rowCount });
  return res;
};

module.exports = {
  query,
};
