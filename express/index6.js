//// EXPRESS -> RESPONSE

const express = require("express");
const publicRoute = require("./publicRouter");

const app = express();

app.use("/", publicRoute);

app.listen(3000, () => {
	console.log("Server is running at port 3000");
});
