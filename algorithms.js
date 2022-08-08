
const areaConsole = document.getElementById("console");
const randomArray = new Array(20);
for(let i = 0; i < randomArray.length; i++) {
		randomArray[i] = Math.floor(Math.random() * 30);
}


/*
	INSERT SORT

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
let l1 = [3,1,4,2,5,6,-1,7,-2];
console.log("INSERTION SORT");
console.log("Desordenado:",l1);
insertionSort(l1);
console.log("Ordenada:",l1);
console.log();

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
let l2 = [3,1,4,2,5,6];
console.log("LINEAR SEARCH")
console.log("Lista:",l2);
console.log("Elemento a buscar:",2);
console.log("Posicion:",linearSearch(2,l2));
console.log();


/*
	SELECTION SORT
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
let l3 = [3,1,4,2,5,6,-1,7,-2];
console.log("SELECTION SORT");
console.log("Desordenado:",l3);
selectionSort(l3);
console.log("Ordenada:",l3);
console.log();

/*
	MERGE SORT

	Loop Invariant -> 	(Para el for que va desde k=p a k<=r)
		La subsecuencia A[p..k-1] siempre contiene los (k - p) elementos,
		que son los elementos más pequeños de las secuencias L y R.
		Tambien los elementos L[i] y R[j] son los más pequeños de ambas secuencias.

	Complex -> O(nlg(n))
*/
var INF = 999999999;
function merge(A,p,q,r) {
	let n1 = q - p + 1;
	let n2 = r - q;
	let L = new Array(n1+1);
	let R = new Array(n2+1);
	for(let i = 0; i < n1; i++) {
		L[i] = A[p+i];
	}
	for(let j = 0; j < n2; j++) {
		R[j] = A[q+j+1]; 
	}

	L[n1] = INF;
	R[n2] = INF;
	let i = 0, j = 0;
	for(let k = p; k <= r; k++) {
		if(L[i] <= R[j]) {
			A[k] = L[i];
			i++;
		}else{
			A[k] = R[j];
			j++;
		}
	}
}

function mergeSort(A,p,r) {
	if(p < r) {
		let q = Number.parseInt((p+r) / 2);
		mergeSort(A,p,q);
		mergeSort(A,q+1,r);
		merge(A,p,q,r);  
	}
}

let lista = [...randomArray];
console.log("MERGE SORT");
console.log("Desordenado:",lista);
console.time("Merge Sort");
mergeSort(lista,0,lista.length-1);
console.timeEnd("Merge Sort");
console.log("Ordenada:",lista);
console.log();

/**
 *  INSERT SORT RECURSIVO
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
let l4 = [3,1,4,2,5,6,-1,7,-2];
console.log("INSERTION SORT RECURSIVO");
console.log("Desordenado:",l4);
insertionSortR(l4,l4.length);
console.log("Ordenada:",l4);
console.log();

/**
 *  BINARY SEARCH
 *  Loop Invariant
 *  Complex -> O(lg(n))
 * 
 *  La lista debe estar ordenada.
 */
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
let l5 = [1,2,3,4,5,6];
console.log("BINARY SEARCH")
console.log("Lista:",l5);
console.log("Elemento a buscar:",5);
console.log("Posicion:",binarySearchR(5,l5));
console.log();

/**
 *  BUBBLE SORT
 *  Loop Invariant ->
 *  Complex -> 
 */
function bubbleSort(array) {
	for(let i = 0; i < array.length - 1; i++) {
		for(let j = array.length - 1; j > i; j--) {
			if(array[j] < array[j - 1]) {
				array[j]   = array[j] + array[j-1];
				array[j-1] = array[j] - array[j-1];
				array[j]   = array[j] - array[j-1];
			}
		}
	}
}
let l6 = [...randomArray];
console.log("BUBBLE SORT");
console.log("Desordenado:",l6);
console.time("Bubble Sort");
bubbleSort(l6);
console.timeEnd("Bubble Sort");
console.log("Ordenada:",l6);
console.log();
//**********************************************************************************************//

/**
 *  FIND MAXIMUM SUBARRAY
 *  Loop Invariant -> 
 *  Complex -> O(nlogn)
 */

