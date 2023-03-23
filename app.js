"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

const { createProxyMiddleware } = require("http-proxy-middleware");

var PORT = process.env.PORT || 4000;

var app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hi, Cyberpack!");
});

app.use(
  "/api/:username",
  createProxyMiddleware({
    target: "https://api.mojang.com/users/profiles/minecraft/",
    changeOrigin: true,
    pathRewrite: { "^/api": "" },
  })
);

app.get("/:username", (req, res) => {
  const { username } = req.params;
  var BASE_URL = `https://api.mojang.com/users/profiles/minecraft/`;
});

app.listen(PORT, function () {
  console.log("Fieldbook proxy listening on port %s.", PORT);
});
