/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    // base case
	if (num1 === "0" || num2 === "0") {
		return "0";
	}
	let arr = [];
	let iter = 0;
	for (let j = num2.length - 1; j >= 0; j--) {
		let carry = 0;
		let temp = new Array(num1.length + iter).fill(0);
		for (let i = num1.length - 1; i >= 0; i--) {
			let mul = (num2[j] - "0") * (num1[i] - "0") + carry;
			temp[i] = mul % 10;
			carry = Math.floor(mul / 10);
		}
		if(carry > 0) {
			temp.unshift(carry);
		}
		arr.push(temp.slice());
		iter += 1;
	}
	// result stores all the intermediate multiplication results
	// Now add all of them
	let result = [];
	const last = arr[arr.length - 1].slice();
	let carry = 0;
	for(let i = 0; i < last.length; i++) {
		let sum = carry;
		for(let a of arr) {
			if(a.length === 0) continue;
			sum += a.pop();
		}
		carry = Math.floor(sum / 10);
		result.unshift(sum % 10);
	}
    if(carry > 0) {
		result.unshift(carry);
	}

	return result.reduce((acc, el) => acc + el, '');
};
