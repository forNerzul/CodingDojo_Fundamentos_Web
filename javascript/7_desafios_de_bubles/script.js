// 1. imprimir impares 1-20
for ( var i = 1; i <= 20; i++) {
    if ( i % 2 != 0) {
        console.log(i)
    }
}

// 2. Disminuir multiplos de 3
for ( var i = 100; i > -1; --i) {
    if ( i % 3 == 0) {
        console.log(i)
    }
}

// 3. Imprime la secuencia
var secuencia = [4, 2.5, 1, -0.5, -2, -3.5]
for (var i = 0; i < secuencia.length; i++) {
    console.log(secuencia[i]);
}

// 4. Sigma
var sum = 0;
for (var i = 0; i <= 100; i++) {
    sum+=i;
}
console.log(sum);

// 5. Factorial
var product = 1;
for ( var i = 1; i <= 12; i++) {
    product *= i;
}
console.log(product);