//-------------------------------------------------- Método Flat
    // Nos devuelve una submatriz aplanada. Recibe cómo argumento el nivel de profundidad a aplanar en la matriz.

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));


//-------------------------------------------------- Flat Map
    // Mapear cada elemento, pasarle una función y aplanarlo según el resultado.

let array = [1,2,3,4,5]

console.log(array.flatMap(value => [value, value * 2]));


//-------------------------------------------------- Trim
    // Eliminar los espacios en blanco de un String

let hello = '                hello world'
console.log(hello);

console.log(hello.trimStart());

let hello = 'hello world          '
console.log(hello);
console.log(hello.trimEnd());


//-------------------------------------------------- Optional Catch Biding
    // Podemos pasar de forma opcional el parametro de error al catch.

try {

} catch {
    error
}


//-------------------------------------------------- fromEntries
    // Transforma clave valor en un objeto

let entries = [["name", "Hector"], ["age", 27]]
console.log(Object.fromEntries(entries))


//-------------------------------------------------- Objeto tipo Simbolo
    // Permite acceder a una descripción

let mySymbol = 'My Symbol'
let symbol = Symbol(mySymbol)
console.log(symbol.description);