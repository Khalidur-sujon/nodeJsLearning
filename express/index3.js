//  EXPRESS -> REQUEST

const express = require("express");

const app = express();

app.use(express.json());

const adminRoute = express.Router();

app.use("/admin", adminRoute);

adminRoute.get("/dashboard", (req, res) => {
	// console.log(req.baseUrl);
	// console.log(req.url);
	// console.log(req.originalUrl);
	// console.log(req.path);
	// console.log(req.method);
	// console.log(req.protocol);
	console.log(req.get("content-type"));

	res.send("This is get from the admin");
});

app.get("/user/:id", (req, res) => {
	// console.log(req.originalUrl);
	// console.log(req.url);
	// console.log(req.baseUrl);
	// console.log(req.path);
	// console.log(req.hostname);
	// console.log(req.ip);
	// console.log(req.method);
	// console.log(req.params);
	// console.log(req.query.filter);
	// console.log(req.body.lan);
	// console.log(req.accepts("json"));
	res.send("This is get from app");
});

app.listen(3000, () => {
	console.log("server is running at port 3000");
});
