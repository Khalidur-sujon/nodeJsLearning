// // console.log("what");

// // //let interestrate = 0.1;
// // const interestRate = 0.1;
// // interestrate = 1;
// // console.log(interestrate);

// /*
// data types ->
// 1. string
// 2. number
// 3. boolean
// 4. undefined
// 5. null

// */
// // let person = {
// // 	name: "john",
// // 	age: 25,
// // };
// // person.name = "aja";
// // person["name"] = "jkrouling";
// // console.log(person.name);

// // var x = 0;
// // {
// // 	let x = 2;
// // }

// // {
// // 	let x = 5;
// // }

// // console.log(x);

// //conditional operator
// // var a = 20;
// // var c = 20;

// // var v = a > c ? 200 : 300;
// // console.log(v);

// //TYPE OF

// // const myname = "john";
// // console.log(typeof myname);

// // var myName = "khalid";
// // var num1 = 10;
// // var num2 = "10";
// // if (num1 == num2) {
// // 	console.log("You are allowed");
// // } else {
// // 	console.log("You are not allowed");
// // }

// // var myAge = 21;
// // if ((myAge > 20)  (myAge < 60)) {
// // 	console.log("Young");
// // } else {
// // 	console.log("Old");
// // }

// // largest one from 3 Number
// // var a = 3;
// // var b = 8;
// // var c = 4;

// // var max = a;
// // if (max < b) {
// // 	max = b;
// // }

// // if (max < c) {
// // 	max = c;
// // }
// // console.log(max);

// // FOOR LOOP
// // for (var i = 0; i < 10; i++) {
// // 	console.log("Go " + i + " step");
// // }

// // // DO WHILE
// // console.log(" do While loop");
// // var i = 0;
// // do {
// // 	console.log("Go " + i + " step");
// // 	i += 1;
// // } while (i < 10);

// //WHILE
// // console.log("While loop");
// // var i = 0;
// // while (i < 10) {
// // 	console.log("Go " + i + " step");
// // 	i += 1;
// // }

// // var arrName = ["rahim", "karim", "faruq", "jobbar"];
// // arrName[15] = "kamrul";
// // arrName.push("ashfaq");
// // arrName.push("snsd");
// // arrName.pop();
// // arrName.unshift("Nauwali");
// // arrName.unshift("kijani");
// // arrName.shift();
// // console.log(arrName.splice(2, 2));
// // console.log(arrName);

// /*---------------Object..............*/

// /*
// var rahim = {
// 	fullname: "Rahim",
// 	age: 21,
// 	address: "Dhaka",
// 	job: "Job Holder",
// };
// rahim.zipcode = 34553;
// rahim.address = "Narsingdhi";
// rahim.welcomeMsg = function () {
// 	console.log("Hello there");
// };

// var arrObj = ["Mssd", rahim, "bangladesh"];

// console.log(arrObj[1].address);
// */

// //Function

// // function callMyName(name, callback) {
// // 	var myAge = 20;
// // 	callback(myAge);
// // 	console.log("Is it interesting? yes it is Mr. " + name);
// // }

// // function hello(age) {
// // 	console.log("I am passed through argument and my age is " + age);
// // }

// // callMyName("Khalidur", hello);

// // function welcomeMsg(name) {
// // 	console.log("Welcome Mr. " + name);
// // 	return function options(menu) {
// // 		console.log("Do You like " + menu + "Mr. " + name);
// // 	};
// // }
// // welcomeMsg("Khalidur")("Banaune");

// // function aFunc(a) {
// // 	console.log("Before changing the property: " + a.one);
// // 	a.one = "two";
// // 	console.log("After changing the property: " + a.one);
// // }

// // var a = {
// // 	one: "one",
// // };

// // aFunc(a);
// // console.log(a);

// /* Statement and Expression */

// /* DRY PRINCIPLE (  Don't repeat your self) */

// // function testing() {
// // 	let test = "DRY";
// // 	console.log(test + " " + age);
// // 	function seeVar() {
// // 		age = 20;
// // 		console.log("Previous value: " + test);
// // 	}
// // 	seeVar();
// // }
// // testing();

// // IIFE
// // (function demo(name) {
// // 	console.log("Helleooo Mr" + name);
// // })("khalid");

// // var controller = (function () {
// // 	var a = {
// // 		name: "khalidur ",
// // 		uid: 1062,
// // 	};
// // 	return a;
// // })();

// // var interface = (function () {
// // 	return "Hello " + controller.name;
// // })();

// // console.log(interface);

// // let country = "Bangladesh";

// // let sectence = `I love my country and the name is ${country}`;
// // console.log(sectence);

// // let a = "100";
// // let b = 10;
// // let z = a - b;
// // console.log(z);

// // Call back function
// // function aFunction(name, anotherFunc) {
// // 	let agee = 20;
// // 	anotherFunc(agee);
// // 	console.log(`Hello ${name}`);
// // 	anotherFunc(agee);
// // }
// // function myAge(age) {
// // 	console.log(`Age is: ${age}`);
// // }
// // aFunction("khalid", myAge);

// // let text = "my world";
// // let newText = text.replace("ole", "three");
// // console.log(newText);

