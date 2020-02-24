module.exports = function towelSort (matrix) {
	if(matrix){
		var temp;
		var newarrey = [];

		for (var i = 0; i < matrix.length; i++) {
			if(i % 2){
				matrix[i].reverse();
			}
		}
		for (var i = 0; i < matrix.length; i++) {
			if(typeof(matrix[i]) == 'object'){
				for (var b = 0; b < matrix[i].length; b++) {
					newarrey.push(matrix[i][b]);
				}
			}else{
				newarrey.push(matrix[i][b]);
			}
		}
		return newarrey;
	}else{
		return [];
	}
}
