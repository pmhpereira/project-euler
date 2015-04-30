var init = new Date().getTime();

var i = 1;
it: 
for(i = 1; ; i++) {
	for(var d = 1; d <= 20; d++) {
		if(i % d != 0) {
			continue it;
		}
	}

	console.log(i);
	break;
}

var execution_time = (new Date().getTime() - init) / 1000;
console.log('executed in ' + execution_time + 's');