// // let person = {
// // 	name: "khalidur",
// // 	s: [0, 20, "khad", 90],
// // };

// // console.log(person.s[3]);

// // let ar = ["ad", "cd ", "sd ", "jk"];
// // let ary = ar.toString();
// // console.log(ary);
// // console.log(Array.from(ary));

// // ar = ["ad", "cd ", "sd ", "jk"];
// // const ar;

// // console.log(ar);

// // let language = "javascript";
// // let text = "+";
// // for (x of language) {
// // 	text += x;
// // }
// // console.log(text);
// // "use strict";
// // let public = 100;
// // console.log(public);

// // let x = 20;
// // var x = 40;

// // x = 20;
// // console.log(x);
// // let x = 40;
// // console.log(x);

// // x = 20;
// // console.log(x);
// // const x;

// // function parentFunc() {
// // 	let counter = 0;
// // 	return function () {
// // 		counter++;
// // 		return counter;
// // 	};
// // }

// // const add = parentFunc();
// // let x = add();
// // let y = add();
// // let z = add();

// // let zz = parentFunc();
// // let final = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // var final1 = add();
// // console.log(final1);

// // let v = 10;
// // function printSomething() {
// // 	this.name = "sd ";
// // }
// // printSomething();

// // console.log(name + "sdf");

// // let person = {
// // 	name: "kad ",
// // 	msg: function () {
// // 		console.log(this.name);
// // 	},
// // 	anotherObj: {
// // 		name: "sd sdsfwe",
// // 		msg: function () {
// // 			console.log(this.name);
// // 		},
// // 	},
// // };

// // // person.anotherObj.msg.call(person);
// // const anotherFunc = person.anotherObj.msg.bind(person);
// // anotherFunc();

// // var karim = {
// // 	name: "karim Rahman",
// // 	dob: 1990,
// // 	age: function (currentYear) {
// // 		console.log(
// // 			this.name + " is " + (currentYear - this.dob) + " years old"
// // 		);
// // 	},
// // };

// // var rahim = {
// // 	name: "Rahim Abdu",
// // 	dob: 1990,
// // };

// // karim.age(2018);
// // karim.age.call(rahim, 2018);

// // let ar = [20, 30, 40, 50, 60, 70, 80];

// // console.dir(ar);

// // var Person = function (name, age, job) {
// // 	this.name = name;
// // 	this.age = age;
// // 	this.job = job;

// // 	this.printSome = function () {
// // 		console.log(this.name);
// // 	};
// // };

// // Person.prototype.dateOfBirth = function () {
// // 	console.log(this.name + " born in " + (2018 - this.age));
// // };
// // Person.prototype.address = "Bangladesh";

// // let zawad = new Person("zawad H", 30, "child");
// // zawad.dateOfBirth();
// // console.log(zawad.address);
// // zawad.printSome();

// // console.log("---------------------------------------------");

// // let Teacher = function (name, age, job, subject) {
// // 	Person.call(this, name, age, job);
// // 	this.subject = subject;
// // };

// // Teacher.prototype.address = "London";

// // let Atoyar = new Teacher("Atoyar Ali", 68, "Vautabaji", "Gurafera");
// // console.log(Atoyar.age);
// // Atoyar.printSome();
// // console.log(Atoyar.address);
// // "use strict";
// // let obj = {
// // 	name: "Atoyar Ali",
// // 	age: 28,
// // };
// // Object.preventExtensions(obj);
// // obj.job = "vanguri";
// // console.log(obj);
// // console.log(obj.job);

// // var person = {
// // 	name: "Zawad H",
// // 	age: 28,
// // 	address: "Bangladesh",
// // };

// // for (let x in person) {
// // 	console.log(person[x]);
// // }
// // console.log("------------------------");

// // const personArray = Object.values(person);
// // for (let x of personArray) {
// // 	console.log(x);
// // }

// /* Js Prototype
// 	Story */

// // Person.prototype = {
// // 	eat() {
// // 		console.log("This person is eating");
// // 	},
// // 	play() {
// // 		console.log("This person is playing");
// // 	},
// // 	sleep() {
// // 		console.log("This person is sleeping");
// // 	},
// // 	country: "Bangladesh",

// // 	run() {
// // 		console.log("This person is running");
// // 	},
// // };

// // class Person {
// // 	// let person = Object.create(Person.prototype);
// // 	constructor(name, age) {
// // 		this.name = name;
// // 		this.age = age;
// // 	}

// // 	eat() {
// // 		console.log("This person is eating");
// // 	}
// // 	play() {
// // 		console.log("This person is playing");
// // 	}
// // 	sleep() {
// // 		console.log("This person is sleeping");
// // 	}

// // 	run() {
// // 		console.log("This person is running");
// // 	}
// // }

// // let sakib = Person("sakib", 29);
// // let tamim = Person("Tamim", 27);

// // console.log(sakib.name);
// // console.log(tamim.age);
// // tamim.sleep();
// // console.log(sakib.country);
// // sakib.run();

// // console.log("-----------------------");

