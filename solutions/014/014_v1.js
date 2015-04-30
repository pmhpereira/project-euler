var init = new Date().getTime();

var max_number = 1e6;
var longest_seq = 0;
var longest_seq_starter = 0;

for(var s = 1; s < max_number; s++) {
	var num = s;
	var seq = 0;

	while(num != 1) {
		seq++;

		if(num % 2 == 0) {
			num = num / 2;
		}
		else {
			num = 3*num + 1;
		}
	}

	if(seq > longest_seq) {
		longest_seq = seq;
		longest_seq_starter = s;
	}
}

console.log(longest_seq_starter);

var execution_time = (new Date().getTime() - init) / 1000;
console.log('executed in ' + execution_time + 's');
