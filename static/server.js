const express = require("express");
var app = express();

const path = require("path");

app.use("/public", express.static("public"));

app.listen(8081);
console.log("started app on 8081");