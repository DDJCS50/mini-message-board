const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const db = require("../db");

const getIndex = asyncHandler(async (req, res) => {
  const messages = db.messages;

  if (!messages) {
    throw new CustomNotFoundError("Messages not found");
  }

  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = {
  get: getIndex,
};
