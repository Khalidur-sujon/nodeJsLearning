const http = require("http");

// create a server
const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.write(`<html><head><title>Form</title></head>`);
		res.write(
			`<body><form method="post" action="/process"><input name="message"/></form></body>`
		);
		res.end();
	} else if (req.url === "/process" && req.method === "POST") {
		const body = [];
		req.on("data", (chunk) => {
			body.push(chunk);
		});

		req.on("end", () => {
			console.log("stream finished");
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);
			res.write("Thank you for submitting");
			res.end();
		});
	} else {
		res.write("Not Found");
		res.end();
	}
});

// listen to a port
server.listen(2121);

console.log("Your server is running...");

//////////////////////
/////////////////////

// const fs = require("fs");
// const { dirname } = require("path");

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, "utf8");

// ourReadStream.on("data", (data) => {
// 	console.log(data);
// });

// console.log("hello");
