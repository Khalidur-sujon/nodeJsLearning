const express = require("express");
const multer = require("multer");
const path = require("path");

const UPLOAD_FOLDER = "./uploads/";

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, UPLOAD_FOLDER);
	},
	filename: (req, file, cb) => {
		// rename the origanal file
		const fileExt = path.extname(file.originalname);
		const fileName =
			file.originalname
				.replace(fileExt, "")
				.toLocaleLowerCase()
				.split(" ")
				.join("-") +
			"-" +
			Date.now();

		cb(null, fileName + fileExt);
	},
});

// prepare multer object to upload file
const upload = multer({
	storage: storage,

	fileFilter: (req, file, cb) => {
		if (
			file.mimetype === "image/jpeg" ||
			file.mimetype === "image/jpg" ||
			file.mimetype === "image/png"
		) {
			cb(null, true);
		} else {
			cb(new Error("invalid file format."));
		}
	},
});

const app = express();

app.post("/", upload.single("avatar"), (req, res) => {
	res.send("hello client");
});

app.use((err, req, res, next) => {
	if (err) {
		if (err instanceof multer.MulterError) {
			res.status(500).send("There was an upload error");
		} else {
			res.status(500).send(err.message);
		}
	} else {
		res.send("Success");
	}
});

app.listen(3000, (req, res) => {
	console.log("Server is running at port 3000");
});
