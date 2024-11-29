const db = require("../db/index.js");

async function getAllUsernames() {
  const { rows } = await db.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(username, textInput, added, details) {
  await db.query("INSERT INTO messages (username, textinput, added, details) VALUES ($1, $2, $3, $4)", [username, textInput, added, details]);
}

async function getMessageById(searchedId) {
  const { rows } = await db.query("SELECT * FROM messages WHERE id=($1)", [searchedId]);
  return rows;
}

async function deleteUsernames() {
  await db.query("DELETE FROM messages");
}

module.exports = {
  getAllUsernames,
  insertMessage,
  getMessageById,
  deleteUsernames,
};
