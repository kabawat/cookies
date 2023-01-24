const express = require("express");
const app = express();
const port = process.env.PORT || 2917;
const cors = require("cors");
const cookieParser = require('cookie-parser')
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("hello");
});
app.use(cors({
    origin: 'https://cookietrytwot.netlify.app',
    credentials: true,
  exposedHeaders: ["set-cookie"],
}));
app.post("/login", (req, res) => {
    res.cookie('myCookie', 'myValue', { 
        maxAge: 9000400, 
        httpOnly: true, 
    });
    res.status(200).send(req.body);
});

app.get("/getter", (req, res) => {
    if(!req.cookies){
    res.status(401).send("Error")
    }
    res.status(200).send("Cookies found")
});

app.get("/deleter", (req, res) => {
    if(!req.cookies){
    res.status(401).send("Error")
    }
    res.clearCookie('myCookie');
    res.status(200).send("Cookies Deleted")
});
app.listen(port, () => {
  console.log(`http://192.168.0.5:${port}`);
});