// // let ashiq = new Person("ashfaq", 54);
// // ashiq.sleep();
// // console.log(ashiq.age);

// // const num = 10;
// // for (const num = 0; num < 5; num++) {  // const value can not  be changed
// // 	console.log(num);
// // }
// // console.log(num);

// //IIFI
// // var msg = "hello hello";
// // (function aDemoFunc() {
// // 	var msg = "Hello Msg";
// // 	console.log(msg);
// // })();

// // aDemoFunc();

// // console.log(msg);

// // {
// // 	let a = 2;
// // 	let b = 3;
// // 	const pi = 3.1416;
// // 	console.log(a + b + pi);
// // }

// // console.log(a + b + pi);

// // {
// // 	let var1 = "hi";
// // 	const var2 = "hello";

// // 	console.log(`${var1} and ${var2}`);
// // }

// // {
// // 	var var3 = "Kaisa ho tum";
// // 	console.log("Hindi me :" + var3);
// // }

// // console.log("Hindi me :" + var3);

// // const name = "pikacuhr";
// // age = 34;
// // work = "student";

// // console.log(`My name is ${name} and I'm ${age} years old.
// // curretly I'm a ${work}	`);

// // const start = "My name is khan ";
// // console.log(start.startsWith("My"));
// // console.log(start.endsWith("han"));
// // console.log("----------");
// // console.log(start.includes("ame"));
// // console.log("----------");
// // console.log(start.repeat(5));
// // console.log("----------");

// // console.log(`I want to say ${`Alhamdulillah `.repeat(5)} !`);

// // console.log(`Why do you ${`do this `.repeat(2)} ?`);

// //Flat arrow function
// // var aFunc = function () {
// // 	console.log("A demo es5 function expressions");
// // };
// // aFunc();

// // var aFuncky = () => {
// // 	console.log("Flat arrow function demo");
// // };
// // aFuncky();

// // const dob = [1996, 1986, 2017, 1958];

// // const currentAge = dob.map(function (oneDob) {
// // 	return 2018 - oneDob;
// // });
// // console.log(currentAge);

// // const CurrentAge = dob.map((oneDob) => 2018 - oneDob);
// // console.log(CurrentAge);

// // const CurrentAge61 = dob.map((oneDob, index) => `${index}: ${2018 - oneDob}`);
// // console.log(CurrentAge61);

// // const lex5 = {
// // 	aFunc: function () {
// // 		console.log(this);
// // 		return function () {
// // 			console.log(this);
// // 		};
// // 	},
// // };

// // lex5.aFunc();

// // (() => console.log("My name is khalidur"))();

// //Destructuring
// // let person = {
// // 	name: "Khalidur",
// // 	age: 27,
// // 	address: "Baganbari",
// // };
// // let { name: personName, age, address } = person;
// // personName += " hello ";
// // console.log(personName);
// // console.log(age);
// // console.log(address);

// // let comObj = {
// // 	anotherObj: {
// // 		anotherNewObj: {
// // 			title: "javascript es6",
// // 		},
// // 	},
// // };

// // let {
// // 	anotherObj: {
// // 		anotherNewObj: { title: newTitle },
// // 	},
// // } = comObj;
// // console.log(newTitle);

// // Array
// // numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // for (const number of numbers) {
// // 	if (number === 5) break;
// // 	console.log(`Number Printed ${number}`);
// // }

// // //find 6
// // const findNum = numbers.map(function (number) {
// // 	return number === 6;
// // });

// // console.log(numbers[findNum.indexOf(true)]);

// // In ES6
// // let pos = numbers.findIndex((number) => number === 6);
// // console.log(pos);

// // let numbers = [1, 2, 3, 4, 6];

// // function calculate(a, b, c) {
// // 	console.log("Sum: " + (a + b + c));
// // }
// // calculate(...numbers);

// // let arr1 = [1, 2, 3, 4];
// // let arr2 = [5, 6, 7, 8];

// // let arr3 = [...arr1, ...arr2, ...arr1, ...arr3];
// // console.log(arr3);

// // let person = {
// // 	name: "zahid",
// // 	age: 38,
// // 	facilities: {
// // 		num1: "Knowledge",
// // 		num2: "power",
// // 	},
// // };

// // let {
// // 	facilities: { num2: p, num1: k },
// // } = person;

// // console.log(p);

// //rest parameters
// // function arguments5() {
// // 	for (let i = 0; i < arguments.length; i++) {
// // 		console.log("Argument passed: " + arguments[i]);
// // 	}
// // }
// // arguments5("d", "sd", "sd ", "ew");

// // const agrmuentsArr = (...arguments) => {
// // 	for (var i = 0; i < arguments.length; i++) {
// // 		console.log("Argument passed: " + arguments[i]);
// // 	}
// // };

// // const agrmuentsArr = (...arguments) => {
// // 	arguments.map((oneArgs) => console.log("Argument passed: " + oneArgs));
// // };

// // agrmuentsArr("d", "sd", "sd ", "ew");

// // default params
// // function defaultParams(name = "zunayed", age = 28) {
// // 	console.log(`My name is ${name} and I'am ${age} years old.`);
// // }

// // defaultParams("ad", 45);

