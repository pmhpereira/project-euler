var init = new Date().getTime();

var width = 20;
var height = 20;

var matrix = [];

for(var y = 0; y <= height; y++) {
	var row = [];

	for(var x = 0; x <= width; x++) {
		row.push(0);
	}

	matrix.push(row);
}

for(var y = height; y >= 0; y--) {
	for(var x = width; x >= 0; x--) {
		if(x == width && y == height) {
			matrix[x][y] = 0;
		}
		else if(x == width) {
			matrix[y][x] = 1;
		}
		else if(y == height) {
			matrix[y][x] = 1;
		}
		else {
			matrix[y][x] = matrix[y+1][x] + matrix[y][x+1];
		}
	}	
}

console.log(matrix[0][0]);

var execution_time = (new Date().getTime() - init) / 1000;
console.log('executed in ' + execution_time + 's');
