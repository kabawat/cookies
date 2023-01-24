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
  res.header("Access-Control-Allow-Origin", "https://cookietrytwot.netlify.app");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "content-type, withCredentials, Content-Type, withcredentials");
  next();
});

app.post("/login", (req, res) => {
res.cookie('myCookie', 'myValue', { 
        maxAge: 900000, 
        httpOnly: true, 
        sameSite: 'None',
        secure:true
    });


  res.status(200).send(req.body);
});

app.get("/getter", (req, res) => {
  let cookies = req.cookies;
  if(!cookies){
  res.status(401).send("Error")
  }
  res.status(200).send("Cookies found")
});

app.get("/deleter", (req, res) => {
  if(!req.cookies){
  res.status(401).send("Error")
  }
  res.clearCookie('authrrrrr');
  res.status(200).send("Cookies Deleted")
});



app.listen(port, () => {
  console.log(`http://192.168.0.5:${port}`);
});