const array = [13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7];
//const array = [1,-5,4,-3,6,2,-12,7,8,2,-10,6,9]

function find_max_crossing_subarray(A, low, mid, high) {
	let max_left, max_right;
	let left_sum = Number.MIN_VALUE;
	let sum = 0;	
	for(let i = mid; i >= low; i--) {
		sum += A[i];
		if(sum > left_sum) {
			left_sum = sum;
			max_left = i;
		}
	}
	let right_sum = Number.MIN_VALUE;
	sum = 0;
	for(let j = mid + 1; j <= high; j++) {
		sum += A[j];
		if(sum > right_sum) {
			right_sum = sum;
			max_right = j;
		}
	}
	return {max_left, max_right, sum:left_sum + right_sum};
}

function find_maximun_subarrray(A, low, high) {
	if(high == low) 
		return {max_left:low, max_right:high, sum:A[low]};
	else {
		let mid = Math.floor((low + high) / 2);
		let left = find_maximun_subarrray(A, low, mid);
		let right = find_maximun_subarrray(A, mid + 1, high);
		let cross = find_max_crossing_subarray(A, low, mid, high);
		if(left.sum >= right.sum && left.sum >= cross.sum) return left;
		else if(right.sum >= left.sum && right.sum >= cross.sum) return right;
		else return cross;
	}
}

console.log("FIND MAXIMUM SUBARRAY");
console.log("Array:",array);
const res = find_maximun_subarrray(array,0,array.length-1);
console.log("Subarray:");
console.log("Maximo:",res.sum);
console.log("Inicio:",res.max_left);
console.log("Fin:",res.max_right);
console.log();

/**
 *  FIND MAXIMUM SUBARRAY BRUTE FORCE
 *  Loop Invariant ->
 *  Complex -> O(n^2)
 */
function find_maximun_subarray_bt(A) {
	let max_left, max_right, max_sum;
	max_sum = Number.MIN_VALUE;
	let current_sum = 0;
	for(let i=0; i < A.length; i++) {
		current_sum = 0;
		for(let j=i; j < A.length; j++) {
			current_sum += A[j];
			if(current_sum > max_sum) {
				max_sum = current_sum;
				max_left = i;
				max_right = j;
			}
		}
	}
	return {max_left, max_right, max_sum};
}

console.log("FIND MAXIMUM SUBARRAY BRUTE FORCE");
console.log("Array:",array);
const res2 = find_maximun_subarray_bt(array);
console.log("Subarray:");
console.log("Maximo:",res2.max_sum);
console.log("Inicio:",res2.max_left);
console.log("Fin:",res2.max_right);
console.log();

/**
 *  FIND MAXIMUM SUBARRAY GREEDY
 *  Loop Invariant ->
 *  Complex -> O(n)
 */

function find_maximun_subarray_greedy(A) {
	let max_left, max_right, max_sum, j;
	j = 0;
	max_sum = Number.MIN_VALUE;
	let current_sum = 0;
	for(let i=0; i < A.length; i++) {
		current_sum += A[i];
		if(current_sum > max_sum) {
			max_sum = current_sum;
			max_right = i;
			max_left = j;
		}
		//Criterio greedy
		if(current_sum < 0) {
			current_sum = 0;
			j = i + 1;
		}
	}
	return {max_left, max_right, max_sum};
}

console.log("FIND MAXIMUM SUBARRAY GREEDY");
console.log("Array:",array);
const res3 = find_maximun_subarray_greedy(array);
console.log("Subarray:");
console.log("Maximo:",res3.max_sum);
console.log("Inicio:",res3.max_left);
console.log("Fin:",res3.max_right);
console.log();


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

const a = [4,1, 3, 2, 16, 9, 10, 14, 8, 7];
let heap = BUILD_MAX_HEAP(a);
console.log("array:",a);
console.log("Max heap:",heap.heap);
console.log();

//**********************************************************************************************//

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
let l7 = [...randomArray];
console.log("HEAP SORT");
console.log("Array:",l7);
const res4 = HEAP_SORT(l7);
console.log("Array:",res4);
console.log();
