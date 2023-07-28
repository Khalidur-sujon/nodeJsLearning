///// EXPRESS -> MIDDLEWARE
const express = require("express");

const app = express();

const adminRoute = express.Router();

/// when a middleware takes somes data, then it will be called configuarable middleware
const middleWareWrapper = (options) => {
	return (req, res, next) => {
		if (options.log) {
			console.log(
				`${new Date(Date.now()).toLocaleString()}  - ${req.method} - ${
					req.originalUrl
				}- ${req.ip} - ${req.protocol}`
			);
			next();
		} else {
			throw new Error("This is an error.");
		}
	};
};

adminRoute.use(middleWareWrapper({ log: true }));

adminRoute.get("/dashboard", (req, res) => {
	res.send("This is get from adminRoute");
});

app.use("/admin", adminRoute);

app.get("/about", (req, res) => {
	res.send("This is get method from app");
});

const errMiddleware = (err, req, res, next) => {
	console.log(err.message);
	res.status(500).send("There was an server side error.");
};

adminRoute.use(errMiddleware);

app.listen(3000, () => {
	console.log("Server is running at port 3000");
});
