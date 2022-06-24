const areaConsole = document.getElementById("console");

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
let l1 = [3,1,4,2,5,6];
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
let l3 = [-1,3,2,4,56,1,5,6,1,2];
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

let lista = [-1,3,2,4,56,1,5,6,1,2];
console.log("MERGE SORT");
console.log("Desordenado:",lista);
mergeSort(lista,0,lista.length-1);
console.log("Ordenada:",lista);
console.log();

//**********************************************************************************************//



