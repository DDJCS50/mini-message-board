const { Router } = require("express");

const indexRouter = Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.get);
indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "New Title" });
});
indexRouter.post("/new", indexController.post);
indexRouter.get("/details/:id", indexController.getDetails);

module.exports = indexRouter;
