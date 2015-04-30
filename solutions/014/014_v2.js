var init = new Date().getTime();

var max_number = 1e6;
var longest_seq = 0;
var longest_seq_starter = 0;
var seq_lengths = [];

for(var s = 1; s < max_number; s++) {
	var num = s;
	var seq = 0;

	it:
	while(num != 1) {
		seq++;

		if(seq_lengths[num]) {
			seq += seq_lengths[num];
			break it;
		}

		if(num % 2 == 0) {
			num = num / 2;
		}
		else {
			num = 3*num + 1;
		}
	}

	seq_lengths[s] = seq;

	if(seq > longest_seq) {
		longest_seq = seq;
		longest_seq_starter = s;
	}
}

console.log(longest_seq_starter);

var execution_time = (new Date().getTime() - init) / 1000;
console.log('executed in ' + execution_time + 's');
