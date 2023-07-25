const jsonString = '{"name":"john", "birth":"1986-12-14", "city":"New York"}';

console.log(jsonString);

//convert json to js object

//convert birth to original date obj
///// ------ way -1

// const myObj = JSON.parse(jsonString);
// console.log(new Date(myObj.birth));

/// ----- way -2
const myObj = JSON.parse(jsonString, (key, value) => {
	if (key === "birth") {
		return new Date(value);
	}
	if (key === "city") {
		return value.toUpperCase();
	}

	if (key === "name") {
		const str = value;
		const reName = str.charAt(0).toUpperCase() + str.slice(1);
		value = reName;
		return value;
	}
	return value;
});

console.log(myObj);

const person = {
	name: "khalid",
	age: 27,
	caulcula: function () {
		console.log("hello");
	},
};

console.log(JSON.stringify(person));
