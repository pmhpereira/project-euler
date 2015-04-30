var init = new Date().getTime();

var num = 600851475143;

for(var p = 3; ;) {
	if(is_prime(p)) {
		if(num % p == 0) {
			num = num / p;

			if(num == 1) {
				console.log(p);
				break;
			}

			continue;
		}
	}

	p += 2;
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
