//-------------------------------------------------- Operador de Reposo
    // Puede extraer las propiedades de un objeto que aún no se ha construido

const obj = {
    name: 'Héctor',
    age: 27,
    country: 'MX'
}

let { name, ...all } = obj
console.log(all);


//-------------------------------------------------- Propagación
    // Utilizando propiedades de propagación se pueden añadir multiples objetos a otros objetos mediante ...nombre_objeto

const obj = {
    name: 'Héctor',
    age: 27
}

const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1);


//-------------------------------------------------- Promise Finally
    // Podemos saber cuando ha terminado el llamado para realizar una lógica.

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo!'))


//-------------------------------------------------- Regex
    // Agrupar bloques y acceder a cada uno de ellos

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')

const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);