// //MAP -> A NEW DATA STRACTURE OF JS
// // const zawad = new Map();
// // console.log(zawad);

// // zawad.set("fullname", "zawad ahmed");
// // zawad.set("age", 38);
// // zawad.set("fullname", "zawad ahmed");
// // zawad.set("fullnaome", "zidad ahmed");

// // console.log(zawad);
// // console.log(zawad.get("age"));
// // console.log(zawad.has("fullnaome"));
// // zawad.delete("fullnaome");
// // console.log(zawad);
// // console.log(zawad.size);

// // const favourite = new Map();
// // favourite.set("name", "zonayed ahmed");
// // favourite.set("job", "student");
// // favourite.set("color", "blue");
// // favourite.set("os", "ubuntu");

// // // favourite.forEach((value, key) =>
// // // 	console.log(`Key is: ${key} and value is: ${value}`)
// // // );

// // for (let [key, value] of favourite.entries()) {
// // 	console.log(`Key is: ${key} and value is: ${value}`);
// // }

// //////////////
// // arr = [10, 120, 30, 50, 40];

// // for (let [i, j] of arr.entries()) {
// // 	console.log(j);
// // }

// ////////////////////////////////////////////////////////////////
// // CLASS

// // class Person {
// // 	constructor(name, dob) {
// // 		this.name = name;
// // 		this.dob = dob;
// // 	}

// // 	currentAge() {
// // 		console.log(`${this.name} is ${2018 - this.dob} years old`);
// // 	}
// // }

// // const zawad = new Person("zawad", 42);

// // console.log(zawad.name);
// // zawad.currentAge();

// //////
// // class Person {
// // 	constructor(name, age, job) {
// // 		this.name = name;
// // 		this.age = age;
// // 		this.job = job;
// // 	}

// // 	personDetails() {
// // 		console.log(
// // 			`Name: ${this.name} , age: ${this.age} and job: ${this.job}`
// // 		);
// // 	}

// // 	static myMethod() {
// // 		console.log("Private method of this class");
// // 	}
// // }

// // class Teacher extends Person {
// // 	constructor(name, age, job, subject) {
// // 		super(name, age, job);
// // 		this.subject = subject;
// // 	}
// // }

// // const Mojid = new Teacher("Mojid Mia", 54, "teacher", "Biology");

// // console.log(Mojid.subject);
// // console.log(Mojid.age);
// // Mojid.personDetails();
// // Person.myMethod();

// //FLAT ARROW FUNCTIONS //////////////////////////////////
// // let number = (n) => n;
// // console.log(number(100));

// // let javascript = {
// // 	name: "javascript",
// // 	libraries: ["react", "angular", "vue"],
// // 	printLibraries: function () {
// // 		this.libraries.forEach((a) => {
// // 			console.log(`${this.name} love ${a}`);
// // 		});
// // 	},
// // };

// // javascript.printLibraries();

// // ---------------
// // let numbers = {
// // 	one: 1,
// // 	two: 1,
// // 	three: 1,
// // 	four: 1,
// // 	five: 1,
// // 	six: 1,
// // };

// // numbers[Symbol.iterator] = function () {
// // 	let n = 0;
// // 	let done = false;
// // 	return {
// // 		next() {
// // 			n += 10;
// // 			if (n == 100) done = true;
// // 			return {
// // 				value: n,
// // 				done: done,
// // 			};
// // 		},
// // 	};
// // };

// // for (let n of numbers) {
// // 	console.log(n);
// // }

// // for (let key in numbers) {
// // 	if (numbers.hasOwnProperty(key)) {
// // 		console.log(key + ": " + numbers[key]);
// // 	}
// // }

// // for (let [ke, value] of Object.entries(numbers)) {
// // 	console.log(ke + ": " + value);
// // }

// //////////////////////////////
// //////////////////////
// ////////////////////
// // Object.keys(numbers).forEach((key) => {
// // 	console.log(`key: ${key}, value: ${numbers[key]}`);
// // });
// //////////////////////////////
// //////////////////////
// ////////////////////
// // SET
// //////
// // const letters = new Set(["a", "b", "c", "d"]);

// // let text = "1";
// // letters.forEach((element) => {
// // 	text += element;
// // });
// // console.log(text);
// ////
// ////
// // Function .call()
// ////
// // const Person = {
// // 	fullname: function (age, address) {
// // 		return `${this.firstName} ${this.lastName} , age: ${age}, address: ${address}`;
// // 	},
// // };

// // const Person1 = {
// // 	firstName: "Kabr",
// // 	lastName: "sf",
// // };
// // const Person2 = {
// // 	firstName: "jabr",
// // 	lastName: "af",
// // };

// // console.log(Person.fullname.call(Person2, 38, "Devnogor"));

// ////////
// /////
// ////
// // let numbers = [10, 34, 2, 23423, 2334, 2399];

// // let rs = Math.max.apply(Math, [10, 34, 2, 23423, 2334, 2399]);
// // console.log(rs);
// /////////
// ////////////////////////////////
// // const Person1 = {
// // 	firstName: "Kabr",
// // 	lastName: "sf",
// // 	age: 38,
// // };

