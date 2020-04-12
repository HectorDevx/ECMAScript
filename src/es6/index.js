//----------------------------------------------- Default Params
function newFunction(name, age, country) {
    var name = name || 'hector'
    var age = age || 27
    var country = country || 'MX'
    console.log(name, age, country)
}

// ES6
function newFunction2(name = 'hector', age = 27, country = "MX") {
    console.log(name, age, country)
}

newFunction2();
newFunction2('Oscar', '23', 'CO');


//---------------------------------------------- Concatenación
let hello = "Hello"
let world = "World"
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

//ES6
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)


//---------------------------------------------- Multilínea
let lorem = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \n"
+ "Aenean commodo ligula eget dolor."

//ES6
let lorem2 = `Aenean commodo ligula eget dolor.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
`
console.log(lorem)
console.log(lorem2)


//---------------------------------------------- Desestructuración
let person = {
    'name': 'hector',
    'age': '27',
    'country': 'MX'
}

console.log(person.name, person.age, person.country);

// ES6
let { name, age, country } = person;
console.log(name, age, country);


//---------------------------------------------- Operador de Propagación || Spread Operator
let team1 = ['Oscar', 'Héctor', 'Ricardo']
let team2 = ['Valeria', 'Jesica', 'Camila']

// ES6
let education = ['David', ...team1, ...team2]

console.log(education);


//---------------------------------------------- LET y VAR
{
    var globalVar = "Global var"
}

{
    let globalLet = "Global Let"
    console.log(globalLet);
}

console.log(globalVar);
console.log(globalLet);


//--------------------------------------------- Const

const a = 'b';
console.log(a);


//--------------------------------------------- Parámetros en Objetos
let name = 'Héctor'
let age = 27

obj = { name: name, age: age }

//ES6
obj2 = { name, age }
console.log(obj2);


//--------------------------------------------- Arrow Functions
const names = [
    {name: 'Héctor', age: 27},
    {name: 'Jesica', age: 29}
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

// ES6
let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age) => {
    console.log(item.name)
}

const listOfNames4 = name => {
    console.log(item.name)
}

const square = num => num * num //Función que multiplica un número por si mismo


//----------------------------------------------- Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        } else {
            reject('Ups!')
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));