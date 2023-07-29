const express = require("express");
const multer = require("multer");

const app = express();

const UPLOAD_FOLDER = "./fileUpload/upload";

//prepare the final multer upload objeect
const upload = multer({
	dest: UPLOAD_FOLDER,
});

app.post("/", upload.single("avatar"), (req, res) => {
	res.send("Hello client");
});

app.listen(3000, () => {
	console.log("Server is running at port 3000");
});
