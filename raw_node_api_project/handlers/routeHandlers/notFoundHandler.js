const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
	callback(500, {
		message: "Your url is not found.",
	});
};

module.exports = handler;
