/*
	INSERTION SORT

	Loop Invariant -> (para el while)
		Los elementos array[0..i-1] siempre estan ordenados.

	Complex -> O(n^2)
*/

function insertionSort(array) {
	for(let i = 1; i <  array.length; i++) {
		let key = array[i];
		let j = i-1;
		while(j >= 0 && array[j] > key) {
			array[j+1] = array[j];
			j--;
		}
		array[j+1] = key;
	}
}

/**
 *  INSERTION SORT RECURSIVO
 */
 function insertionSortR(array,n) {
	if(n > 1) {
		insertionSortR(array,n-1);
		insert(n-1,array);
	}
}

function insert(n, array) {
	let p = n-1;
	let key = array[n]
	while(p >= 0 && array[p] > array[n]) {
		array[p+1] = array[p]
		p--;
	}
	array[p+1] = key;
}