// console.log(global)
global.MinhaApp = Object.freeze({ //freeze o objeto está congelado e não pode ser modificado em nenhum lugar
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})

//criando no global, fica disponivel para tds