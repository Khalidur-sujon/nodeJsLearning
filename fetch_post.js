async function change_myselect(sel) {
	let x;
	const dbParams = JSON.stringify({ table: sel, limit: 20 });
	const response = await fetch(
		"https://www.w3schools.com/js/json_demo_html_table.php",
		{
			method: "POST",
			headers: {
				"Content-type": "application/x-www-form-urlencoded",
			},
			body: "x=" + dbParams,
		}
	);

	const myObj = await response.json();

	text = "<table border='1'";

	for (x in myObj) {
		text += "<tr><td>" + myObj[x].name + "</td><tr>";
	}

	text += "</table>";

	document.getElementById("demo").innerHTML = text;
}
