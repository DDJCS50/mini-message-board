const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const db = require("../db");

// let links = [{ href: "/details", message: message }];

const getIndex = asyncHandler(async (req, res) => {
  let messages = db.messages;

  if (!messages) {
    throw new CustomNotFoundError("Messages not found");
  }

  res.render("index", { title: "Mini Message board", messages: messages });
});

const postMessage = asyncHandler(async (req, res) => {
  let messages = db.messages;

  if (!messages) {
    throw new CustomNotFoundError("Messages not found");
  }

  if (req.body.messageText != "" && req.body.authorName != "") {
    db.messages.push({ text: req.body.messageText, user: req.body.authorName, added: new Date(), index: messages.length + 1, details: `Something wacky with ${req.body.authorName}` });
  }

  res.redirect("/");
});

const getDetailsPage = asyncHandler(async (req, res) => {
  let messages = db.messages;
  const { index } = req.params;

  console.log(index);

  const messageSelect = await db.getMessageByIndex(Number(index));

  if (!messages) {
    throw new CustomNotFoundError("Messages not found");
  }

  console.log(req.body);

  res.render("details", { title: "Details", message: messageSelect });
});

module.exports = {
  get: getIndex,
  post: postMessage,
  getDetails: getDetailsPage,
};
