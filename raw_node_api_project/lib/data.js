// dependencies
const fs = require("fs");
const path = require("path");

// module scoffolding
const lib = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, "/../.data/");

// write data to file
lib.create = (dir, file, data, callback) => {
	// open file for writing
	fs.open(
		`${lib.basedir + dir}/${file}.json`,
		"wx",
		(err, fileDescriptor) => {
			if (!err && fileDescriptor) {
				// convert data to string
				const stringData = JSON.stringify(data);

				// write data to file and then close it
				fs.writeFile(fileDescriptor, stringData, (err2) => {
					if (!err2) {
						fs.close(fileDescriptor, (err3) => {
							if (!err3) {
								callback(false);
							} else {
								callback("Error closing the new file.");
							}
						});
					} else {
						callback("Error writing to new file");
					}
				});
			} else {
				callback("Could not create new file, it may already exits");
			}
		}
	);
};

lib.read = (dir, file, callback) => {
	fs.readFile(`${lib.basedir + dir}/${file}.json`, "utf-8", (error, data) => {
		callback(error, data);
	});
};

lib.update = (dir, file, data, callback) => {
	// file open for updating
	fs.open(
		`${lib.basedir + dir}/${file}.json`,
		"r+",
		(err, fileDescriptor) => {
			if (!err && fileDescriptor) {
				const stringData = JSON.stringify(data);

				//truncate the file
				fs.ftruncate(fileDescriptor, (err1) => {
					if (!err1) {
						fs.writeFile(fileDescriptor, stringData, (error) => {
							if (!error) {
								// close the file
								fs.close(fileDescriptor, (err2) => {
									if (!err2) {
										callback(false);
									} else {
										callback("Error closing file");
									}
								});
							} else {
								callback("Error writing file");
							}
						});
					} else {
						callback("Error truncating file");
					}
				});
			} else {
				callback("Error updating. File may not Exits");
			}
		}
	);
};

lib.delete = (dir, file, callback) => {
	fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
		if (!err) {
			callback(false);
		} else {
			callback("Error deleting file");
		}
	});
};

// export module
module.exports = lib;
