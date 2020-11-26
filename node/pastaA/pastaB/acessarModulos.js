const moduloA = require('../../moduloA') //importando modulo A
console.log(moduloA.ola)

const saudacao = require('saudacao') //importa da pasta criada no no_modules
console.log(saudacao.ola)

const c = require('./pastaC') //referenciando direto dentro da pasta c
console.log(c.ola2)

const http = require('http') //criando pelo http
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)