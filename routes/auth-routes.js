const router = require("express").Router();
const User = require("../models/user-models");
const bcrypt = require("bcrypt");

router.get("/login", (req, res) => {
  return res.render("login");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

//注册页Post请求
router.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;
  //确认密码长度
  if (password.length < 8) {
    return res.render("signup");
  }
  //确认用户是否已注册
  let foundUser = await User.findOne({ email }).exec();
  if (foundUser) {
    return res.render("signup");
  }

  //密码加密
  let hashedPassword = await bcrypt.hash(password, 12);
  let newUser = new User({ name, email, password: hashedPassword }, {});
  await newUser.save();
  return res.render("login");
});

module.exports = router;
