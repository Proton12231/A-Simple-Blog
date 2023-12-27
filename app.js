const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth-routes");

//连接数据库
mongoose.connect("mongodb://localhost:27017/precticeDB").then(() => {
  console.log("连接到数据库");
});

//middleware
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extends: true }));

//设定routes
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.render("index");
});
//监听端口
app.listen(3000, () => {
  console.log("正在监听3000端口");
});
