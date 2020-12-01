function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve(frase) //resolve asseita apenas um parametro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?')) //then pegar o resultado da promisse atendida
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // catch trata o erro