// // let keys = Object.keys(Person1);
// // let values = Object.values(Person1);

// // console.log(keys);
// // console.log(values);

// // keys.forEach((key) => {
// // 	console.log(`...........${Person1[key]}............`);
// // });
// /////////
// ////////////////////////////////
// // REDUCE
// /////////

// // let numbers = [1, 2, 3, 4, 5, 6];

// // let sum = numbers.reduce((a, b) => {
// // 	return a + b;
// // }, 0);

// // console.log(sum);

// ////////////////////////////////
// ////////////////////////////////
// ////////////////////////////////
// // TEMPLATE LITERAL
// ////////////////////////////////

// // function litModifier(strings, ...values) {
// // 	let m = strings.reduce((prev, curr) => {
// // 		return prev + curr + (values.length ? "Mr. " + values.shift() : "");
// // 	}, "");
// // 	return m;
// // }

// // var player1 = "Sakib";
// // var player2 = "Tamim";

// // console.log(litModifier`We have ${player1} and ${player2} in our team.`);

// ////////////////////////////////
// ////////////////////////////////
// ////////////////////////////////

// ////////////////////////////////

// // var numbers = [1, 2, 3, 4, 5];
// // var result = numbers.slice(-2, 4);
// // console.log(result);
// /////////
// // var numbers = [1, 2, 3, 4, 5];
// // var result = numbers.splice(1, 2, 10, 20, 30, 40, 50, 60, 70);
// // console.log(result);
// //////////
// // var numbers = [1, 2, 3, 4, 5];
// // var numbers1 = [1, 2, 3, 4, 5, 7];
// // var result = numbers.push(5, 9);
// // console.log(result);
// ////////////////////////////////
// // const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];

// // const sum = objects.reduce((prev, curr) => prev + curr.x, 0);
// // console.log(sum);

// /////////////////
// // higher order function
// ////////////////////////////////
// // let numbers = [1, 2, 3, 4];

// // let result = numbers.map((number) => number * number);

// // console.log(result);
// ////////////////////////////////
// // const language = ["javascript", "python", "swift", "C"];

// // function mapByMe(arr, fn) {
// // 	let newArray = [];

// // 	for (let i = 0; i < arr.length; i++) {
// // 		newArray.push(fn(arr[i]));
// // 	}

// // 	return newArray;
// // }

// // let resutl = mapByMe(language, function (language) {
// // 	return language.length;
// // });

// // console.log(resutl);
// ////////////////////////////////
// // let arr = [1, 2, 3, 5, 6];
// // let n = arr.pop();
// // console.log(arr);
// ////////////////////////////////
// // let arr = [1, 2, 3, 5, 6];

// // const newArr = arr.map((item) => item * item);
// // const newArr = arr.map(function (item) {
// // 	return item * item;
// // });
// // console.log(newArr);

// // // var jorArr = arr.filter(function (item) {
// // // 	return item % 2 === 0;
// // // });
// // var jorArr = arr.filter((item) => item % 2 === 0);
// // console.log(jorArr);

// /////////
// // let arr = [1, 2, 3, 5, 6];

// // let result = arr.reduce((prev, curr) => prev + curr, 0);
// // console.log(result);

// ////////////////////////////////
// // let arr = [1, 2, 3, 5, 6];
// // let arr1 = [1, 1, 1, 2];
// // console.log(arr1.every((item) => item === 1));
// ////////////////////////////////
// // const objEvery = [
// // 	{
// // 		name: "zawad",
// // 		age: 34,
// // 		job: "sdf",
// // 	},
// // 	{
// // 		name: "zawad",
// // 		age: 34,
// // 		job: "sdf",
// // 	},
// // 	{
// // 		name: "zawad",
// // 		job: "sdf",
// // 		age: 2,
// // 	},
// // 	{
// // 		name: "zawad",
// // 		age: 34,
// // 		job: "sdf",
// // 	},
// // ];

// // console.log(objEvery.every((obj) => obj.age));

// //////
// // const person = {
// // 	name: "John",
// // 	age: 21,
// // 	job: "stdnt",
// // };

// // console.log(person.name);
// // const personName = "name";

// // console.log(person[personName]);
// ////////////////////////////////
// // console.log(Math.random(10.23423, 20234));
// //////
// // const numbers = [1, 2, 3, 4, 5, 6];
// // console.log(...numbers);
// ////////////////////////////////
// ////////////////////////////////
// ////////  DATE //////////////////
// // const d = new Date();
// // d.setDate(15);
// // console.log(d.setDate(15));
// // console.log(d.toDateString());
// ///
// // console.log(typeof new Date());
// ////////////////////////////////
// /////TERNARY OPERATOR////////////////////////////////
// // let age = 16;

// // console.log(age > 17 ? "You not young" : "You are Young");
// ////////////////////////////////
// // findAuthor = (name, age) => {
// // 	console.log(`Age: ${age}`);
// // 	return name === "John" ? "This is the author" : "Some other person";
// // };

// // console.log(findAuthor("sdf", 23));
// ////////////////////////////////
// ////////////////////////////////
// // let successfull = () => console.log("Got Your email");

