const http = require("http");

// create a server
const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.write("hello coderss.........");
		res.write("   this awesome.");
		res.end();
	} else if (req.url === "/about") {
		res.write("This is about page     .");
		res.write("hello coderss.........");
		res.write("   this awesome.");
		res.end();
	} else {
		res.write("Not Found");
		res.end();
	}
});

// listen to a port
server.listen(2121);

console.log("Your server is running...");
