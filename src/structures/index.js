const BotClient = require("./BotClient");
const https = require("https")
const Command = require("./Command");
const CommandCategory = require("./CommandCategory");
const BaseContext = require("./BaseContext");
// Package Always On 
const express = require("express")
const app = express()

app.get("/", (req, res) => {
	res.send("hello World")
	
})

app.listen(3000, () => {
	console.log("project ready")
})
//
module.exports = {
  BaseContext,
  BotClient,
  Command,
  CommandCategory,
};