// // let email = "xyz@tre.com";

// // email ? successfull() : console.log("Provide a valid email address.");
// ///--------------------------------------------------------------///
// ///--------------------------------------------------------------///
// ///--------------------------------------------------------------///
// ///--------------------------------------------------------------///
// ////////////////////////////////
// ////////////////////////////////
// /////-------------------CALLBACK-------------------------------///
// // -> fn display
// // -> fn calculator

// // function display(some) {
// // 	console.log(some);
// // }

// // function calculator(num1, num2, callback) {
// // 	let sum = num1 + num2;

// // 	callback(sum);
// // }

// // calculator(1, 2, display);
// ////////
// //////////////////
// // console.log("step 1");

// // setTimeout(function () {
// // 	console.log("Step 2");
// // }, 2000);

// // console.log("step 3");
// ////////
// //////////////////
// // ------- Asynchronus Callback Example -------------//
// // ex :: course on udemy  : enroll -> progress -> getCertificate
// // let's start

// // const paymentSuccessfull = true;
// // const marks = 89;

// // function enroll(callback) {
// // 	console.log("Payment is processing...");

// // 	setTimeout(() => {
// // 		if (paymentSuccessfull) {
// // 			// go to next step
// // 			callback();
// // 		} else {
// // 			console.log("Payment unsuccessful");
// // 		}
// // 	}, 2000);
// // }

// // function progress(callback) {
// // 	console.log("Course on progress ...");

// // 	setTimeout(() => {
// // 		if (marks >= 80) {
// // 			// go to next step
// // 			callback();
// // 		} else {
// // 			console.log("You don't have enough marks to get the certificate");
// // 		}
// // 	}, 3000);
// // }

// // function getCertificate() {
// // 	console.log("Please wait ... Your certificate is processing...");

// // 	setTimeout(() => {
// // 		console.log("You got the certificate successfully. Thank You.");
// // 	}, 1000);
// // }

// // enroll(() => {
// // 	progress(getCertificate);
// // });

// ////////
// //////////////////
// //---------- Promise --------------//
// // let status = true;

// // console.log("Task - 1");

// // const promise = new Promise((resolve, reject) => {
// // 	setTimeout(() => {
// // 		if (status) {
// // 			resolve("Task - 2");
// // 		} else {
// // 			reject("Failed");
// // 		}
// // 	}, 2000);
// // });

// // console.log("Task - 3");

// // promise
// // 	.then((value) => {
// // 		console.log(value);
// // 	})
// // 	.catch((err) => {
// // 		console.log(err);
// // 	});

// /////////////
// ////////////////
// // --------- course enrollment using promise -------------//
// // const paymentSuccessfull = true;
// // const mark = 83;

// // enroll = () => {
// // 	console.log("Your payment is processing ...");

// // 	const promise = new Promise((resolve, reject) => {
// // 		setTimeout(() => {
// // 			if (paymentSuccessfull) {
// // 				resolve();
// // 			} else {
// // 				reject("Payment failed.");
// // 			}
// // 		}, 2000);
// // 	});
// // 	return promise;
// // };
// // progress = () => {
// // 	console.log("course on progress ...");

// // 	const promise = new Promise((resolve, reject) => {
// // 		setTimeout(() => {
// // 			if (mark >= 80) {
// // 				resolve();
// // 			} else {
// // 				reject(
// // 					"Your mark is too low. You can not get certificate at this time."
// // 				);
// // 			}
// // 		}, 3000);
// // 	});
// // 	return promise;
// // };
// // getCertificate = () => {
// // 	console.log("Your certificate is processing...");

// // 	const promise = new Promise((resolve, reject) => {
// // 		setTimeout(() => {
// // 			resolve(
// // 				"Congrats !! You have successfully achieved this certificate."
// // 			);
// // 		}, 1000);
// // 	});
// // 	return promise;
// // };

// // enroll()
// // 	.then(progress)
// // 	.then(getCertificate)
// // 	.then((value) => {
// // 		console.log(value);
// // 	})
// // 	.catch((err) => {
// // 		console.log(err);
// // 	});
// /////////////
// ////////////////
// // ----------- Async-await ---------------//
// // Recap course system using async-await
// //
// // ex: Course: enroll -> progress -> getCertificate
// // const paymentSuccessful = true;
// // const marks = 82;

// // enroll = () => {
// // 	console.log("Your payment is under process...");

// // 	const promise = new Promise((resolve, reject) => {
// // 		setTimeout(() => {
// // 			if (paymentSuccessful) {
// // 				resolve();
// // 			} else {
// // 				reject("You payment failed. Please try again.");
// // 			}
// // 		}, 2000);
// // 	});
// // 	return promise;
// // };

// // progress = () => {
// // 	console.log("Your course in progressing ...");

// // 	const promise = new Promise((resolve, reject) => {
// // 		setTimeout(() => {
// // 			if (marks >= 80) {
// // 				resolve();
// // 			} else {
// // 				reject(
// // 					"Your mark is too low. You can not get this certificate at this time."
// // 				);
// // 			}
// // 		}, 7000);
// // 	});
// // 	return promise;
// // };

