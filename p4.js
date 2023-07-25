/////////////////////////////	TOP K-FREQ ELEMENT /////////////////

let nums = [1, 1, 1, 2, 3, 3];
let k = 2;

let map = new Map();
let array = Array(nums.length + 1).fill(0);
let ans = [];

// building map
nums.forEach((number) => {
	let index = map.get(number) || 0;
	map.set(number, index + 1);
});

console.log(map);

// construct bucket
for (let [key, value] of map) {
	let bucket = array[value] || [];
	bucket.push(key);
	array[value] = bucket;
}

array.reverse();
for (let el of array) {
	if (k < 1) break;
	if (el) {
		for (let element of el) {
			if (k < 1) break;
			ans.push(element);
			k--;
		}
	}
}
console.log(ans);
