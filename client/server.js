const express = require("express");
var app = express();

const path = require("path");

app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "/html/index.html"));
});

app.listen(8080);
console.log("started app on 8080");