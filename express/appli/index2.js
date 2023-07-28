const express = require("express");

const app = express;

app.get("/", (req, res) => {
	res.send("This is get response");
});

app.post("/", (req, res) => {
	res.send("This is post response");
});

app.listen(3000, () => {
	console.log("server is running at 3000 port");
});
