const express = require("express");
const app = express();
const port = process.env.port || 8000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hrtgdf");
});

app.listen(port, () => {
    console.log("serv");
});