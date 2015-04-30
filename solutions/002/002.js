var result = 0;

var n = 2, n_1 = 1;

for(;  n <= 4e6; ) {
	if(n % 2 == 0) {
		result += n;
	}

	var aux_n = n;
	n += n_1;
	n_1 = aux_n;
}

console.log(result);