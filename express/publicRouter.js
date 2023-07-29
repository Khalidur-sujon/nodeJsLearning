const express = require("express");

const publicRoute = express.Router();

// const log = (req, res, next) => {
// 	console.log("I am logging");
// 	next();
// };

// publicRoute.all("*", log);

// const publicRouteParam = (req, res, next, id) => {
// 	if (id === "12") {
// 		req.user = id;
// 		next();
// 	} else {
// 		res.sendStatus(403);
// 	}
// };

// publicRoute.param("user", publicRouteParam);

// publicRoute.get("/:user", (req, res) => {
// 	console.log(req.user);
// 	res.send(`Hello ${req.user}`);
// 	// res.send("Home page");
// });

// publicRoute.get("/about/:user", (req, res) => {
// 	res.send(`Hello ${req.user}`);
// });

// publicRoute
// 	.route("/user")
// 	.all((req, res, next) => {
// 		console.log("I am logging");
// 		next();
// 	})
// 	.get((req, res) => {
// 		res.send("get");
// 	})
// 	.put((req, res) => {
// 		res.send("put");
// 	})
// 	.delete((req, res) => {
// 		res.send("delete");
// 	})
// 	.post((req, res) => {
// 		res.send("post");
// 	});

publicRouteParam = (req, res, next, id) => {
	if (id === "khalid") {
		req.user = id;
		next();
	} else {
		res.sendStatus(403);
	}
};

publicRoute.param("user", publicRouteParam);

publicRoute.get("/about/:user", (req, res) => {
	res.send(`Hello ${req.user}`);
});

//export module
module.exports = publicRoute;
