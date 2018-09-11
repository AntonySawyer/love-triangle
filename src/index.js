/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var count = 0;
	for (var i = 0; i < preferences.length; i++) {
/* firstPosition - starts with 1, second and third positions = first and second values*/
		var firstValue = preferences[i]; 
		var secondValue = preferences[firstValue - 1];  
		var thirdValue = preferences[secondValue - 1]; 
		var firstPosition = i + 1; 

		if (firstValue != 0 && secondValue != 0 && thirdValue != 0 
			&& thirdValue == firstPosition 
			&& firstPosition != firstValue && firstValue != secondValue) {
			count ++;
/* rewrite to exclude re-use (first line in if statment) */
			preferences[firstPosition-1] = 0;
			preferences[firstValue-1] = 0;
			preferences[secondValue - 1] = 0;
		}			
	}
	return count;
};
