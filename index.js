const express = require("express");
const app = express();
const port = 2917;
const cors = require("cors");
const cookiesParser = require("cookie-parser");
app.use(express.json());
app.use(cookiesParser());
app.use(
  cors({
    origin: "https://cookietry.netlify.app",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.cookie("hi", "hello", {
    sameSite: "none",
    secure: true,
  });
  res.set('Access-Control-Allow-Origin', 'http://cookiestry.netlify.com');
  res.send("done");
});

app.get("/cookies", (req, res) => {
  console.log(req.cookies);
  res.json(req.cookies);
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
