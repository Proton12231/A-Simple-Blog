const express = require("express");
const app = express();
const mongoose = require("mongoose");

//连接数据库
mongoose.connect("mongodb://localhost:27017/precticeDB").then(() => {
  console.log("连接到数据库");
});

//监听端口
app.listen(3000, () => {
  console.log("正在监听3000端口");
});
