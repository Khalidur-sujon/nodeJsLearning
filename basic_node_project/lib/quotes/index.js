// dependencies
const fs = require("fs");

// quote object - module scaffolding
const quotes = {};

// get all the quotes
quotes.allQuotes = function allQuotes() {
	const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, "utf8");

	const arrayOfQuotes = fileContents.split(/\r?\n/);

	return arrayOfQuotes;
};

// export the library
module.exports = quotes;
