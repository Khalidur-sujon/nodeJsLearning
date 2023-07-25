// const fs = require("fs");

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
// const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// // ourReadStream.on("data", (chunk) => {
// // 	ourWriteStream.write(chunk);
// // });

// // write buffer using pipe method

// ourReadStream.pipe(ourWriteStream);

// console.log("Hello");

/// read and write buffer using httt request-response
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
	const ourReadStream = fs.createReadStream(
		`${__dirname}/bigdata.txt`,
		"utf-8"
	);
	ourReadStream.pipe(res);
});

server.listen(2121);

console.log("server is running");
