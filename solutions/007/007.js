var init = new Date().getTime();

var nth_prime = 10001;
var count = 1;

for(var p = 3; ; p += 2) {
	if(is_prime(p)) {
		count++;

		if(count == nth_prime) {
			console.log(p);
			break;
		}
	}
}

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
