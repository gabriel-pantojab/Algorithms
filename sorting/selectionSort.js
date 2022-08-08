/*	SELECTION SORT
	Loop Invariant -> (para el segundo for)
		Los elementos array[0..i] siempre estan ordenados.
	Complex -> O(n^2)
*/
function selectionSort(array) {
	for(let i = 0; i < array.length - 1; i++) {
		let p = i;
		for(let j = i + 1; j < array.length; j++) {
			if(array[j] < array[p]) {
				p = j;
			}
		}
		let aux = array[i];
		array[i] = array[p];
		array[p] = aux;
	}
}