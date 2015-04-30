var init = new Date().getTime();

for(var c = 1000; c >= 1; c--) {
	for(var b = c; b >= 1; b--) {
		for(var a = b; a >= 1; a--) {
			if(a + b + c == 1000 && a*a + b*b == c*c) {
				console.log(a*b*c);
				break;
			}
		}
	}
}

var execution_time = (new Date().getTime() - init) / 1000;
console.log('executed in ' + execution_time + 's');
