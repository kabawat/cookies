const express = require("express");
const app = express();
const port = process.env.PORT || 2917;
const cors = require("cors");
let cookieParser = require('cookie-parser')
// const cookiesParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("hello");
});
// app.use(cookiesParser());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://cookiestry.netlify.app");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "content-type, withCredentials, Content-Type, withcredentials");
  next();
});

app.post("/login", (req, res) => {
  // res.header["Access-Control-Allow-Origin"] = "https://cookiestry.netlify.app";
  console.log(req.body);
  res.setHeader("Set-Cookie", "auth=token SameSite=None; Secure");
  res.cookie('username', 'john doe', { sameSite:"none", secure:true});
  res.send("Success");
});


app.listen(port, () => {
  console.log(`http://192.168.0.5:${port}`);
});
