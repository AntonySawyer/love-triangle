/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	let count = 0;
	for (let i = 0; i < preferences.length; i++) {
/* firstPosition - starts with 1, second and third positions = first and second values*/
		const firstValue = preferences[i];
		const secondValue = preferences[firstValue - 1];
		const thirdValue = preferences[secondValue - 1];
		const egoCondition = firstValue != i + 1;
		const secondCondition = thirdValue == i + 1 && firstValue != secondValue;
/* check conditions and rewrite to exclude re-use */
		if (egoCondition && secondCondition) {
			count ++;
			preferences[i] = 0;
		}
	}
	return count;
};
