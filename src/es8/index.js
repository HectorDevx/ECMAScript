//-------------------------------------------------- Object Entries
    // Devuelve los valores de una matriz (arreglo) en forma de objeto.

const data = {
    frontend: 'Héctor',
    backend: 'Jesica',
    design: 'Ana'
}

const entries = Object.entries(data)
 console.log(entries);
console.log(entries.length);


//-------------------------------------------------- Object Values
    // Devuelve los valores de un objeto a un arreglo

const data = {
    frontend: 'Héctor',
    backend: 'Jesica',
    design: 'Ana'
}

const values = Object.values(data)
console.log(values)
console.log(values.length)


//-------------------------------------------------- Padding
    // Agregar una cadena vacia o elementos a algun string.

const string = 'hello'
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' ------'));
console.log('food.padEnd'(12,' -------'));


//-------------------------------------------------- Trailing Comas
    // Nos pemrite añadir elementos en un arreglo u objeto separados por comas.

const obj = {
    name: 'hector',
}


//-------------------------------------------------- Async y Await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();