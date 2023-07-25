const crypto = require("crypto");
const enviroments = require("./environments");
const utilities = {};

utilities.parseJSON = (jsonString) => {
	let outPut;

	try {
		outPut = JSON.parse(jsonString);
	} catch {
		outPut = {};
	}

	return outPut;
};

utilities.hash = (str) => {
	if (typeof str === "string" && str.length > 0) {
		const hash = crypto
			.createHash("sha256", enviroments.secretKey)
			.update(str)
			.digest("hex");

		return hash;
	}
	return false;
};

// module export
module.exports = utilities;
