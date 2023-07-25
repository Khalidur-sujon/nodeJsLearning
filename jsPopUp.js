// let prompotBox = document.getElementById("prompt");
// let confirmBox = document.getElementById("confirm");

// function showAlert() {
// 	window.alert("Hello  Owner");
// }

// function showConfirm() {
// 	let text = "";
// 	if (window.confirm("Are you the owner?")) {
// 		text = "Yes";
// 	} else {
// 		text = "No";
// 	}
// 	confirmBox.innerHTML = text;
// }
// function showPrompt() {
// 	let text = "";
// 	let qstn = window.prompt("Name of the owner", "kariti minator");
// 	if (qstn == null || qstn == "") {
// 		text = "default owner";
// 	} else {
// 		text = qstn;
// 	}
// 	prompotBox.innerHTML = text;
// }

function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	let expires = "expires=" + d.toUTCString();

	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	//name=khalidur; namename=khalidur Rahman
	let name = cname + "=";
	let ca = document.cookie.split(";");

	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];

		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}

		if (c.indexOf(name) == 0) {
			return c.substring(name.length);
		}
	}
	return "";
}

function checkCookie(cname, exdays) {
	let name = getCookie(cname);
	if (name != "") {
		alert("Welcome " + name);
	} else {
		age = prompt("Enter your age");
		if (age != "" && age != null) {
			setCookie("age", age, 365);
		}
	}
}
