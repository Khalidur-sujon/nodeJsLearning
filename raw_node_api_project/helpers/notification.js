// dependencies
const https = require("https");
const { twilio } = require("./environments");

// module scaffolind
const notification = {};

notification.sendTwilioSms = (phone, sms, callback) => {
	const userPhone =
		typeof phone === "string" && phone.trim().length === 11
			? phone.trim()
			: false;

	const userMessage =
		typeof sms === "string" &&
		sms.trim().length > 0 &&
		sms.trim().length < 1600
			? sms.trim()
			: false;

	if (userPhone && userMessage) {
		const payLoad = {
			From: twilio.fromPhone,
			To: `+88${userPhone}`,
			Body: userMessage,
		};

		const payLoadStringify = JSON.stringify(payLoad);

		//configure the request details
		const requestDetails = {
			hostname: "api.twilio.com",
			method: "POST",
			path: `2010-04-01/Accounts/${twilio.accountSid}/Messages.json`,
			auth: `${twilio.accountSid}:${twilio.authToken}`,
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		};

		// instantiate request objectt
		const req = https.request(requestDetails, (res) => {
			const status = res.statusCode;

			if (status === 200 || status === 201) {
				callback(false);
			} else {
				callback(`Status code was ${status}`);
			}
		});

		req.on("error", (e) => {
			callback(e);
		});
		req.write(payLoadStringify);
		req.end();
	} else {
		callback("Given params is missing or invalid.");
	}
};

// module export
module.exports = notification;
