// module scoffolding
const environments = {};

environments.stagging = {
	port: 3000,
	envName: "stagging",
	secretKey: "sdhf23lk2l4h2lh",
	twilio: {
		fromPhone: "+15392142495",
		accountSid: "AC41d5831feec40bb2a973a6cb401e8ff2",
		authToken: "4063108399c373f237107684cf5b8f76",
	},
};

environments.production = {
	port: 5000,
	envName: "production",
	secretKey: "248()(*)(ksjdflkjdf",
	twilio: {
		fromPhone: "+15392142495",
		accountSid: "AC41d5831feec40bb2a973a6cb401e8ff2",
		authToken: "4063108399c373f237107684cf5b8f76",
	},
};

//determine which environment was passed
const currentEnvironment =
	typeof process.env.NODE_ENV === "string"
		? process.env.NODE_ENV
		: "stagging";

//export corresponding enviroment object

const environmentToExport =
	typeof environments[currentEnvironment] === "object"
		? environments[currentEnvironment]
		: environments.stagging;

//export module
module.exports = environmentToExport;
