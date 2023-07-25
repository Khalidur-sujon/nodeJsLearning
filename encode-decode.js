let strs = ["neet", "code"];

// encode and decode
var encode = (strs, encodeArray = []) => {
	for (let str of strs) {
		let code = getCode(str);
		let encoding = `${code}${str}`;

		encodeArray.push(encoding);
	}
	return encodeArray.join("");
};

let getCode = (str) => {
	return str.length.toString(2).padStart(8, "0");
};

let encodingStrs = encode(strs);
console.log(encodingStrs);

let decode = (strss, decodeArray = []) => {
	for (
		let left = 0, right = left + 8, length = 0;
		left < strss.length;
		left = right + length, right = left + 8
	) {
		let countString = strss.slice(left, right);
		length = parseInt(countString, 2);

		let decodeSts = strss.slice(right, right + length);
		decodeArray.push(decodeSts);
	}
	return decodeArray;
};

let decodedString = decode(encodingStrs);
console.log(decodedString);
