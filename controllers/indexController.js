const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const db = require("../db/queries");

// let links = [{ href: "/details", message: message }];

const getIndex = asyncHandler(async (req, res) => {
  let messages = await db.getAllUsernames();

  if (!messages) {
    throw new CustomNotFoundError("Messages not found");
  }

  res.render("index", { title: "Mini Message board", messages: messages });
});

const postMessage = asyncHandler(async (req, res) => {
  let messages = await db.getAllUsernames();

  if (!messages) {
    throw new CustomNotFoundError("Messages not found");
  }

  if (req.body.messageText != "" && req.body.authorName != "") {
    db.insertMessage(req.body.authorName, req.body.messageText, new Date(), `Something wacky with ${req.body.authorName}`);
  }

  res.redirect("/");
});

const getDetailsPage = asyncHandler(async (req, res) => {
  let messages = await db.getAllUsernames();
  const { id } = req.params;

  //TODO Change this to get by id
  const messageSelect = await db.getMessageById(Number(id));

  if (!messages) {
    throw new CustomNotFoundError("Messages not found");
  }

  res.render("details", { title: "Details", message: messageSelect[0] });
});

module.exports = {
  get: getIndex,
  post: postMessage,
  getDetails: getDetailsPage,
};
