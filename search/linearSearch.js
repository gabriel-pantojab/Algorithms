/*
	LINEAR SEARCH
	Loop Invariant -> v no se encuentra en array[0..i-1]
	Complex -> O(n)
*/
function linearSearch(v, array) {
	for(let i = 0; i < array.length; i++) {
		if(v === array[i]) return i;
	}
	return -1;
}