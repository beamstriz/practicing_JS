// const acesso = (nome) => {
//     return `${nome} logou com sucesso no sistema!`
// }

// const usuarioLogin = (nome) => {
//     let array = []
//     for (i = 0; i < 90000; i++){
//         array.push(i)
//     }
//     return acesso (nome)
// }

// acesso("Luke")

const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema`
}

const usuarioLogin = (nome) => {
    let array = []
    for (i = 0; i < 90000; i++){
        array.push(i)
    }
    return acesso(nome)
}

const diretoriaLogin = (nome) => {
    let array = []
    for (i=0; i<900000; i++){
        array.push(i)
    }
    return acesso(nome)
}

console.log(diretoriaLogin("Leia"))