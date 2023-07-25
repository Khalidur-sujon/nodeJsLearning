let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

let anagrams = (strs) => {
	let map = new Map();
	for (let s of strs) {
		const array = new Array(26).fill(0);
		for (let i = 0; i < s.length; i++) {
			let asci = s.charCodeAt(i);
			array[asci - 97] += 1;
		}
		let key = array.join("-");

		if (map.has(key)) {
			map.get(key).push(s);
		} else {
			map.set(key, [s]);
		}
	}
	return [...map.values()];
};

console.log(anagrams(strs));
