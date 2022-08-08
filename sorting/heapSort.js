/**
 * HEAP SORT
 * Loop Invariant ->
 * Complex -> O(nlogn)
 */

 function HEAP_SORT(A) {
	let heap = BUILD_MAX_HEAP(A);
	let array = heap.heap;
	for(let i = A.length - 1; i >= 1; i--) {
		let aux = array[0];
		array[0] = array[i];
		array[i] = aux;
		heap.heap_size--;
		max_heapify_i(array, 0, heap.heap_size);
	}
	return array;
}


//**********************************************************************************************//
/**
 * MAX HEAP
 */

 function left(i) {
	//indexado desde 1
	//return 2 * i;
	//indexado desde 0
	return 2 * (i+1) - 1;
}

function right(i) {
	//indexado desde 1
	//return 2 * i + 1;
	//indexado desde 0
	return 2 * (i+1);
}

function parent(i) {
	//indexado desde 1
	return Math.floor(i / 2);
}

//max heapify recursively
function MAX_HEAPIFY(A, i, n) {
	let LEFT, RIGHT, LARGEST;
	LEFT = left(i);
	RIGHT = right(i);
	if(LEFT < n && A[LEFT] > A[i]) {
		LARGEST = LEFT;
	}else {
		LARGEST = i;
	}
	if(RIGHT < n && A[RIGHT] > A[LARGEST]) {
		LARGEST = RIGHT;
	}
	if(LARGEST != i) {
		let aux = A[i];
		A[i] = A[LARGEST];
		A[LARGEST] = aux;
		MAX_HEAPIFY(A, LARGEST, n);
	}
}

//max heapify iteratively
function max_heapify_i(A, i, n) {
	let LEFT, RIGHT, LARGEST;
	LARGEST = i;
	do{
		LEFT = left(i);
		RIGHT = right(i);
		if(LEFT < n && A[LEFT] > A[i]) {
			LARGEST = LEFT;
		}else {
			LARGEST = i;
		}
		if(RIGHT < n && A[RIGHT] > A[LARGEST]) {
			LARGEST = RIGHT;
		}
		if(LARGEST != i) {
			let aux = A[i];
			A[i] = A[LARGEST];
			A[LARGEST] = aux;
			i = LARGEST;
			LARGEST = -1;
		}
	}while(LARGEST != i);
}

function BUILD_MAX_HEAP(array) {
	let A = {
		heap_size : array.length,
		heap : [...array]
	}
	for(let i = Math.floor(array.length / 2); i >= 0; i--) {
		//MAX_HEAPIFY(A.heap, i, A.heap_size);
		max_heapify_i(A.heap, i, A.heap_size);
	}
	return A;
}