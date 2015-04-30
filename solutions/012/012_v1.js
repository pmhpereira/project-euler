var init = new Date().getTime();

var tri = 0;
var min_divisors = 500;

triangle:
for(var i = 1; ; i++) {
	tri += i;

	var count = 1;

	for(var f = 1; f <= tri / 2; f++) {
		if(tri % f == 0) {
			count++;
		}

		if(count > min_divisors) {
			console.log(tri);
			break triangle;
		}
	}
}

var execution_time = (new Date().getTime() - init) / 1000;
console.log('executed in ' + execution_time + 's');
