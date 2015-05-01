var init = new Date().getTime();

var factorial = '';

var nums = [];

var total = '1';
var carry = 0;
var factorial = 100;

for(var fact = 1; fact < factorial; fact++) {
	nums = [];
	var carry = 0;

	for(var i = 0; i < fact + 1; i++) {
		nums.push(total);
	}

	total = '';

	for(var i = nums[0].length - 1; i >= 0; i--) {
	    var partial_total = carry;
	    
	    for(var n = 0; n < nums.length; n++) {
	        partial_total += +nums[n][i];
	    }
	    
	    carry = Math.floor(partial_total / 10);
	    partial_total = partial_total % 10;
	    
	    total = '' + partial_total + total;
	}

	total = '' + (carry || '') + total;
}

var sum = 0;
for(var i = 0; i < total.length; i++) {
	sum += +total[i];
}

console.log(sum);

var execution_time = (new Date().getTime() - init) / 1000;
console.log('executed in ' + execution_time + 's');
