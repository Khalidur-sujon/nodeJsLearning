// dependency
const mathLibrary = require("./lib/math");
const quoteLibrary = require("./lib/quotes");

//app-object -  module scaffolding
const app = {};

// configuration
app.config = {
	timeBetweenQuotes: 1000,
};

// function that prints a random quote
app.printQuote = function printQuote() {
	const allQuotes = quoteLibrary.allQuotes();

	const numberOfQuotes = allQuotes.length;

	const randomNumber = mathLibrary.generateRandomNumber(1, numberOfQuotes);

	const selectedQuote = allQuotes[randomNumber - 1];
	console.log(selectedQuote);
};

// infinte loop
app.infinteLoop = function indefinteLoop() {
	setInterval(app.printQuote, app.config.timeBetweenQuotes);
};

// invoke the app
app.infinteLoop();
