const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  login
} = require("./user.controller");
router.post("/signup", createUser);
router.post("/login", login);

module.exports = router;