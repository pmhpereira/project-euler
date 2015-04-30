var init = new Date().getTime();

var max_prime = 2e6;
var sum = 2;

for(var p = 3; p < max_prime; p += 2) {
	if(is_prime(p)) {
		sum += p;
	}
}

console.log(sum);

function is_prime(n) {
	for(var f = 3; f <= Math.sqrt(n); f += 2) {
		if(n % f == 0) {
			return false;
		}
	}

	return true;
}

var execution_time = (new Date().getTime() - init) / 1000;
console.log('executed in ' + execution_time + 's');
