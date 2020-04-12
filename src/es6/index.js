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

let hello = "Hello"
let world = "World"
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

//ES6
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)