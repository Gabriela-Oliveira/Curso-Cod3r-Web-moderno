console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

//dentro de uma função, não aponta para o esport e sim para global. Mas fora sim

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()