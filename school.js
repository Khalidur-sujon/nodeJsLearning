const EventEmitter = require("events");

class School extends EventEmitter {
	startPeriod() {
		console.log("Class Started");

		// when class ends, raise an event
		setTimeout(() => {
			this.emit("belRing");
		}, 2000);
	}
}

module.exports = School;
