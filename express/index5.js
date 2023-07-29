//// EXPRESS -> RESPONSE

const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/test", (req, res) => {
	res.send("Hello");
});

app.get("/about", (req, res) => {
	// res.cookie("name", "Bangaldeshiiii");
	// res.end();

	res.set("Title", "MyPlatform");
	console.log(res.get("Title"));
	res.send("Peyecho?");
});

app.listen(3000, () => {
	console.log("Server is running at port 3000");
});
