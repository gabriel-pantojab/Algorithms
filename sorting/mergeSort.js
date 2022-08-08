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