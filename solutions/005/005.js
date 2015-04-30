it: 
for(var i = 1; ; i++) {
	for(var d = 1; d <= 20; d++) {
		if(i % d != 0) {
			continue it;
		}
	}

	console.log(i);
	break;
}