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
  res.header("Access-Control-Allow-Origin", "https://cookietrytwo.netlify.app");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "content-type, withCredentials, Content-Type, withcredentials");
  next();
});

app.post("/login", (req, res) => {
  // res.header["Access-Control-Allow-Origin"] = "https://cookiestry.netlify.app";
  console.log(req.body);
  const expires = new Date();
expires.setDate(expires.getDate() + 7);
res.cookie("usernamerrrr", "john doerrrr", {
    sameSite: "none",
    secure: true,
    maxAge: expires,
    path: "/",
   domain:"cookietrytwo.netlify.com"
});


  res.status(200).send(req.body);
});

app.get("/getter", (req, res) => {
  let cookies = req.cookies;
  res.json(cookies);
});



app.listen(port, () => {
  console.log(`http://192.168.0.5:${port}`);
});
