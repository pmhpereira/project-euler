var init = new Date().getTime();

var tri = 0;
var min_divisors = 500;

triangle:
for(var i = 1; ; i++) {
	tri += i;

	var count = 0;
	var f = 1;

	var sqrt_tri = Math.floor(tri);
	for(f = 1; f <= Math.sqrt(tri); f++) {
		if(tri % f == 0) {
			count += 2;
		}

	}

	if(tri == sqrt_tri*sqrt_tri) {
		count--;
	}
	
	if(count > min_divisors) {
		console.log(tri);
		break triangle;
	}
}

var execution_time = (new Date().getTime() - init) / 1000;
console.log('executed in ' + execution_time + 's');
