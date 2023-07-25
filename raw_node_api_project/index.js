// dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/environments");
const data = require("./lib/data");

// app object - module scaffolding
const app = {};

//testing file system
// data.create(
// 	"test",
// 	"newFile",
// 	{ name: "Bangaldesh", language: "bangla" },
// 	(err) => {
// 		console.log(`Error was ${err}`);
// 	}
// );

// data.read("test", "newFile", (error, data) => {
// 	console.log(error, data);
// });

// data.update(
// 	"test",
// 	"newFile",
// 	{ name: "Bangaldesh", language: "Beangli" },
// 	(err) => {
// 		console.log(`Error was ${err}`);
// 	}
// );

// data.delete("test", "newFile", (err) => {
// 	console.log(err);
// });

// create the server
app.createServer = () => {
	const server = http.createServer(app.handleReqRes);
	server.listen(environment.port, () => {
		console.log(`Listening to port ${environment.port}`);
	});
};

// handle req res
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
