const express = require("express");
const app = express();
const port =  process.env.PORT||2917;
const cors = require("cors");
const cookiesParser = require("cookie-parser");
app.use(express.json());
app.use(cookiesParser());
app.use(
  cors({
    origin: ["https://cookietry.netlify.app"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",req.headers.origin);
    next();
});
app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.cookie("hi", "hello", {
    sameSite: "none",
    secure: true,
  });
  res.send("done");
});

app.get("/cookies", (req, res) => {
  console.log(req.cookies);
  res.json(req.cookies);
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
