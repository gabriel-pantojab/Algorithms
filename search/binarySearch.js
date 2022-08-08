/**
 *  BINARY SEARCH
 *  Loop Invariant
 *  Complex -> O(lg(n))
 * 
 *  La lista debe estar ordenada.
 */

// Binary Search Iterative
 function binarySearchI(v, array) {
	let a,b,m;
	a = 0;
	b = array.length - 1;
	while(a < b) {
		m = Math.floor((a+b)/2);
		if(array[m] < v) a = m + 1;
		else b = m;
	}
	return array[a] === v ? a : -1;
}

// Binary Search Recursive

function binarySearchR(v, array) {
	return binarySearchRA(v,array,0,array.length-1);
}
function binarySearchRA(v, A, a, b) {
	if(a < b) {
		let m = Math.floor((a+b)/2);
		if(A[m] < v) {
			return binarySearchRA(v,A,m+1,b);
		}
		else return binarySearchRA(v,A,a,m);
	}
	return A[a] === v ? a : -1;
}