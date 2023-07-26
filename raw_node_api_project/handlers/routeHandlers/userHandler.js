const data = require("../../lib/data");
const { hash } = require("../../helpers/utilities");
const { parseJSON } = require("../../helpers/utilities");
const tokenHandler = require("./tokenHandler");

const handler = {};

handler.userHandler = (requestProperties, callback) => {
	const acceptedMethods = ["get", "post", "put", "delete"];
	if (acceptedMethods.indexOf(requestProperties.method) > -1) {
		handler._user[requestProperties.method](requestProperties, callback);
	} else {
		callback(405);
	}
};

handler._user = {};

handler._user.post = (requestProperties, callback) => {
	const firstName =
		typeof requestProperties.body.firstName === "string" &&
		requestProperties.body.firstName.trim().length > 0
			? requestProperties.body.firstName
			: false;
	const lastName =
		typeof requestProperties.body.lastName === "string" &&
		requestProperties.body.lastName.trim().length > 0
			? requestProperties.body.lastName
			: false;
	const phone =
		typeof requestProperties.body.phone === "string" &&
		requestProperties.body.phone.trim().length === 11
			? requestProperties.body.phone
			: false;
	const password =
		typeof requestProperties.body.password === "string" &&
		requestProperties.body.password.trim().length > 0
			? requestProperties.body.password
			: false;
	const toAgreement =
		typeof requestProperties.body.toAgreement === "boolean" &&
		requestProperties.body.toAgreement
			? requestProperties.body.toAgreement
			: false;

	if (firstName && lastName && phone && password && toAgreement) {
		// make sure the user doesn't already exists
		data.read("users", phone, (err1) => {
			if (err1) {
				const userObject = {
					firstName,
					lastName,
					phone,
					password: hash(password),
					toAgreement,
				};

				// store the user to db
				data.create("users", phone, userObject, (err2) => {
					if (!err2) {
						callback(200, {
							error: "User was created successfully.",
						});
					} else {
						callback(500, { error: "Could not create user" });
					}
				});
			} else {
				callback(500, { error: "There was a problem is server side!" });
			}
		});
	} else {
		callback(400, { error: "You have a problem in your request" });
	}
};
handler._user.get = (requestProperties, callback) => {
	// check the phone number is valid
	const phone =
		typeof requestProperties.queryStringObject.phone === "string" &&
		requestProperties.queryStringObject.phone.trim().length === 11
			? requestProperties.queryStringObject.phone
			: false;
	console.log(phone);
	if (phone) {
		// authenticate--> verify token
		let token =
			typeof requestProperties.headersObject.token === "string"
				? requestProperties.headersObject.token
				: false;

		tokenHandler._token.verify(token, phone, (tokenId) => {
			if (tokenId) {
				data.read("users", phone, (err, u) => {
					const user = { ...parseJSON(u) };
					if (!err && user) {
						delete user.password;
						callback(200, user);
					} else {
						callback(404, { error: "Requested user not found" });
					}
				});
			} else {
				callback(403, { error: "Authentication error." });
			}
		});
	} else {
		callback(404, { error: "Requested user not found here" });
	}
};
handler._user.put = (requestProperties, callback) => {
	const firstName =
		typeof requestProperties.body.firstName === "string" &&
		requestProperties.body.firstName.trim().length > 0
			? requestProperties.body.firstName
			: false;
	const lastName =
		typeof requestProperties.body.lastName === "string" &&
		requestProperties.body.lastName.trim().length > 0
			? requestProperties.body.lastName
			: false;
	const phone =
		typeof requestProperties.body.phone === "string" &&
		requestProperties.body.phone.trim().length === 11
			? requestProperties.body.phone
			: false;
	const password =
		typeof requestProperties.body.password === "string" &&
		requestProperties.body.password.trim().length > 0
			? requestProperties.body.password
			: false;
	if (phone) {
		if (firstName || lastName || password) {
			// verify token
			let token =
				typeof requestProperties.headersObject.token === "string"
					? requestProperties.headersObject.token
					: false;

			tokenHandler._token.verify(token, phone, (tokenId) => {
				if (tokenId) {
					// lookup the user
					data.read("users", phone, (err1, uData) => {
						const userData = { ...parseJSON(uData) };
						if (!err1 && userData) {
							if (firstName) {
								userData.firstName = firstName;
							}
							if (lastName) {
								userData.lastName = lastName;
							}
							if (password) {
								userData.password = hash(password);
							}

							//store to database
							data.update("users", phone, userData, (err2) => {
								if (!err2) {
									callback(200, {
										message:
											"User was successfully updated.",
									});
								} else {
									callback(500, {
										erro: "Internal server error.",
									});
								}
							});
						} else {
							callback(400, {
								error: "You have a problem in your request",
							});
						}
					});
				} else {
					callback(403, { error: "Authentication error." });
				}
			});
		} else {
			callback(400, { error: "You have a problem in your request" });
		}
	} else {
		callback(400, { error: "Invalid phone number" });
	}
};
handler._user.delete = (requestProperties, callback) => {
	const phone =
		typeof requestProperties.queryStringObject.phone === "string" &&
		requestProperties.queryStringObject.phone.trim().length === 11
			? requestProperties.queryStringObject.phone
			: false;
	if (phone) {
		//verify token
		let token =
			typeof requestProperties.headersObject.token === "string"
				? requestProperties.headersObject.token
				: false;

		tokenHandler._token.verify(token, phone, (tokenId) => {
			if (tokenId) {
				data.read("users", phone, (err1, userData) => {
					if (!err1 && userData) {
						data.delete("users", phone, (err2) => {
							if (!err2) {
								callback(200, {
									message: "User was successfully deleted!",
								});
							} else {
								callback(500, {
									error: "Internal server error",
								});
							}
						});
					} else {
						callback(500, { error: "Internal server error" });
					}
				});
			} else {
				callback(403, { error: "Authentication error." });
			}
		});
	} else {
		callback(400, { error: "You have a problem in your request" });
	}
};

module.exports = handler;
