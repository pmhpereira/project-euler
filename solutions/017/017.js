var init = new Date().getTime();

var min_number = 1;
var max_number = 1000;

var convertions = [
	['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
	['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
	['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
];

function number_to_phrase(num) {
	var num = '' + num;
	var places = [];

	for(var i = 0; i < num.length; i++) {
		places.push(+num[i]);
	}

	places.reverse();

	var phrase = '';

	if(places.length == 1) {
		phrase = convertions[0][places[0]];
	}
	else {
		if(places[1] == 1) {
			phrase = convertions[1][places[0]] + phrase;
		}
		else {
			phrase = (places[1] >= 2 ? convertions[2][places[1]] + (places[0] > 0 ? '-': '') : '')  + (places[0] > 0 ? '' + convertions[0][places[0]] : '') + (phrase ? ' ' + phrase : '');
		}

		if(places[2] > 0) {
			phrase = convertions[0][places[2]] + ' hundred' + (phrase ? ' and ' + phrase : '');
		}

		if(places[3] > 0) {
			phrase = convertions[0][places[3]] + ' thousand' + (phrase ? ' and ' + phrase : '');
		}
	}

	return phrase;
}

var count = 0;

for(var i = min_number; i <= max_number; i++) {
	var phrase = number_to_phrase(i);
	phrase = phrase.replace(/[\s-]/g, '');

	count += phrase.length;
}

console.log(count);

var execution_time = (new Date().getTime() - init) / 1000;
console.log('executed in ' + execution_time + 's');