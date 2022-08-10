/**
 * Quicksort
 * Invariant ->
 * Complex -> O(nlogn)
 */

function quickSort(A) {
	quickSortA(A, 0, A.length - 1);
	return A;
}

function quickSortA(A, p, r) {
	let q;
	if(p < r) {
		q = partition(A, p, r);
		quickSortA(A, p, q - 1);
		quickSortA(A, q + 1, r);
	}
}

function partition(A, p, r) {
	let i, pivot;
	i = p - 1;
	pivot = A[r];
	for(let j=p; j<r; j++) {
		if(A[j] < pivot) {
			i++;
			let aux = A[i];
			A[i] = A[j];
			A[j] = aux;
		}
	}
	let aux = A[i + 1];
	A[i + 1] = A[r];
	A[r] = aux;
	return i + 1;
}


function tail_recursion_quickSort(A, p, r) {
	let q;
	while(p < r) {
		q = partition(A, p, r);
		tail_recursion_quickSort(A, p, q - 1);
		p = q + 1;
	}
	return A;
}