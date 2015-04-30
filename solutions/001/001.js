var init = new Date().getTime();

var result = 0;

for(var i = 0;  i < 1000; i++) {
	if(i % 3 == 0 || i % 5 == 0) {
		result += i;
	}
}

console.log(result);

var execution_time = (new Date().getTime() - init) / 1000;
console.log('executed in ' + execution_time + 's');