// // getCertificate = () => {
// // 	console.log("Your certificate is processing...");

// // 	const promise = new Promise((resolve) => {
// // 		setTimeout(() => {
// // 			resolve("Congrats!! Here is your certificate");
// // 		}, 5000);
// // 	});

// // 	return promise;
// // };

// // course = async () => {
// // 	try {
// // 		await enroll();
// // 		await progress();
// // 		const message = await getCertificate();

// // 		console.log(message);
// // 	} catch (err) {
// // 		console.log(err);
// // 	}
// // };

// // course();
// ////////
// ////////////////////////////////////////////////////////////////
// // getVar = () => {
// // 	var x;
// // 	setTimeout(() => {
// // 		x = 12;
// // 	}, 3000);
// // 	return x;
// // };
// // var value = getVar();
// // console.log(value);
// // setTimeout(() => {
// // 	console.log(value);
// // 	console.log("sdf");
// // }, 4000);
// //////
// // getVar = () => {
// // 	var x;
// // 	setTimeout(() => {
// // 		console.log("After 3 sec..");
// // 		x = 12;
// // 		return x;
// // 	}, 3000);
// // };

// // var value = getVar();
// // console.log(value);
// ////////////
// ////////////////////////////////
// // getVar = () => {
// // 	var x;
// // 	const promise = new Promise((resolve, reject) => {
// // 		setTimeout(() => {
// // 			x = 12;
// // 			resolve(x);
// // 		}, 3000);
// // 	});
// // 	return promise;
// // };

// // getVar().then((value) => console.log(value));
// //////////////
// // console.log(typeof NaN);
// ////////////////////
// ////////////////////////////////////////////////////////////////
// // return multiple promise
// // const status = true;
// // const promise1 = new Promise((resolve, reject) => {
// // 	setTimeout(() => {
// // 		if (true) {
// // 			resolve("Promise 1 resolved.");
// // 		} else {
// // 			reject("Promise 1 error.");
// // 		}
// // 	}, 5000);
// // });
// // const promise2 = new Promise((resolve, reject) => {
// // 	setTimeout(() => {
// // 		if (status) {
// // 			resolve("Promise 2 resolved.");
// // 		} else {
// // 			reject("Promise 2 error.");
// // 		}
// // 	}, 5000);
// // });

// // Promise.all([promise1, promise2])
// // 	.then((dataArray) => {
// // 		console.log(dataArray);
// // 	})
// // 	.catch((error) => {
// // 		console.log(error);
// // 	});
// ///////////////
// /////////////////
// // ------------ Reallife example (promise)------------//////////
// // promsie -> name
// // promise(name) -> get age -> age

// // let getName = new Promise((resolve) => {
// // 	return resolve("Khalid");
// // });

// // let getAge = (name) => {
// // 	return new Promise((resolve, reject) => {
// // 		if (name === "Khalid") {
// // 			resolve(21);
// // 		} else {
// // 			reject("Not found");
// // 		}
// // 	});
// // };

// // const getMyDetails = async () => {
// // 	try {
// // 		const name = await getName;
// // 		const age = await getAge(name);
// // 		console.log(`My name is ${name} and I am ${age} years old.`);
// // 	} catch (err) {
// // 		console.log(err);
// // 	}
// // };

// // getMyDetails();
// /////////////////
// //////////////

// // const promise1 = new Promise((resolve, reject) => {
// // 	setTimeout(() => {
// // 		if (true) {
// // 			resolve("Promise 1 resolved");
// // 		} else {
// // 			reject("Promise 1 rejected");
// // 		}
// // 	}, 1000);
// // });

// // const promise2 = new Promise((resolve, reject) => {
// // 	setTimeout(() => {
// // 		if (true) {
// // 			resolve("Promise 2 resolved");
// // 		} else {
// // 			reject("Promise 2 rejected");
// // 		}
// // 	}, 1000);
// // });

// // console.log(
// // 	"Promise all returns: ",
// // 	Promise.all([promise1, promise2]).then((dataarray) =>
// // 		console.log(dataarray)
// // 	)
// // );
// //////////////
// ////////////////////////////////////////////////////////////////

// // const processOrder = () => {
// // 	console.log("Processing order for customer1");

// // 	setTimeout(() => {
// // 		console.log("Cooking Completed.");
// // 	}, 3000);

// // 	console.log("Processed order for customer1");
// // };

// // console.log("Take order for customer1");
// // processOrder();
// // console.log("Completed order for customer1");
// //////////////////////////////
// //////////////////
// ///////////////////  eX: making course system using callback, promise, aysnc-await /////////
// /////////////
// ////PROCESS - 1 (using normal functions)

// // const paymentSuccessful = true;
// // const marks = 81;

// // const enroll = () => {
// // 	console.log("Your payment is processing ....");

// // 	setTimeout(() => {
// // 		if (paymentSuccessful) {
// // 			console.log("Payment Successful");
// // 		} else {
// // 			console.log("Payment Failed");
// // 		}
// // 	}, 2000);
// // };
// // const progress = () => {
// // 	console.log("Course is progressing ....");

