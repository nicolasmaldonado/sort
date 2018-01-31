//S T A R T   Q U I C K S O R T

function quicksort(a) {
    return qs(a, 0, a.length - 1)
}

function qs(a, primero, ultimo) {
    var i = primero;
    var j = ultimo;
    var central = (primero + ultimo) / 2;
    var pivote = a[central | 0];
    do {
        while (a[i] < pivote) i++;
        while (a[j] > pivote) j--;
        if (i <= j) {
            aux = a[i];
            a[i] = a[j];
            a[j] = aux;
            i++;
            j--;
        }
    } while (i <= j);

    if (primero <= j)
        qs(a, primero, j);

    if (i < ultimo)
        qs(a, i, ultimo);

    return a;
}

//E N D   Q U I C K S O R T



//S T A R T   H E A P S O R T

function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max])
        max = left;

    if (right < array_length && input[right] > input[max])
        max = right;

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];
    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapsort(input) {

    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)
        heap_root(input, i);

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
        heap_root(input, 0);
    }
}

//E N D   H E A P S O R T



//B U T T O N S   E V E N T S   L I S T E N E R S

document.getElementById("qs-button").addEventListener('click', function () {
    var arr = document.getElementById("arr").value.split(' ').map(Number);
    var t0 = performance.now();
    for (let i = 0; i < 1000; i++)
        arr = quicksort(arr);
    var t1 = performance.now();
    document.getElementById("result").textContent = arr.join(' ');
    document.getElementById("performance").textContent = (t1 - t0) + ' ms (ran 1000 times)';
});

document.getElementById("hs-button").addEventListener('click', function () {
    var arr = document.getElementById("arr").value.split(' ').map(Number);
    var t0 = performance.now();
    for (let i = 0; i < 1000; i++)
        heapsort(arr);
    var t1 = performance.now();
    document.getElementById("result").textContent = arr.join(' ');
    document.getElementById("performance").textContent = (t1 - t0) + ' ms (ran 1000 times)';
});