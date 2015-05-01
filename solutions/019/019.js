var init = new Date().getTime();

var base_year = 1900;
var first_of_base_year = 2;

var min_year = 1901;
var max_year = 2001;

var specific_weekday = 1;
var total_days = 0;
var total_specific_weekday = 0;

var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function is_leap_year(year) {
	return (year % 400 == 0 || (year % 100 > 0 && year % 4 == 0));
}

function days_in_year(year) {
	var days = 365;	

	if(is_leap_year(year)) {
		days++;
	}

	return days;
}

function days_between_years(min_y, max_y) {
	var days = 0;

	for(var year = min_y; year < max_y; year++) {
		days += days_in_year(year);
	}

	return days;
}

var first_of_min_year = (first_of_base_year + days_between_years(base_year, min_year)) % 7;

if(first_of_min_year == specific_weekday) {
	total_specific_weekday = 1;
}
else {
	total_specific_weekday = 0;
}

var current_weekday = first_of_min_year;

for(var year = min_year; year < max_year; year++) {
	for(var month = 1; month <= 12; month++) {
		current_weekday += months[month - 1];

		if(month == 2 && is_leap_year(year)) {
			current_weekday++;
		};

		current_weekday = (current_weekday % 7);

		if(current_weekday == specific_weekday) {
			total_specific_weekday++;
		}
	}
}

if(current_weekday == specific_weekday) {
	total_specific_weekday--;
}

console.log(total_specific_weekday);

var execution_time = (new Date().getTime() - init) / 1000;
console.log('executed in ' + execution_time + 's');
