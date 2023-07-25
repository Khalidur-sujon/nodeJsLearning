// module scoffolding
const environments = {};

environments.stagging = {
	port: 3000,
	envName: "stagging",
	secretKey: "sdhf23lk2l4h2lh",
};

environments.production = {
	port: 5000,
	envName: "production",
	secretKey: "248()(*)(ksjdflkjdf",
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
