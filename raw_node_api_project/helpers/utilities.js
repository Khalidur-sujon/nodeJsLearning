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

utilities.createRandomString = (stringLength) => {
	let length = stringLength;
	length =
		typeof stringLength === "number" && stringLength > 0
			? stringLength
			: false;

	if (length) {
		let possibleChars = "qazwsxedcvfrtgbnhyujmkiolp;[-0987665443211";
		let output = "";
		for (let i = 0; i <= length; i++) {
			const randomChars = possibleChars.charAt(
				Math.floor(Math.random() * possibleChars.length)
			);
			output += randomChars;
		}

		return output;
	}
	return false;
};

// module export
module.exports = utilities;
