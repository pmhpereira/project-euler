var largest = 0;

for(var a = 999; a >= 100; a--) {
	for(var b = 999; b >= 100; b--) {
		var mul = a * b;

		if(mul > largest && is_palindrome(mul)) {
			largest = mul;
		};
	}
}

console.log(largest);

function is_palindrome(n) {
	n = '' + n;

	for(var i = 0; i < n.length / 2; i++) {
		if(n[i] != n[n.length - 1 - i]) {
			return false;
		}
	}

	return true;
}