// // 	setTimeout(() => {
// // 		if (marks > 80) {
// // 			console.log("You will get the certificate");
// // 		} else {
// // 			console.log("Your marks is too low to get the certificate");
// // 		}
// // 	}, 3000);
// // };

// // const getCertificate = () => {
// // 	console.log("Your certificate is under process ....");

// // 	setTimeout(() => {
// // 		console.log("Congrats!! Here is your certificate");
// // 	}, 1000);
// // };

// // enroll();
// // progress();
// // getCertificate();
// ////////////////////////////////////////////////////////////////////////////////
// ////PROCESS - 2 (using callback functions)
// // const paymentSuccessful = true;
// // const marks = 53;

// // const enroll = (callback) => {
// // 	console.log("Your payment is processing ....");

// // 	setTimeout(() => {
// // 		if (paymentSuccessful) {
// // 			console.log("Payment Successful");
// // 		} else {
// // 			console.log("Payment Failed");
// // 		}
// // 		callback();
// // 	}, 2000);
// // };

// // const progress = (callback) => {
// // 	console.log("Course is progressing ....");

// // 	setTimeout(() => {
// // 		if (marks > 80) {
// // 			console.log("You will get the certificate");
// // 		} else {
// // 			console.log("Your marks is too low to get the certificate");
// // 		}
// // 		callback();
// // 	}, 3000);
// // };

// // const getCertificate = () => {
// // 	console.log("Your certificate is under process ....");

// // 	setTimeout(() => {
// // 		console.log("Congrats!! Here is your certificate");
// // 	}, 1000);
// // };

// // enroll(() => {
// // 	progress(getCertificate);
// // });
// ////////////////////////////////////////////////////////////////////////////////
// ////PROCESS - 3 (using PROMISE)
// // const paymentSuccessful = true;
// // const marks = 73;

// // const enroll = () => {
// // 	console.log("Your payment is processing ....");

// // 	return (promise = new Promise((resolve, reject) => {
// // 		setTimeout(() => {
// // 			if (paymentSuccessful) {
// // 				resolve("Payment Successful");
// // 			} else {
// // 				reject("Payment Failed");
// // 			}
// // 		}, 2000);
// // 	}));
// // };

// // const progress = () => {
// // 	console.log("Course is progressing ....");

// // 	return (promise = new Promise((resolve, reject) => {
// // 		setTimeout(() => {
// // 			if (marks > 80) {
// // 				resolve("You will get the certificate");
// // 			} else {
// // 				reject("Your marks is too low to get the certificate");
// // 			}
// // 		}, 3000);
// // 	}));
// // };

// // const getCertificate = () => {
// // 	console.log("Your certificate is under process ....");

// // 	return Promise.resolve("Congrats!! Here is your certificate");
// // };

// // // enroll()
// // // 	.then(progress)
// // // 	.then(getCertificate)
// // // 	.then((value) => console.log(value))
// // // 	.catch((err) => console.log(err));
// // ////////////////////////////////////////////////////////////////////////////////
// // ////PROCESS - 4 (using ASYNC-AWAIT)
// // const course = async () => {
// // 	try {
// // 		await enroll();
// // 		await progress();
// // 		const msg = await getCertificate();
// // 		console.log(msg);
// // 	} catch (err) {
// // 		console.log(err);
// // 	}
// // };

// // course();

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// // Another example
// const hasMeeting = false;

// const meeting = new Promise((resolve, reject) => {
// 	if (!hasMeeting) {
// 		const meetingDetails = {
// 			name: "technical meeting",
// 			location: "googel meet",
// 			time: "10:00 PM",
// 		};
// 		resolve(meetingDetails);
// 	} else {
// 		reject(new Error("Meeting already scheduled."));
// 	}
// });

// const addCalender = (meetingDetails) => {
// 	const calender = `${meetingDetails.name} was scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
// 	return Promise.resolve(calender);
// };

// const myMeeting = async () => {
// 	try {
// 		const meetingDetails = await meeting;
// 		const calender = await addCalender(meetingDetails);
// 		console.log(calender);
// 	} catch (err) {
// 		console.log(err.message);
// 	}
// };

// myMeeting();

//	USING MAP
// let nums = [2, 7, 11, 15];
// let target = 9;
// var twosum = (nums, target) => {
// 	var map = new Map();
// 	for (var i = 0; i < nums.length; i++) {
// 		var value = nums[i];
// 		var diff = target - value;

// 		if (map.has(diff)) {
// 			return [map.get(diff), i];
// 		} else {
// 			map.set(value, i);
// 		}
// 	}
// };

// console.log(twosum(nums, target));

// -----------------------------//
// using OBJECT
// let nums = [2, 7, 11, 15];
// let target = 9;
// var twosum = (nums, target) => {
// 	var map = {};
// 	for (var i = 0; i < nums.length; i++) {
// 		var value = nums[i];
// 		var diff = target - value;

// 		if (map[diff] !== undefined) {
// 			return [map[diff], i];
// 		} else {
// 			map[value] = i;
// 		}
// 	}
// };

// console.log(twosum(nums, target));
////////////
//////
//*10
//////////
