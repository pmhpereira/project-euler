var init = new Date().getTime();

var sum_sq = 0;
var sq_sum = 0;

for(var i = 1; i <= 100; i++) {
	sum_sq += i*i;
	sq_sum += i;
}

sq_sum = sq_sum * sq_sum;

console.log(sq_sum - sum_sq);

var execution_time = (new Date().getTime() - init) / 1000;
console.log('executed in ' + execution_time + 's');
